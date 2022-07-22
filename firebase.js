import firebase from "firebase/app";
require("firebase/database");
require("firebase/firestore");
require("firebase/auth");

const firebaseConfig = {
  apiKey: "AIzaSyDd17msB2pLiRbnDg9S40oshD5XYv467KI",
  authDomain: "carpoolapp-355012.firebaseapp.com",
  projectId: "carpoolapp-355012",
  storageBucket: "carpoolapp-355012.appspot.com",
  messagingSenderId: "1096859562810",
  appId: "1:1096859562810:web:c543df8418202780dd1603",
  databaseURL: "https://carpoolapp-355012-default-rtdb.firebaseio.com",
};

// Initialize Firebase
// let app;
// if (firebase.apps.length === 0) {
//   app = firebase.initializeApp(firebaseConfig);
// } else {
//   app = firebase.app();
// }

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.database();
const firestore = firebase.firestore();

export { auth, db, firestore };
