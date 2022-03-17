import React from "react";

function ChooseNote ({id='', onChange}) {
    const noteRef = React.useRef(null)
    const flatSharpRef = React.useRef(null)
    const onNoteChange = event => {
        const note = noteRef.current.value + flatSharpRef.current.value
        onChange(id, note)
    }
    return (

    <span>
        <select name="ChooseNote" id="ChooseNote" ref={noteRef} onChange={onNoteChange}>
        <option value=''> </option>
            <option value='A'>A</option>
            <option value='B'>B</option>
            <option value='C'>C</option>
            <option value='D'>D</option>
            <option value='E'>E</option>
            <option value='F'>F</option>
            <option value='G'>G</option>
        </select>
        <select name="FlatSharp" id="FlatSharp" ref={flatSharpRef} onChange={onNoteChange}>
            <option value=''> </option>
            <option value='b' className="flat">♭</option>
            <option value='#'>#</option>
        </select>
     </span>

    );
}

export default ChooseNote;