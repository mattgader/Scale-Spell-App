import React from "react"
import ChooseNote from "./ChooseNote"

function SpellScale ({ currentKey, onChange }) {
    const rootLabel = currentKey || "Root"
    const octLabel = currentKey || "Octave"
    return (
        <span>
            <span className="Root" id="rootBox">{rootLabel}</span>
            <ChooseNote id={1} onChange={onChange}/>
            <ChooseNote id={2} onChange={onChange}/>
            <ChooseNote id={3} onChange={onChange}/>
            <ChooseNote id={4} onChange={onChange}/>
            <ChooseNote id={5} onChange={onChange}/>
            <ChooseNote id={6} onChange={onChange}/>
            <span className="Root" id="oct">{octLabel}</span>
        </span>

    )
}

export default SpellScale;