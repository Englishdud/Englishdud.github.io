// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBOrztlh6WKrYO38YVFcFUrblu-z7OAGnA",
  authDomain: "jacobvarugheseme.firebaseapp.com",
  projectId: "jacobvarugheseme",
  storageBucket: "jacobvarugheseme.appspot.com",
  messagingSenderId: "437981218467",
  appId: "1:437981218467:web:65a4b2728cbca6b9596116",
  measurementId: "G-SGS8YNVE8Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);