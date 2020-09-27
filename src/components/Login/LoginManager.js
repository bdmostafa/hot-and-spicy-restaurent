import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebase.config";


// Initialize Firebase for the first time
export const initFirebase = () => {
    if (firebase.apps.length === 0) firebase.initializeApp(firebaseConfig);
}

export const createUserWithEmailAndPassword = (name, email, password) => {
    console.log(name, email, password)
    return firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(res => {
            const newUserInfo = res.user;
            newUserInfo.name = name;
            newUserInfo.error = '';
            newUserInfo.success = true;
            updateUserName(name);
            verifyEmail();
            return newUserInfo;
        })
        .catch(error => {
            const newUserInfo = {};
            newUserInfo.error = error.message;
            newUserInfo.success = false;
            return newUserInfo;
        });
}

export const signInWithEmailAndPassword = (email, password) => {
    return firebase.auth().signInWithEmailAndPassword(email, password)
        .then(res => {
            const newUserInfo = res.user;
            newUserInfo.error = '';
            newUserInfo.success = true;
            return newUserInfo;
        })
        .catch(err => {
            const newUserInfo = {}
            newUserInfo.error = err.message;
            newUserInfo.success = false;
            return newUserInfo;
        });
}

export const handleFBSignIn = () => {
    const FacebookProvider = new firebase.auth.FacebookAuthProvider();
    return firebase.auth().signInWithPopup(FacebookProvider)
        .then(res => {
            const { displayName, email, photoURL } = res.user;
            const signedInUser = {
                isSignedIn: true,
                name: displayName,
                email,
                image: photoURL
            }
            return signedInUser;
        })
        .catch(err => {
            const signedInUser = {}
            signedInUser.error = err.message;
            signedInUser.success = false;
            return signedInUser;
        });
}

export const handleGoogleSignIn = () => {
    const googleProvider = new firebase.auth.GoogleAuthProvider();

    return firebase.auth().signInWithPopup(googleProvider)
        .then(res => {
            const { displayName, email, photoURL } = res.user;
            console.log(res.user)
            const signedInUser = {
                isSignedIn: true,
                name: displayName,
                email,
                image: photoURL
            }
            return signedInUser;
        })
        .catch(err => { 
            const signedInUser = {}
            signedInUser.error = err.message;
            signedInUser.success = false;
            return signedInUser;
        })
}

const updateUserName = name => {
    const user = firebase.auth().currentUser;
    user.updateProfile({ displayName: name })
        .then(() => {
            console.log('Name Updated')
        }).catch(() => { });
}

const verifyEmail = () => {
    const user = firebase.auth().currentUser;
    user.sendEmailVerification()
        .then(() => {
            console.log('Verification link is sent')
        }).catch(() => { });
}

export const resetPassword = email => {
    const auth = firebase.auth();
    return auth.sendPasswordResetEmail(email)
}

export const handleSignOut = () => {
    return firebase.auth().signOut()
        .then(res => {
            const signedOutUser = {
                isSignedIn: false,
                name: '',
                fName: '',
                email: ''
            }
            return signedOutUser
        })
        .catch(() => {

        })
}