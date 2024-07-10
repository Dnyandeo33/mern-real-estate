// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "mern-real-estate-e60b2.firebaseapp.com",
    projectId: "mern-real-estate-e60b2",
    storageBucket: "mern-real-estate-e60b2.appspot.com",
    messagingSenderId: "336190076811",
    appId: "1:336190076811:web:70384db768671ff9cea18e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);