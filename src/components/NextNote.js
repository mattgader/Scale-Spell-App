import React, { useState } from "react";
import ChooseNote from "./ChooseNote";
import { nextNote } from "../modules/NoteData";

function NextNote ({ onChange }) {
    // does this stuff need to be sent to parent? 
    const [startNote, setStartNote] = useState('')
    const [interval, setInterval] = useState('')
    // const[displayNote, setDisplayNote] = useState('Next Note')
    const onNoteChange = (id, note) => {
        setStartNote(note)
    }
    const onIntervalChange = event => {
        setInterval(event.target.value)
    }
    let displayNote = ""
    if (startNote !== '' && interval !== '') {
        displayNote = nextNote(startNote, interval)
        // setDisplayNote(next)
    }

    return (
        <div>
            <div id="NextNoteTextDiv">
                <p>Next Note Helper</p>
                <p className="NextNoteText">1. Choose a note</p>   
                <p className="NextNoteText">2. Choose an interval</p>
            </div>
            <span>
                <ChooseNote onChange={onNoteChange}/>
                <select name="NextStep" id="NextStep" onChange={onIntervalChange}> 
                    <option value=''> </option>
                    <option value='2'>W</option>
                    <option value='1'>H</option>
                </select>
                <span id="NextNote">Next Note: {displayNote}</span>
            </span>
     </div>
    );
}

export default NextNote;