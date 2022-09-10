import React, { useState } from "react"
import "../../css/Forge/Forge.css"

function Forge(props) {
    const closedHeight = "0px"
    const openHeight = "60px"
    const transparent = "rgba(1,1,1,0)"
    const opaque = "white"
    const [open, setOpen] = useState(false)
    const [codeLang, setCodeLang] = useState("js")

	return (
		<div className="fi">
            <div className="fi-name">
                {props.name}
                <div className="fi-name-right">
                <button onClick={() => setOpen(!open)}>View</button>
                </div>
            </div>
            <div className="fi-image">
                <img className="fi-imagee" src={props.image} alt="forge item" />
            </div>
            <div className="fi-code">
                {open && 
                    <>
                    <div className="fi-code-select">
                        <button onClick={() => setCodeLang("js")}>JS</button>
                        <button onClick={() => setCodeLang("css")}>CSS</button>
                    </div>
                    <div className="fi-code-content">
                        {codeLang === "js" && <pre className="fi-code-js">{props.js}</pre>}
                        {codeLang === "css" && <div className="fi-code-css">{props.css}</div>}
                    </div>
                    </>
                }
            </div>
        </div>
	)
}

export default Forge
