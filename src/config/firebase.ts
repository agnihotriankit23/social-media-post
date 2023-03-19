// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCwaRdjpC59Y1q83dkUjVF_gdqGEE-1xdc",
  authDomain: "social-media-post-3e980.firebaseapp.com",
  projectId: "social-media-post-3e980",
  storageBucket: "social-media-post-3e980.appspot.com",
  messagingSenderId: "537363578079",
  appId: "1:537363578079:web:4be899a3d54ef7ee18fd6a",
  measurementId: "G-02F07R677P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app)