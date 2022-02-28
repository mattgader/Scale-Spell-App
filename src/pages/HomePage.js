import React, { useState } from 'react';
import PickAKey from '../components/PickAKey';
import SpellScale from '../components/SpellScale';
import IntervalArrows from '../components/IntervalArrows';
import ToolTipArrows from '../components/ToolTipArrows';
import Sidebar from '../components/Sidebar';
import ToolTip from '../components/ToolTip'
import { FaQuestionCircle } from 'react-icons/fa'
import {checkScale as check} from '../modules/NoteData'

function HomePage () {
    const [currentKey, setCurrentKey] = useState('')
    const onKeyChange = event => {
      setCurrentKey(event.target.value)
    }
    const scale = ['']
    const onScaleChange = (id, note) => {
      scale[id] = note
    }
    const handleSubmit = (e) => {
      scale[0] = currentKey
      scale[7] = currentKey
      e.preventDefault();   //keep?
      if (check(currentKey, scale)) {
        if (alert('You got it! Try another key')) {
        } else {
          window.location.reload();
        }
      } else {
        alert('Not quite, please try again')
      }
    } 
    return (
    <>
        <div id="div1">
          <PickAKey onChange={onKeyChange} currentKey={currentKey} />

        </div>
        <div id="div2">
          <p>2. Spell the major scale by clicking the boxes below:</p>
          <SpellScale currentKey={currentKey} onChange={onScaleChange}/>
          <IntervalArrows/>
          <p id="Steps">W   W   H   W   W   W   H</p>
          <p id="WholeHalf">W = Whole Step     H = Half Step</p>
        </div>
        <div id="div3">
          <p id="SubmitText">3. Press submit to see how you did:</p>
          <button type="submit" onClick={handleSubmit}>Submit</button>
        </div>
        <div id="div4">
          <FaQuestionCircle/>
          <ToolTip label='Example'>
            C D E F G A B C
            <ToolTipArrows/>
            <div id="ExampleIntervals">W W H W W W H</div>
          </ToolTip>
          <FaQuestionCircle/>
          <ToolTip label='Hint_1'>
            Other than the root note, which is spelled
            at the beginning and end, every letter (A-G) is used once
          </ToolTip>
          <FaQuestionCircle/>
          <ToolTip label='Hint_2'>
            Use the features on the sidebar if you're stuck
          </ToolTip>
        </div>
        <Sidebar/>
    </> 
    );
}

export default HomePage;

// local storage 1) getitem - pull out a stting, gets either null if not set, or a string
// string will be json stringified string of the info to share with user (stats object)
// when user clicks "check results", update stats object (key could be the key, value how many times user got the key right)
// call setitem with JSON.stringify(stats object)
// or session storage api if data should clear when session is done