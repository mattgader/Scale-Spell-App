import React from "react";

function NextNote () {
    return (
        <div>
            <div id="NextNoteTextDiv">
                <p>Next Note Helper</p>
                <p className="NextNoteText">1. Choose a note</p>   
                <p className="NextNoteText">2. Choose an interval</p>
            </div>
            <span>
                <select name="ChooseNotes" id="ChooseNotes">
                    <option value=''> </option>
                    <option value='A'>A</option>
                    <option value='B'>B</option>
                    <option value='C'>C</option>
                    <option value='D'>D</option>
                    <option value='E'>E</option>
                    <option value='F'>F</option>
                    <option value='G'>G</option>
                </select>
                <select name="NextFlatSharp" id="NextFlatSharp">
                    <option value='natural'> </option>
                    <option value='flat'>b</option>
                    <option value='sharp'>#</option>
                </select>
                <select name="NextStep" id="NextStep">
                    <option value=''> </option>
                    <option value='WholeStep'>W</option>
                    <option value='HalfStep'>H</option>
                </select>
                <span id="NextNote">Next Note</span>
            </span>
     </div>
    );
}

export default NextNote;