
import { useState } from "react"

// Firebase
import { createUserWithEmailAndPassword } from "firebase/auth"
import "firebase/compat/firestore"
import { auth, storage, database } from "../../firebase"
import { collection, addDoc, getDocs } from "firebase/firestore"

function SignUp() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const usersRef = collection(database, "users")

    const handleSubmit = (e) => {
        createUserWithEmailAndPassword(auth, email, password)
        .then((res) => {
            console.log(res.user)
        })
        .catch((err) => {
            alert(err.message)
        })

        addDoc(usersRef, {
            email: email,
            password: password,
        })
        .then(() => {
            alert("Data added")
        })
        .catch((err) => {
            console.log(err.message)
        })
    }

    

	return (
		<div>
            Sign Up
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
                <button onClick={(e) => handleSubmit(e)}>Sign Up</button>
                
            </div>
		</div>
	);
}

export default SignUp 