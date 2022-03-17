import React from "react";

function PickAKey ({ onChange, currentKey='' })  {
    return (

        <div>
            <label htmlFor="PickAKey">1. Click here to pick a key: </label>
            <select name="PickAKey" id="PickAKey" onChange={onChange}
                defaultValue={currentKey} >
                <option value=''> </option>
                <option value='C'>C</option>
                <option value='G'>G</option>
                <option value='D'>D</option>
                <option value='A'>A</option>
                <option value='E'>E</option>
                <option value='B'>B</option>
                <option value='F#'>F#</option>
                <option value='C#'>C#</option>
                <option value='F'>F</option>
                <option value='Bb'>Bb</option>
                <option value='Eb'>Eb</option>
                <option value='Ab'>Ab</option>
                <option value='Db'>Db</option>
                <option value='Gb'>Gb</option>
            </select>
        </div>

    );
}

export default PickAKey;