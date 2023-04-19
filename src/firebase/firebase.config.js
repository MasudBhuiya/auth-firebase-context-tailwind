// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBDUojw7IP9oLPcffiTT4HRbwNUTrKsXZI",
  authDomain: "auth-firebase-context-ta-b9d0d.firebaseapp.com",
  projectId: "auth-firebase-context-ta-b9d0d",
  storageBucket: "auth-firebase-context-ta-b9d0d.appspot.com",
  messagingSenderId: "772740548602",
  appId: "1:772740548602:web:ac2847b875b6b9992f4643"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;