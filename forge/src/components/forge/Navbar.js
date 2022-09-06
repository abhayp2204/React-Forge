import React, { useState, useEffect } from "react"
import "../../css/Forge/ForgeNavbar.css"

// Icons
import { IconContext } from "react-icons";
import { GoThreeBars } from "react-icons/go";

import navbars from "../../data/NavItems"

function ForgeNavbar() {
    const navItems = []
    console.log(navbars)
    navbars.map(navbar => {
        navItems.push (
            <div className="nav-item">
                <div className="nav-item-name">{navbar.name}</div>
                <div className="nav-item-code">{navbar.code}</div>
            </div>
        )
    })


	return (
        <div className="forge-navbar">
            {navItems}
        </div>
	)
}

export default ForgeNavbar
