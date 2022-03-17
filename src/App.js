import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Theory1 from './pages/Theory1';
import Theory2 from './pages/Theory2';
import Theory3 from './pages/Theory3';
import './modules/NoteData'

function App() {
  return (
    <div className="App">
      <meta name="viewport" content="width=device-width,user-scalable=no"/>

      <Router>
        <header className="App-header">
          <h1 id="Title">Scale Spell</h1>
          <p id="About">This app is intended for musicians and non-musicians to 
          learn about and practice spelling the major scale</p>
          <p id="MattGader">Designed by Matt Gader using React, Node, JS, and CSS</p>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/theory1" element={<Theory1/>}/>
            <Route path="/theory2" element={<Theory2/>}/>
            <Route path="/theory3" element={<Theory3/>}/>

          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;

 