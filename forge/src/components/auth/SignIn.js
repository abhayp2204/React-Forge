import React, { useState} from "react"

// Firebase
import { auth, database } from "../../firebase.js"
import { collection ,getDocs } from "firebase/firestore"
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth"
import "firebase/compat/firestore"

function SignIn() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    let googleProvider = new GoogleAuthProvider()
    const usersRef = collection(database, "users")

    const handleSubmit = (e) => {
        signInWithEmailAndPassword(auth, email, password)
        .then((res) => {
            console.log(res.user)
        })
        .catch((err) => {
            alert(err.message)
        })
    }

    const handleSignInWithGoogle = (e) => {
        signInWithPopup(auth, googleProvider)
        .then((res) => {
            console.log(res.user)
        })
        .catch((err) => {
            alert(err.message)
        })
    }

    const getData = () => {
        getDocs(usersRef)
        .then((res) => {
            console.log(res.docs.map((item) => {
                return item.data()
            }))
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
                <br/>
                or sign in with Google
                <button onClick={(e) => handleSignInWithGoogle(e)}>Google sign in</button>
                <button onClick={(e) => getData(e)}>Get Data</button>
            </div>
		</div>
	);
}

export default SignIn
