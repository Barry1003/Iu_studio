// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAcu2BukTFxU0n6I4t740IQV3XtdCgXMnk",
  authDomain: "iustudio.firebaseapp.com",
  projectId: "iustudio",
  storageBucket: "iustudio.appspot.com",
  messagingSenderId: "313317107086",
  appId: "1:313317107086:web:bbfbaff5a526a055d970df",
  measurementId: "G-D3H0H6FN6L"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
