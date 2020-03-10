import React from 'react';
import "./reset.css";
import {media} from "./Atoms/mediaqueries";
import GlobalFonts from "./Atoms/globalStyle";
import styled from "styled-components";

import {HomePage} from "./components/pages/homepage";
import {HeaderNavigation} from "./components/headernavigation/headernavigation";

export const BodyWrapper = styled.div`
display: flex;
justify-content: space-between;
`;

function App() {
  return (
    <div className="App">
    <GlobalFonts/>
    <BodyWrapper>
        <HomePage/>
        <HeaderNavigation />
    </BodyWrapper>
    </div>
  );
}

export default App;
