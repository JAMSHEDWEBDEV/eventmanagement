// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCrzQHWPiFX1bLiPi4bficXkmhC6GBp8Tk",
  authDomain: "health-care-project-63d9b.firebaseapp.com",
  projectId: "health-care-project-63d9b",
  storageBucket: "health-care-project-63d9b.appspot.com",
  messagingSenderId: "138129978428",
  appId: "1:138129978428:web:96eb06fa683cf4ae5bff39"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;