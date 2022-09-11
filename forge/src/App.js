
import "./css/App.css"

// Firebase
import { auth } from "./firebase.js"
import "firebase/compat/firestore"
import { useAuthState } from "react-firebase-hooks/auth"

// Routes
import { BrowserRouter as Router, Routes, Route } from "react-router-dom" 

// Components
import Home from "./components/Home"
import SignUp from "./components/auth/SignUp"
import SignIn from "./components/auth/SignIn"
import Navbar from "./components/Navbar"
import Sidebar from "./components/Sidebar"
import ForgeNavbar from "./components/forge/Navbar"

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
                    <div                            className="routes-container">
                        <Routes className="routes-container">
                            <Route
                                path="/"
                                element={<Home />}
                            />
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