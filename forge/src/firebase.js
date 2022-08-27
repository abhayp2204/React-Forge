// Import firebase
import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"
import { getStorage } from "firebase/storage";

// Initialize firebase
const firebaseConfig = {
	apiKey: "AIzaSyBgKC5VYeYDvdMm1EHFwwmmWyK9trzMMow",
    authDomain: "forge-d7866.firebaseapp.com",
    databaseURL: "https://forge-d7866-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "forge-d7866",
    storageBucket: "forge-d7866.appspot.com",
    messagingSenderId: "188970619720",
    appId: "1:188970619720:web:112367327401d0430f997d",
    measurementId: "G-4KC58TES25"
};

export const app = firebase.initializeApp(firebaseConfig)
export const auth = firebase.auth()
export const storage = getStorage(app)
