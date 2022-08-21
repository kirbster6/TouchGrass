import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";


const firebaseConfig = {
  apiKey: "AIzaSyBRHOhs0UYUGf5PSAuus8kLZw8pY4nAcnE",
  authDomain: "touchgrass-afe70.firebaseapp.com",
  projectId: "touchgrass-afe70",
  storageBucket: "touchgrass-afe70.appspot.com",
  messagingSenderId: "544632985481",
  appId: "1:544632985481:web:420ec934c666dd35ad7358",
  measurementId: "G-1RHT65CCRM"
};

// Initialize Firebase and SDKs
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const database = getDatabase(app);