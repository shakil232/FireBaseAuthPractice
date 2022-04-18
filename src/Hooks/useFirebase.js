import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    GithubAuthProvider,
    FacebookAuthProvider,
    onAuthStateChanged,
    signOut
} from "firebase/auth";

// createUserWithEmailAndPassword,
// signInWithEmailAndPassword,
// updateProfile,
import { useEffect, useState } from "react";
import initializeFirebaseApp from "../FireBase/firebase.init";

initializeFirebaseApp();

const useFirebase = () => {
    const auth = getAuth();
    const [user, setUser] = useState({
        isSignedIn: false,
        name: '',
        email: '',
        password: '',
        success: false,
        error: '',
        photo: ''
    });



    // Google-Sign-In 
    const googleSignIn = () => {
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider)
    };

    // facebook-Sign-In 
    const facebookSignIn = () => {
        const facebookProvider = new FacebookAuthProvider();
        return signInWithPopup(auth, facebookProvider)
    };

    // github-Sign-In 
    const githubSignIn = () => {
        const githubProvider = new GithubAuthProvider();
        return signInWithPopup(auth, githubProvider)
    };

    // auth-stageChange 
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            }
            else {
                // User is signed out
                // ...
            }
        });
        return () => unsubscribe;
    }, []);

    // LogOut
    const logOut = () => {
        signOut(auth)
            .then(() => setUser({}))
            .catch(err => {
                const newUserInfo = { ...user };
                newUserInfo.success = false;
                newUserInfo.error = err.message;
                setUser(newUserInfo)
            });
    };


    return {
        user,
        setUser,
        googleSignIn,
        facebookSignIn,
        githubSignIn,
        logOut
    }
}

export default useFirebase;