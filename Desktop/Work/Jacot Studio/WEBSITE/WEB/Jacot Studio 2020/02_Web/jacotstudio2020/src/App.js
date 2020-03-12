import React from 'react';
import "./reset.css";
import {BrowserRouter as Router} from 'react-router-dom';
import GlobalFonts from "./Atoms/globalStyle";
import {BodyWrapper} from "./components/bodywrapper";


function App() {
  return (
      <Router>
          <div className="App">
              <GlobalFonts/>
              <BodyWrapper/>
          </div>
      </Router>
  );
}

export default App;
