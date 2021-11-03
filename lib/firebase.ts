import { getApp, getApps, initializeApp } from 'firebase/app';
import {
    getFirestore,
    collection as Collection,
    doc as Doc,
} from 'firebase/firestore';
import {
    getAuth,
    GoogleAuthProvider,
    signInWithPopup as SignInWithPopup,
    signOut as SignOut,
} from 'firebase/auth';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: 'AIzaSyBcv3IQcwibJaGH3j-GV3HYOo34zGKQduo',
    authDomain: 'nextfire-1313e.firebaseapp.com',
    projectId: 'nextfire-1313e',
    storageBucket: 'nextfire-1313e.appspot.com',
    messagingSenderId: '753679875656',
    appId: '1:753679875656:web:a7451b3a18a01c68d0e27d',
    measurementId: 'G-V8NRRZECP0',
};

let app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

export const googleAuthProvider = new GoogleAuthProvider();
export const auth = getAuth(app);
export const signInWithGoogle = async () =>
    await SignInWithPopup(auth, googleAuthProvider);
export const signOut = async () => await SignOut(auth);
export const firestore = getFirestore(app);
export const storage = getStorage(app);