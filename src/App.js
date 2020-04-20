import React from 'react';
import './App.css';
import Header from "./Header"
import MemeGenerator from "./MemeGenerator"

function App() {

  //console.log("in app")
  return (
    <div className="App">
      <Header />
      <MemeGenerator />
    </div>
  );
}

export default App;
