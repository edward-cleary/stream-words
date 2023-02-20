// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA4JesGKF58W3IcQvXjanQZ1edEwMYPADU",
  authDomain: "stream-words-ce7c1.firebaseapp.com",
  projectId: "stream-words-ce7c1",
  storageBucket: "stream-words-ce7c1.appspot.com",
  messagingSenderId: "338355973723",
  appId: "1:338355973723:web:05a35656c9384a38b2597e",
  measurementId: "G-49EZKBCKP0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getFirestore(app);
