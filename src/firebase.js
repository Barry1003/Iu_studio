// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCqJAa4v71tCIzLl1pRMF54eVLWfuomd-Q",
  authDomain: "new-test-fe4af.firebaseapp.com",
  projectId: "new-test-fe4af",
  storageBucket: "new-test-fe4af.appspot.com",
  messagingSenderId: "802447836165",
  appId: "1:802447836165:web:de96f59796f1e7faffc86c",
  measurementId: "G-5MVNTVB8HE"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig); 
export const auth = getAuth(app);
export const db = getFirestore(app) 



// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app"; 
// import { getAuth } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";

// const firebaseConfig = {
//   apiKey: "AIzaSyAcu2BukTFxU0n6I4t740IQV3XtdCgXMnk",
//   authDomain: "iustudio.firebaseapp.com",
//   projectId: "iustudio",
//   storageBucket: "iustudio.appspot.com",
//   messagingSenderId: "313317107086",
//   appId: "1:313317107086:web:bbfbaff5a526a055d970df",
//   measurementId: "G-D3H0H6FN6L"
// };

// // Initialize Firebase
// export const app = initializeApp(firebaseConfig);
// export const db = getFirestore(app);
// export const auth = getAuth(app);
