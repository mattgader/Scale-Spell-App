import React from 'react';
import { Link } from 'react-router-dom';


function Theory2 () {
    return (
        <div id="Theory2">
            <h2>• The sequence of intervals in a major scale is: 
                W W H W W W H
            </h2>
            <h2>• H = half step (AKA "semitone"). This is the smallest interval
            </h2>
            <h2>• W = whole step, which is equal to two half steps
            </h2>
            <h2>• If a note is spelled with a flat(b), it is lowered by a half step
            </h2>
            <h2 id="Theory2Last" >• If a note is spelled with a sharp(#), it is raised by a half step
            </h2>
            <Link className='link' to='../theory1'>back</Link>
            <Link className='link' to='../theory3'>click to continue</Link>
            <Link className='link' to='/'>home</Link>
        </div>
    )
}

export default Theory2;