import { useEffect, useState } from "react"
import initializeFirebase from "../Firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";

initializeFirebase();

const useFirebase = () => {
    const [user, setUser] = useState([]);
    const [errorMessage, seterrorMessage] = useState('');

    const auth = getAuth();
    const googleprovider = new GoogleAuthProvider();

    const createAccountWithEmail = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
            })
            .catch((error) => {
                seterrorMessage(error.message);
            });
    };
    const loginWithEmail = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
            })
            .catch((error) => {
                seterrorMessage(error.message);
            });
    };
    const loginWithGoogle = () => {
        signInWithPopup(auth, googleprovider)
            .then((result) => {
                const user = result.user;
                // ...
            }).catch((error) => {
                seterrorMessage(error.message);
            });
    }
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                // const uid = user.uid;
                setUser(user);
            }
            else {
                setUser([]);
            }
        });
    }, []);
    const logOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        });
    }
    return {
        user,
        errorMessage,
        createAccountWithEmail,
        loginWithEmail,
        loginWithGoogle,
        logOut,
    }
}

export default useFirebase;