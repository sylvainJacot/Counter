import React from 'react';
import "./reset.css";
import {media} from "./Atoms/mediaqueries";
import GlobalFonts from "./Atoms/fonts";
import styled from "styled-components";

export const Square = styled.div`
width: 400px;
height: 400px;

& h1 {
font-family: PlayfairDisplay-Regular_Black;
font-size: 24px;

}

& p {
font-family: Roboto;
font-size: 16px;
}

${media.mobile`

background-color:red;
`
}
${media.desktop`

background-color:blue;
`
}

`

function App() {
  return (
    <div className="App">
        <GlobalFonts/>

        <Square><h1>New Jacot Studio Website 2020 !</h1><p>Test de robot</p></Square>
    </div>
  );
}

export default App;
