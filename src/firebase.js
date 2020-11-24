// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCSMnysNiZV7x0EMatdI6_0iYwoDZT8wEk",
  authDomain: "challenge-d8452.firebaseapp.com",
  databaseURL: "https://challenge-d8452.firebaseio.com",
  projectId: "challenge-d8452",
  storageBucket: "challenge-d8452.appspot.com",
  messagingSenderId: "429994738459",
  appId: "1:429994738459:web:93dfbd76f5f8a1825349be",
  measurementId: "G-0Z26KJTENB",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
