import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

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

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export{
    db,
    googleAuthProvider,
    firebase,
}