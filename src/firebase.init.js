// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyALEDtMj7WJx3sc_KL6ur_gZ-RKybPxBgs",
  authDomain: "mr-appler.firebaseapp.com",
  projectId: "mr-appler",
  storageBucket: "mr-appler.appspot.com",
  messagingSenderId: "652219643458",
  appId: "1:652219643458:web:691cd7bd75310b65a55fdb",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
