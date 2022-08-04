import { initializeApp } from 'firebase/app';

import { getAuth } from "firebase/auth";
import { getFirerestore } from "firebase/firerestore";
import { getAnalytics } from "firebase/analytics";

const firebaseApp = initializeApp({
    apiKey: "AIzaSyBqBhZL96a5P4LcUG_cFpchfblfREGAbE8",
  authDomain: "first-try-jacob-varughese.firebaseapp.com",
  projectId: "first-try-jacob-varughese",
  storageBucket: "first-try-jacob-varughese.appspot.com",
  messagingSenderId: "1050388557924",
  appId: "1:1050388557924:web:7fe80f3a5ed8a654e36f71",
  measurementId: "G-PZ48RYZRQZ"
});
const auth = getAuth(firebaseApp);
const db = getFirerestore(firebaseApp);
const analytics = getAnalytics(firebaseApp);