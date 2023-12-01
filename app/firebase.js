// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCnHug8-NvulovSDIxkTAnLOSuSfEP0DVA",
  authDomain: "home-7ac41.firebaseapp.com",
  projectId: "home-7ac41",
  storageBucket: "home-7ac41.appspot.com",
  messagingSenderId: "1090523698815",
  appId: "1:1090523698815:web:8863696d00de6d8273914a",
  measurementId: "G-TKCY99T1CF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);