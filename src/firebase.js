// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCyrwbRVH5-vTQFfP10WrGHwOy1d54Vmc8",
  authDomain: "login-a7e61.firebaseapp.com",
  projectId: "login-a7e61",
  storageBucket: "login-a7e61.appspot.com",
  messagingSenderId: "736857025841",
  appId: "1:736857025841:web:e470c88393737afcb65410"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)