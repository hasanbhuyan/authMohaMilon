// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA4goIRLxeX_VCf8KcSB2ioJK_rzs2XCTQ",
  authDomain: "auath-moham-milon.firebaseapp.com",
  projectId: "auath-moham-milon",
  storageBucket: "auath-moham-milon.firebasestorage.app",
  messagingSenderId: "93453350306",
  appId: "1:93453350306:web:29c69c42a209914bf1eefb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);