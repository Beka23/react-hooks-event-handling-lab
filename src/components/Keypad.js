// Code Keypad Component Here

import React from "react"

function Keypad() {

    function onClick(event) {
        console.log("Entering password...")
    }

    return (
        <input type="password" onChange={onClick}>

        </input>
    )
}

export default Keypad;