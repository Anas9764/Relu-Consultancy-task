// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCkE3-jzSqVLGO0lhx0BKD7opxI36IY1TA",
  authDomain: "fir-auth-4b8ef.firebaseapp.com",
  projectId: "fir-auth-4b8ef",
  storageBucket: "fir-auth-4b8ef.appspot.com",
  messagingSenderId: "1022608008464",
  appId: "1:1022608008464:web:70d6604f5307495eddf195",
  measurementId: "G-4QV104XHZB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const auth = getAuth();

export {app, auth};