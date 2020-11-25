// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA00LdoEN3FG_QZ1FfKf97IuspcD32YC1g",
  authDomain: "aminesite-a96b6.firebaseapp.com",
  databaseURL: "https://aminesite-a96b6.firebaseio.com",
  projectId: "aminesite-a96b6",
  storageBucket: "aminesite-a96b6.appspot.com",
  messagingSenderId: "265699412790",
  appId: "1:265699412790:web:607c91ca5cbb24556c8197",
  measurementId: "G-RN1S77KW80",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
