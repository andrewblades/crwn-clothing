import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyAOOjpycurPvSu7NK9q_ZUj0zhiiLeDMlY",
  authDomain: "crwn-db-18c0d.firebaseapp.com",
  projectId: "crwn-db-18c0d",
  storageBucket: "crwn-db-18c0d.appspot.com",
  messagingSenderId: "9057394834",
  appId: "1:9057394834:web:cc64122413dd649866464b",
  measurementId: "G-6EDCH9XKYV",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
