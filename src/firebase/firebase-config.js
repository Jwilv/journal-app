import { initializeApp } from 'firebase/app'
import 'firebase/firestore';
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';



const firebaseConfig = {
    apiKey: "AIzaSyD6z7hfiKBLNWb9H2yoChupJTz1AMfwBn0",
    authDomain: "react-app-c41bb.firebaseapp.com",
    projectId: "react-app-c41bb",
    storageBucket: "react-app-c41bb.appspot.com",
    messagingSenderId: "833719385036",
    appId: "1:833719385036:web:314d5cd0e71c9efa3fbb69"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

const googleAuthProvider = () => {
    const googleProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleProvider)
}

const signup = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
};

export {
    db,
    googleAuthProvider,
    signup,
    auth,
}