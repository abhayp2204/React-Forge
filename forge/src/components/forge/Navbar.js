import React from "react"
import navbars from "../../data/NavItems"
import Forge from "./Forge";
import "../../css/Forge/Forge.css"

function ForgeNavbar() {
    const navItems = []
    console.log(navbars)
    navbars.map(navbar => {
        navItems.push (
            <Forge
                name={navbar.name}
                image={navbar.image}
                js={navbar.js}
                css={navbar.css}
            />
        )
    })


	return (
        <div className="fc">
            {navItems}
        </div>
	)
}

export default ForgeNavbar
