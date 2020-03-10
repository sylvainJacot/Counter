import React from 'react';
import "./reset.css";
import {media} from "./Atoms/mediaqueries";
import GlobalFonts from "./Atoms/globalStyle";
import styled from "styled-components";

import {HomePage} from "./components/pages/homepage";
import {HeaderNavigation} from "./components/headernavigation/headernavigation";

export const P = styled.p`
font-family: PlayfairDisplay-Regular_Black;
font-size: 32px;
`

function App() {
  return (
    <div className="App">
    <GlobalFonts/>
        <HeaderNavigation />
        <HomePage/>

    </div>
  );
}

export default App;
