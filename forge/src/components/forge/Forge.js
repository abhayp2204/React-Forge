import React, { useState } from "react"

function Forge(props) {
    const [open, setOpen] = useState(false)
    const [codeLang, setCodeLang] = useState("js")
    const width = props.width
    const height = props.height

	return (
		<div className="fi">
            <div className="fi-name">
                {props.name}
                <div className="fi-name-right">
                <button onClick={() => setOpen(!open)}>View</button>
                </div>
            </div>
            <div className="fi-image">
                <img src={props.image} alt="forge item" />
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
                        {codeLang === "css" && <pre className="fi-code-css">{props.css}</pre>}
                    </div>
                    </>
                }
            </div>
        </div>
	)
}

export default Forge
