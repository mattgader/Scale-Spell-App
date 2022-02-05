import React from "react"

function PickAKey ()  {
    return (
        <div>
            <label htmlFor="PickAKey">1. Use the dropdown to pick a key </label>
            <select name="PickAKey" id="PickAKey">
                <option value=''> </option>
                <option value='C'>C</option>
                <option value='G'>G</option>
                <option value='D'>D</option>
                <option value='A'>A</option>
                <option value='E'>E</option>
                <option value='B'>B</option>
                <option value='F'>F</option>
                <option value='Bb'>Bb</option>
                <option value='Eb'>Eb</option>
                <option value='Ab'>Ab</option>
                <option value='Db'>Db</option>
            </select>
        </div>
    )
}

// onmousedown="this.value='';" onchange="jsFunction(this.value);"
export default PickAKey;