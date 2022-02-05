import React from "react";
import NextNote from "./NextNote";
import { Link } from 'react-router-dom';

function Sidebar () {
    return (
          <div className="sidebar">
            <div id="QuestionMark">
                <stong>?</stong>
            </div>
            <div id="SideDiv1">
                <p>Music Theory Basics</p>
            </div>
            {/* <Link className='link' to='/'>Music theory basics</Link> */}
            <div id="SideDiv2">
                <p>Music Theory Keywords</p>
                <div className="KeywordDiv">
                    <div className="tooltipSide">Major Scale
                        <span className="tooltiptext" id="MajorScale">
                            Info about the major scale</span>
                    </div>
                    <div className="tooltipSide">Interval
                        <span className="tooltiptext" id="Interval">
                            Info about intervals</span>
                    </div>
                </div>
                <div className="tooltipSide">Whole Step
                    <span className="tooltiptext" id="WholeStep">
                        Info about whole steps</span>
                </div>
                <div className="tooltipSide">Half Step
                    <span className="tooltiptext" id="HalfStep">
                        Info about half steps</span>
                </div>
            </div>
            <div id="SideDiv3">
                <NextNote></NextNote>
            </div>
          </div>
    )   
}


export default Sidebar;