import SimpleBlack from "../images/simple-black.png"
import WaterDroplets from "../images/water-droplets.png"

const navbars = [
    {
        "name": "Water Droplets",
        "image": WaterDroplets,
        "width": "400px",
        "height": "400px",
        "js":
`return (
    <div className="home">
        <div className="drops">
            <div className="drop" />
            <div className="drop" />
            <div className="drop" />
            <div className="drop" />
        </div>
    </div>
)`,
"css":
`.home {
    width: 85%;
    height: 51vw;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #00BFB2;
}

.drops {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow-y: hidden;
    width: 1200px;
    height: 1200px;
}

.drop {
    position: absolute;
    width: 150px;
    height: 150px;
    background-color: transparent;
    border-radius: 51% 49% 38% 62% / 47% 39% 61% 53% ;
    box-shadow: inset 20px 20px 10px rgba(0,0,0,0.1), 15px 25px 10px rgba(0,0,0,0.1), 15px 20px 20px rgba(0,0,0,0.05), inset -10px -10px 15px rgba(255,255,255,0.9);
}

.drop::before {
    content: '';
    position: absolute;
    top: 20px;
    left: 30px;
    background-color: white;
    width: 20px;
    height: 20px;
    border-radius: 53% 47% 70% 30% / 60% 32% 68% 40% ;
}

.drop::after {
    content: '';
    position: absolute;
    top: 16px;
    left: 65px;
    background-color: white;
    width: 10px;
    height: 10px;
    border-radius: 32% 68% 48% 52% / 48% 47% 53% 52% ;
}

.drop:nth-child(2) {
    transform: scale(0.5) translate(-200px, 140px);
    border-radius: 42% 58% 43% 57% / 48% 64% 36% 52% ;
}
        
.drop:nth-child(3) {
    transform: scale(0.4) translate(320px, -20px);
    border-radius: 57% 43% 56% 44% / 56% 52% 48% 44%  ;
}

.drop:nth-child(4) {
    transform: scale(0.3) translate(-360px, -180px);
    border-radius: 39% 61% 46% 54% / 40% 52% 48% 60%   ;
}`
    },
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
    },
]

export default navbars