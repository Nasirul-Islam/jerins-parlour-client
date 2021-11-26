import { useEffect, useState } from "react"
import initializeFirebase from "../Firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, GoogleAuthProvider, signInWithPopup, updateProfile, signOut } from "firebase/auth";

initializeFirebase();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [errorMessage, seterrorMessage] = useState('');
    const [isLoding, setisLoding] = useState(true);
    const [admin, setadmin] = useState(false);

    const auth = getAuth();
    const googleprovider = new GoogleAuthProvider();

    const createAccountWithEmail = (email, password, displayName, location, navigate) => {
        setisLoding(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const newuser = { email, displayName };
                setUser(newuser);
                // send user info to db
                saveusertodb(newuser, 'POST');
                // update profile
                updateProfile(auth.currentUser, {
                    displayName: displayName
                }).then(() => {
                }).catch((error) => {
                });
                // redirect
                const distination = location?.state?.from || "/";
                navigate(distination);
                seterrorMessage('');
            })
            .catch((error) => {
                seterrorMessage(error.message);
            })
            .finally(() => setisLoding(false));

    };
    const loginWithEmail = (email, password, location, navigate) => {
        setisLoding(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                // const user = userCredential.user;
                const distination = location?.state?.from || "/";
                navigate(distination);
                seterrorMessage('');
            })
            .catch((error) => {
                seterrorMessage(error.message);
            })
            .finally(() => setisLoding(false));
    };
    const loginWithGoogle = (location, navigate) => {
        setisLoding(true);
        signInWithPopup(auth, googleprovider)
            .then((result) => {
                const user = result.user;
                // send user info to db
                saveusertodb(user, 'PUT');
                // redirect
                const distination = location?.state?.from || "/";
                navigate(distination);
                seterrorMessage('');
            }).catch((error) => {
                seterrorMessage(error.message);
            })
            .finally(() => setisLoding(false));
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({});
            }
            setisLoding(false)
        });
        return () => unsubscribe;
    }, [auth]);
    // load admin
    useEffect(() => {
        fetch(`https://blooming-woodland-11571.herokuapp.com/users/${user?.email}`)
            .then(res => res.json())
            .then(data => setadmin(data.admin))
    }, [user?.email]);
    // log out
    const logOut = () => {
        setisLoding(true);
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        })
            .finally(() => setisLoding(false));
    }
    // save user to db
    const saveusertodb = (user, method) => {
        fetch('https://blooming-woodland-11571.herokuapp.com/users', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => console.log(data))
    }
    // 
    return {
        user,
        errorMessage,
        isLoding,
        admin,
        createAccountWithEmail,
        loginWithEmail,
        loginWithGoogle,
        logOut,
    }
}

export default useFirebase;