// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBC6UUSRFNAGPSPF37zZbmmvsDcFXy47Ls",
  authDomain: "pizzaapp-3033e.firebaseapp.com",
  projectId: "pizzaapp-3033e",
  storageBucket: "pizzaapp-3033e.appspot.com",
  messagingSenderId: "339231555787",
  appId: "1:339231555787:web:c3866fe93bf299dad21b4e",
  measurementId: "G-J387YN4JNK"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)


const auth = getAuth(app)