import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    GithubAuthProvider,
    FacebookAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
    onAuthStateChanged,
    signOut
} from "firebase/auth";

import { useEffect, useState } from "react";
import initializeFirebaseApp from "../FireBase/firebase.init";

// call-initialize 
initializeFirebaseApp();

// all-firebase-auth
const useFirebase = () => {
    // state 
    const auth = getAuth();
    const [user, setUser] = useState({
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
            .then(res => {
                const { displayName, email } = res.user;
                const signInUser = {
                    displayName: displayName,
                    email: email,
                    success: true,
                    error: '',
                }
                return signInUser;
            })
            .catch(err => {
                const newUserInfo = {};
                newUserInfo.success = false;
                newUserInfo.error = err.message;
                return newUserInfo;
            });
    };

    // facebook-Sign-In 
    const facebookSignIn = () => {
        const facebookProvider = new FacebookAuthProvider();
        return signInWithPopup(auth, facebookProvider)
            .then(res => {
                const { displayName, email } = res.user;
                const signInUser = {
                    displayName: displayName,
                    email: email,
                    success: true,
                    error: '',
                }
                return signInUser;
            })
            .catch(err => {
                const newUserInfo = {};
                newUserInfo.success = false;
                newUserInfo.error = err.message;
                return newUserInfo;
            });
    };

    // github-Sign-In 
    const githubSignIn = () => {
        const githubProvider = new GithubAuthProvider();
        return signInWithPopup(auth, githubProvider)
            .then(res => {
                const { displayName, email } = res.user;
                const signInUser = {
                    displayName: displayName,
                    email: email,
                    success: true,
                    error: '',
                }
                return signInUser;

            })
            .catch(err => {
                const newUserInfo = {};
                newUserInfo.success = false;
                newUserInfo.error = err.message;
                return newUserInfo;
            });
    };

    // user-create
    const createWithEmailAndPassword = (name, email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
            .then(res => {
                const newUserInfo = res.user;
                newUserInfo.success = true;
                newUserInfo.error = '';
                updateProfileInfo(name);
                console.log(name)
                return newUserInfo;
            })
            .catch(err => {
                const newUserInfo = {};
                newUserInfo.success = false;;
                newUserInfo.error = err.message;
                return newUserInfo;
            });
    };

    // user-login-email-pass 
    const signInEmailAndPassword = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
            .then(res => {
                const newUserInfo = res.user;
                newUserInfo.success = true;
                newUserInfo.error = '';
                console.log(res.user)
                return newUserInfo;
            })
            .catch(err => {
                const newUserInfo = {};
                newUserInfo.success = false;;
                newUserInfo.error = err.message;
                return newUserInfo;
            });
    };

    // update-userProfile 
    const updateProfileInfo = name => {
        updateProfile(auth.currentUser, {
            displayName: name,
        })
            .then(() => {})
            .catch(() => {});
    };

    // auth-stageChange 
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            }
        });
        return () => unsubscribe;
    }, []);

    // LogOut
    const logOut = () => {
        signOut(auth)
            .then(() => setUser({}))
            .catch(() => { });
    };


    return {
        user,
        setUser,
        googleSignIn,
        facebookSignIn,
        githubSignIn,
        createWithEmailAndPassword,
        signInEmailAndPassword,
        logOut
    }
}

export default useFirebase;