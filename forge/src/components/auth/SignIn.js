import React, { useState} from "react"

// Firebase
import { auth } from "../../firebase.js"
import { signInWithEmailAndPassword } from "firebase/auth"
import "firebase/compat/firestore"

function SignIn() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = (e) => {
        alert("submitting")
        signInWithEmailAndPassword(auth, email, password)
        .then((res) => {
            console.log(res.user)
        })
        .catch((err) => {
            alert(err.message)
        })
    }

	return (
		<div className="App">
            Sign In

            <div>
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
                <button onClick={(e) => handleSubmit(e)}>Sign in</button>
            </div>
		</div>
	);
}

export default SignIn
