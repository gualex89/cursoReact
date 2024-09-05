// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore/lite'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBGdpNUhECZFsWTaorJ9x5j903Jrz4kjTM",
  authDomain: "react-curso-18383.firebaseapp.com",
  projectId: "react-curso-18383",
  storageBucket: "react-curso-18383.appspot.com",
  messagingSenderId: "657058341972",
  appId: "1:657058341972:web:9324e69f9c9bf8dd3579c1"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);

export const FirebaseAuth = getAuth(FirebaseApp)

export const FirebaseDB = getFirestore(FirebaseApp)


