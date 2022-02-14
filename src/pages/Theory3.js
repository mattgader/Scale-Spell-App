import React from 'react';
import { Link } from 'react-router-dom';


function Theory3 () {
    return (
        <div id="Theory3">
            <h2>• Here's an example of how flats and sharps work:
            </h2>
            <h2>G -> A is a whole step (or two half steps)
            </h2>
            <h2>Thus, G# -> A is half step, because G is raised by a half step,
            </h2>
            <h2>G -> Ab is a half step, because A is lowered by a half step,
            </h2>
            <h2>Gb -> Ab is a whole step, because G and A are both lowered by a half step,
            </h2>
            <h2 id="Theory3Last" >And G# -> A# is a whole step, because both notes are raised by a half step
            </h2>
            <Link className='link' to='../theory2'>back</Link>
            <Link className='link' to='/'>home</Link>
        </div>
    )
}

export default Theory3;