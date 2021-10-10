import initializationFirebase from '../firebase/firebase.init';
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from 'react';


initializationFirebase()
const googleProvider = new GoogleAuthProvider();

const useFirebase = () => {
    const auth = getAuth();

    const [user, setUser] = useState({})
    const [error, setError] = useState()

    const handleSignInWithGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {

                setUser(result.user)
            })
            .catch((e) => {
                setError(e.message)
            })

    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)

            } else {
                setError("")
            }
        });
    }, [])

    const logOut = () => {
        signOut(auth)
            .then(() => {

                setUser({})
            }).catch((error) => {
                setError(error.message)
            });

    }

    return {
        user,
        logOut,
        handleSignInWithGoogle
    }
};

export default useFirebase;