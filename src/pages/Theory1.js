import React from 'react';
import { Link } from 'react-router-dom';
import TheoryArrows from '../components/TheoryArrows';

function Theory1 () {
    return (
        <div id="Theory1">
            
            

            <h2>• The major scale is spelled using letters (A-G), 
                sometimes accompanied with a flat(b) or sharp(#)
            </h2>
            <h2>• Each letter is used once, the sequence is in
                alphabetical order, and G wraps back around to A
            </h2>
            <h2>• Here's the simplest major scale to spell. It contains
                no flats or sharps. Notice which notes are a half step apart
            </h2>
            <p id="TheoryCMajor">C D E F G A B C</p>
            <TheoryArrows id="TheoryArrows" />
            <p id="TheorySteps">W   W   H   W   W   W   H</p>
            <p id="TheoryWholeHalf">W = Whole Step,    H = Half Step</p>
            <Link className='link' to='../theory2'>click to continue</Link>
            <Link className='link' to='/'>home</Link>
        </div>
    )
}

export default Theory1;