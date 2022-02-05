import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import PickAKey from './components/PickAKey';
import SpellScale from './components/SpellScale'
import Sidebar from './components/Sidebar';
import { MdKeyboardArrowDown } from 'react-icons/md';
import Theory1 from './pages/Theory1';
import './modules/NoteData'
function App() {

  // state stuff
  //    user root choice
  //    what notes have been chosen
  //    

  return (
    <div className="App">
      <Router>
      <header className="App-header">
          <h1>Scale Spell</h1>
          <p>Designed by Matt Gader using REST, React, and Node</p>
      </header>
      <main>
        <div id="div1">
          <PickAKey></PickAKey>
        </div>
        <div id="div2">
          <p>2. Spell the scale using the dropdowns for letter and flat/sharp/neither</p>
          <SpellScale></SpellScale>
          <div id="Vs"><MdKeyboardArrowDown className="DownArrow"/>
            <MdKeyboardArrowDown className="DownArrow"/>
            <MdKeyboardArrowDown className="DownArrow"/>
            <MdKeyboardArrowDown className="DownArrow"/>
            <MdKeyboardArrowDown className="DownArrow"/>
            <MdKeyboardArrowDown className="DownArrow"/>
            <MdKeyboardArrowDown className="DownArrow"/>
          </div>
          <p id="Steps">W   W   H   W   W   W   H</p>
          <p id="WholeHalf">W = Whole Step     H = Half Step</p>
        </div>
        <div id="div3">
          <p id="SubmitText">3. Press submit to see how you did</p>
          <button type="submit">Submit</button>
        </div>
        <div id="div4">
          <div className="tooltip">Example
            <span className="tooltiptext" id="Example">C D E F G A B C </span>
          </div>
          <div className="tooltip">Hint 1
            <span className="tooltiptext">Other than the root note, which is spelled
            at the beginning and end, every letter (A-G) is used once</span>
          </div>
          <div className="tooltip">Hint 2
            <span className="tooltiptext">Use the features on the sidebar if you're stuck</span>
          </div>
        </div>
        <Sidebar></Sidebar>
      
      </main>
      {/* <article>
        <Route path="/theory1"><Theory1 /></Route>
      </article> */}
    </Router> 
    </div>
  );
}

export default App;
