import React from 'react'
import './App.scss';
import Nav from './components/Nav'

function App() {
  return (
    <div className="outerwrap">
      <div className="App">
          <Nav />
      </div>
      <div className="misicControls">
         misic Controls
      </div>
    </div>
  );
}

export default App;
