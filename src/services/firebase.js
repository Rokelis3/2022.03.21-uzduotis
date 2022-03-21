import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBHUaL4ZZv_6pNssFm7A0qHXv34KW8xwp4",
  authDomain: "uzduotis-cab44.firebaseapp.com",
  projectId: "uzduotis-cab44",
  storageBucket: "uzduotis-cab44.appspot.com",
  messagingSenderId: "1008906177157",
  appId: "1:1008906177157:web:4269a9b0ac9a192224b7ec",
  measurementId: "G-6X8XKL8Z2Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export async function login(email, password){
const auth = getAuth();
return signInWithEmailAndPassword(auth, email, password)
  .then((result) => {
    const user = result.user;
    return {username: user.email}
  })
}