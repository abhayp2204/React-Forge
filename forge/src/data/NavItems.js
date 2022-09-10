import SimpleBlack from "../images/simple-black.png"

const navbars = [
    {
        "name": "Simple Black",
        "image": SimpleBlack,
        "js": 
`import React, { useState, useEffect } from "react"
import { auth } from "../firebase"
import "../css/Navbar.css"

// Icons
import { IconContext } from "react-icons";
import { GoThreeBars } from "react-icons/go";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <IconContext.Provider value={{color: "white", size: "1.5em"}}>
            <div className="navbar">
                <div className="left-side" onClick={() => setMenuOpen(!menuOpen)}>
                    <GoThreeBars />
                </div>
                <div className="right-side">
                    <SignOut />
                </div>
            </div>
        </IconContext.Provider>
    )
}

function SignOut() {
    return auth.currentUser && (
        <button className="sign-out" onClick={() => auth.signOut()}>
            Sign Out
        </button>
    )
}

export default Navbar`,
        "css": "CSS is here",
    },
    {
        "name": "Charcoal Black",
        "image": SimpleBlack,
        "js": "some other js code",
        "css": "some css",
    }
]

export default navbars