// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyD-ghIFKZ8IxPQ5XVRB7SXybUNBrsrUujc",
  authDomain: "e-store-dd1b0.firebaseapp.com",
  projectId: "e-store-dd1b0",
  storageBucket: "e-store-dd1b0.appspot.com",
  messagingSenderId: "106123047549",
  appId: "1:106123047549:web:402e799dc99a568c033714",
  measurementId: "G-JNX3F1DRF2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export default app;