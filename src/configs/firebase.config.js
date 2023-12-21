import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDq3AS3_aHt7qWaH5YN9MwhpeJ4R073Rek",
  authDomain: "tasker-job.firebaseapp.com",
  projectId: "tasker-job",
  storageBucket: "tasker-job.appspot.com",
  messagingSenderId: "390787284571",
  appId: "1:390787284571:web:20bad1d0eeab57b7ecc97e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
