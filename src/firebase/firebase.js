// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBizypoKhsrE8mPQ4_-OPCzElvOQnI5btU",
  authDomain: "dating03-15a51.firebaseapp.com",
  projectId: "dating03-15a51",
  storageBucket: "dating03-15a51.appspot.com",
  messagingSenderId: "509024040980",
  appId: "1:509024040980:web:211bb4971026d3167b0f01",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const storage = getStorage();

export { db, storage };
