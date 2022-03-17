import React, { useState } from 'react';
import PickAKey from '../components/PickAKey';
import SpellScale from '../components/SpellScale';
import IntervalArrows from '../components/IntervalArrows';
import ToolTipArrows from '../components/ToolTipArrows';
import Sidebar from '../components/Sidebar';
import ToolTip from '../components/ToolTip';
import { FaQuestionCircle } from 'react-icons/fa';
import {checkScale as check} from '../modules/NoteData';

const scale = ['']

function HomePage () {
    const [currentKey, setCurrentKey] = useState('')
    const onKeyChange = event => {
      setCurrentKey(event.target.value)
      scale[0] = event.target.value
      scale[7] = event.target.value
    }
    // const scale = ['']
    const onScaleChange = (id, note) => {
      scale[id] = note
    }
    const handleSubmit = (e) => {
      // scale[0] = currentKey
      // scale[7] = currentKey
      e.preventDefault();   
      if (check(currentKey, scale)) {
        if (alert('You correctly spelled ' + currentKey + 
        ' major!: \n' + scale + '\nTry another key')) {
        } else {
          window.location.reload();
        }
      } else {
        alert('Not quite, please try again')
      }
    } 
  return (

    <>
      <div id="mainDiv">
      <div id="div1">
        <PickAKey onChange={onKeyChange} currentKey={currentKey} />
      </div>
      <div id="div2">
        <p>2. Spell the major scale by clicking the boxes below:</p>
        <div id="spell">
        <SpellScale currentKey={currentKey} onChange={onScaleChange}/>
        <IntervalArrows/>
        <p id="Steps">W   W   H   W   W   W   H</p>
        </div>
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
          When spelling a scale, every letter (A-G) is used in alphabetical sequence once 
          with the root note spelled again at the end (octave). Flats (♭) or sharps (#)
          are applied to appropriate notes to maintain the tonalilty of the scale.
        </ToolTip>
        <FaQuestionCircle/>
        <ToolTip label='Hint_2'>
          Use the features on the sidebar if you're stuck
        </ToolTip>
      </div>
      </div>
      <Sidebar/>
    </> 

  );
}

export default HomePage;