// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/init'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBBkoKNdwcX0kwaf_JpIy-Fmm9RRcrIrUc",
    authDomain: "techlog-73589.firebaseapp.com",
    projectId: "techlog-73589",
    storageBucket: "techlog-73589.appspot.com",
    messagingSenderId: "872900316184",
    appId: "1:872900316184:web:40099f0ebdc627318f876d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;