
import "./css/App.css"
import { useState } from "react"

// Firebase
import { auth, app } from "./firebase.js"
import { createUserWithEmailAndPassword } from "firebase/auth"
import "firebase/compat/firestore"

// Components
import SignUp from "./components/auth/SignUp"
import SignIn from "./components/auth/SignIn"
import Navbar from "./components/Navbar"

function App() {
	return (
		<div className="App">
            <SignUp />
            <SignIn />
            <button onClick={() => console.log(auth)}>Click me</button>
		</div>
	);
}

export default App