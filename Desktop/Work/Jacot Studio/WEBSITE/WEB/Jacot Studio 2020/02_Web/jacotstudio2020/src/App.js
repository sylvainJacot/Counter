import React from 'react';
import "./reset.css";
import GlobalFonts from "./Atoms/globalStyle";
import {BodyWrapper} from "./components/bodywrapper";


function App() {
  return (
    <div className="App">
    <GlobalFonts/>
    <BodyWrapper/>
    </div>
  );
}

export default App;
