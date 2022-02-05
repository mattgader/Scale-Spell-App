import React from "react"

function ChooseNote () {
    return (
    <span>
        <select name="ChooseNotes" id="ChooseNotes">
        <   option value=''> </option>
            <option value='A'>A</option>
            <option value='B'>B</option>
            <option value='C'>C</option>
            <option value='D'>D</option>
            <option value='E'>E</option>
            <option value='F'>F</option>
            <option value='G'>G</option>
        </select>
        <select name="FlatSharp" id="FlatSharp">
            <option value='natural'> </option>
            <option value='flat'>b</option>
            <option value='sharp'>#</option>
        </select>
     </span>
    );
}

export default ChooseNote;