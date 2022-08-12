
// // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import firebase from 'firebase';
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBfX6pnRA-7w8lMP_ne77tyzWr_rAvoIF8",
  authDomain: "locations-6642d.firebaseapp.com",
  databaseURL: "https://locations-6642d-default-rtdb.firebaseio.com",
  projectId: "locations-6642d",
  storageBucket: "locations-6642d.appspot.com",
  messagingSenderId: "967698276361",
  appId: "1:967698276361:web:51da6732c629a92271d8d8",
  measurementId: "G-MJJEYLQ0GM"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
var storage =  firebase.storage();

export default storage;