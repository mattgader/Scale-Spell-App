import React from "react"
import ChooseNote from "./ChooseNote"

function SpellScale () {
    return (
        <span>
            <span className="Root">Root</span>
            <ChooseNote></ChooseNote>
            <ChooseNote></ChooseNote>
            <ChooseNote></ChooseNote>
            <ChooseNote></ChooseNote>
            <ChooseNote></ChooseNote>
            <ChooseNote></ChooseNote>
            <span className="Root">Octave</span>
        </span>

    )
}

export default SpellScale;