import { useEffect, useState } from "react"
import initializeFirebase from "../Firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";

initializeFirebase();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [errorMessage, seterrorMessage] = useState('');
    const [isLoding, setisLoding] = useState(true);

    const auth = getAuth();
    const googleprovider = new GoogleAuthProvider();

    const createAccountWithEmail = (email, password) => {
        setisLoding(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
            })
            .catch((error) => {
                seterrorMessage(error.message);
            })
            .finally(() => setisLoding(false));

    };
    const loginWithEmail = (email, password) => {
        setisLoding(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
            })
            .catch((error) => {
                seterrorMessage(error.message);
            })
            .finally(() => setisLoding(false));
    };
    const loginWithGoogle = () => {
        setisLoding(true);
        signInWithPopup(auth, googleprovider)
            .then((result) => {
                const user = result.user;
                // ...
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
    const logOut = () => {
        setisLoding(true);
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        })
            .finally(() => setisLoding(false));
    }
    return {
        user,
        errorMessage,
        isLoding,
        createAccountWithEmail,
        loginWithEmail,
        loginWithGoogle,
        logOut,
    }
}

export default useFirebase;