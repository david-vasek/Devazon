import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAddv5raGv294DvNekAaakP-SqMuuqD8kk",
  authDomain: "devazon-d12b1.firebaseapp.com",
  databaseURL: "https://devazon-d12b1.firebaseapp.com",
  projectId: "devazon-d12b1",
  storageBucket: "devazon-d12b1.appspot.com",
  messagingSenderId: "154998187079",
  appId: "1:154998187079:web:3b003739c495834556fd62",
  measurementId: "G-C7SD505HLW",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
