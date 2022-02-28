import React from "react";
import NextNote from "./NextNote";
import { Link } from 'react-router-dom';
import searchTerms from '../searchTerms.json'

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
            <div id="SideDiv2">
                <p>Music Theory Keywords</p>
                <div className="KeywordDiv">
                    <div className="tooltipSide">Major Scale
                        <span className="tooltiptext" id="MajorScale">
                            {searchTerms["major_scale"]}
                        </span>
                    </div>
                    <div className="tooltipSide">Interval
                        <span className="tooltiptext" id="Interval">
                            {searchTerms["interval_music"]}
                        </span>
                    </div>
                </div>
                <div className="tooltipSide">Whole Step
                    <span className="tooltiptext" id="WholeStep">
                        {searchTerms["major_second"]}
                    </span>
                </div>
                <div className="tooltipSide">Half Step
                    <span className="tooltiptext" id="HalfStep">
                        {searchTerms["semitone"]}
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