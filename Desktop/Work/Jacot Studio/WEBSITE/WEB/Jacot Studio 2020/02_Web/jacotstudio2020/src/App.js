import React from 'react';
import "./reset.css";
import {media} from "./Atoms/mediaqueries";
import GlobalFonts from "./Atoms/fonts";
import styled from "styled-components";

import {HomePage} from "./components/pages/homepage";


function App() {
  return (
    <div className="App">

     New Jacot Studio Website 2020 !
        <HomePage/>

    </div>
  );
}

export default App;
