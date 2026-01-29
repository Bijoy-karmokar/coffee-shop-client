// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAkkNVezmcBUesnfXFQM1_IQ1dNmTNVdQE",
  authDomain: "coffee-shop-app-55889.firebaseapp.com",
  projectId: "coffee-shop-app-55889",
  storageBucket: "coffee-shop-app-55889.firebasestorage.app",
  messagingSenderId: "85482023371",
  appId: "1:85482023371:web:795e57e2de70c0c13f2e4e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);