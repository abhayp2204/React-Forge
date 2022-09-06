import Sidebar from "./components/Sidebar"

import "./css/App.css"
import { useState, useEffect } from "react"

// Firebase
import { auth, app } from "./firebase.js"
import { createUserWithEmailAndPassword } from "firebase/auth"
import "firebase/compat/firestore"
import { useAuthState } from "react-firebase-hooks/auth"

// Routes
import { BrowserRouter as Router, Routes, Route } from "react-router-dom" 

// Components
import SignUp from "./components/auth/SignUp"
import SignIn from "./components/auth/SignIn"
import Navbar from "./components/Navbar"
import ForgeNavbar from "./components/forge/Navbar"

// Icons
import { GrApps } from "react-icons/gr";
import { GoThreeBars } from "react-icons/go"

function App() {
    const [user] = useAuthState(auth)

	return (
		<div className="App">
            {!user && 
                <>
                    Create an account
                    <SignUp />
                    <SignIn />
                    {console.log("user = ", auth.currentUser)}
                </>
            }
            {user &&
                <Router>
                    <Sidebar />
                    <Navbar />

                    <div className="routes-container">
                        <Routes className="routes-container">
                            <Route
                                path="/navbar"
                                element={<ForgeNavbar />}
                            />
                        </Routes>
                    </div>
                </Router>
            }
		</div>
	);
}


export default App