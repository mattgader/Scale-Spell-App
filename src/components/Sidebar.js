import React from "react";
import NextNote from "./NextNote";
import { Link } from 'react-router-dom';

function Sidebar () {
    return (
          <div className="sidebar">
            <div id="QuestionMark">
                <strong>?</strong>
            </div>
            <div className="tooltipSide"><Link className='link' id="LinkToolTip" to='../theory1'>Music Theory Basics</Link>
                <span className="tooltiptext" id="TheoryBasics">
                    Click here to learn some basic music theory to assist 
                    in spelling the scale
                </span>
            </div>
            {/* <div id="SideDiv1">
                <Link className='link' to='../theory1'>Music Theory Basics</Link>
            </div> */}
            <div id="SideDiv2">
                <p>Music Theory Keywords</p>
                <div className="KeywordDiv">
                    <div className="tooltipSide">Major Scale
                        <span className="tooltiptext" id="MajorScale">
                        The major scale (or Ionian mode) is one of the most commonly used musical scales, 
                        especially in Western music. It is one of the diatonic scales. Like many musical scales, 
                        it is made up of seven notes: the eighth duplicates the first at double its frequency so 
                        that it is called a higher octave of the same note (from Latin "octavus", the eighth).
                        </span>
                    </div>
                    <div className="tooltipSide">Interval
                        <span className="tooltiptext" id="Interval">
                        In music theory, an interval is a difference in pitch between two sounds. An interval 
                        may be described as horizontal, linear, or melodic if it refers to successively sounding 
                        tones, such as two adjacent pitches in a melody, and vertical or harmonic if it pertains 
                        to simultaneously sounding tones, such as in a chord.
                        </span>
                    </div>
                </div>
                <div className="tooltipSide">Whole Step
                    <span className="tooltiptext" id="WholeStep">
                    In Western music theory, a major second (sometimes also called whole tone or a whole step) is 
                    a second spanning two semitones. A second is a musical 
                    interval encompassing two adjacent staff positions (see Interval number for more details). 
                    For example, the interval from C to D is a major second, as the note D lies two semitones 
                    above C, and the two notes are notated on adjacent staff positions.
                    </span>
                </div>
                <div className="tooltipSide">Half Step
                    <span className="tooltiptext" id="HalfStep">
                    A semitone, also called a half step or a half tone, is the smallest musical interval commonly 
                    used in Western tonal music, and it is considered the most dissonant when sounded 
                    harmonically. It is defined as the interval between two adjacent notes in a 12-tone scale. 
                    For example, C is adjacent to C♯; the interval between them is a semitone.
                    </span>
                </div>
            </div>
            <div id="SideDiv3">
                <NextNote />
            </div>
          </div>
    )   
}


export default Sidebar;