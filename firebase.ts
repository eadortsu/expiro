// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
const firebaseConfig = {
    apiKey: "AIzaSyB1C752YZFdaqE1OE7IFJzSBKXoFr-0nI4",
    authDomain: "expiro-592b8.firebaseapp.com",
    projectId: "expiro-592b8",
    storageBucket: "expiro-592b8.appspot.com",
    messagingSenderId: "294468294069",
    appId: "1:294468294069:web:7590ffb08b49fa662735fc",
    measurementId: "G-83EWDC1BE8"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export default { db, auth };
