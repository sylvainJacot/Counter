import React from 'react';
import "./reset.css";
import {media} from "./Atoms/mediaqueries";
import styled from "styled-components";

export const Square = styled.div`
width: 400px;
height: 400px;
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
     New Jacot Studio Website 2020 !
        <Square></Square>
    </div>
  );
}

export default App;
