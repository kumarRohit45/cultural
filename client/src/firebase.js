// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBYbSvHNy4z1VdFIcmj1vPMxso1kBbLOQE",
  authDomain: "cultural-tourism-9.firebaseapp.com",
  projectId: "cultural-tourism-9",
  storageBucket: "cultural-tourism-9.appspot.com",
  messagingSenderId: "932488605956",
  appId: "1:932488605956:web:31c7ecad5d79878b686051",
  measurementId: "G-TMN7WKZ04V"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);