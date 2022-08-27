import "./css/App.css"
import { useState } from "react"

// Firebase
import { auth, app } from "./firebase.js"
import { createUserWithEmailAndPassword } from "firebase/auth"
import "firebase/compat/firestore"
import { useAuthState } from "react-firebase-hooks/auth"

// Components
import Navbar from "./components/Navbar"

function App() {
    // const [user] = useAuthState(auth)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = (e) => {
        createUserWithEmailAndPassword(auth, email, password)
        .then((res) => {
            console.log(res.user)
        })
        .catch((err) => {
            alert(err.message)
        })
    }

	return (
		<div className="App">
            <form onSubmit={(e) => handleSubmit(e)}>
                <input
                    name="email"
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                    />
                <input
                    name="password"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Submit</button>
            </form>
		</div>
	);
}

export default App