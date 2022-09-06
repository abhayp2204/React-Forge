import React from "react"
import { NavLink } from "react-router-dom"
import "../css/Sidebar.css"

function Sidebar() {
	return (
		<div className="sidebar">
            <NavLink className="link" to="/navbar">
                <div className="link-name sidebar-card">NAVBAR</div>
            </NavLink>
            <NavLink className="link" to="/sidebar">
                <div className="link-name sidebar-card">SIDEBAR</div>
            </NavLink>
            <NavLink className="link" to="/profile">
                <div className="link-name sidebar-card">PROFILE</div>
            </NavLink>
        </div>
	)
}

export default Sidebar
