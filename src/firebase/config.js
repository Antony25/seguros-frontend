// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore/lite'

const firebaseConfig = {
  apiKey: "AIzaSyAkXcNYLo92iFerKfPM9xWXhVN38cVYwPU",
  authDomain: "wpa-test-deb6a.firebaseapp.com",
  projectId: "wpa-test-deb6a",
  storageBucket: "wpa-test-deb6a.appspot.com",
  messagingSenderId: "831137887952",
  appId: "1:831137887952:web:2802789d6f78044b7750d5",
  measurementId: "G-4N4M4N9NG6"
};

// Initialize Firebase
 export const FirebaseApp = initializeApp(firebaseConfig);
 export const FirebaseAuth = getAuth(FirebaseApp)
 export const FirebaseDB = getFirestore(FirebaseApp)
const analytics = getAnalytics(FirebaseApp);