// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBsSBlzBIQihepGMSKlWY78YScpanFqXSQ",
  authDomain: "neilugram.firebaseapp.com",
  projectId: "neilugram",
  storageBucket: "neilugram.appspot.com",
  messagingSenderId: "88300819942",
  appId: "1:88300819942:web:e8759acc996c780ad53227",
  measurementId: "G-BSVCD8YSYJ",
}

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const storage = getStorage()

export { app, db, storage }
