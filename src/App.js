import React from 'react';
import Counter from "./components/Counter";
import {GlobalStyle} from "./components/atoms/GlobalStyle";

function App() {
  return (
    <div className="App">
        <GlobalStyle>
      <Counter/>
        </GlobalStyle>
    </div>
  );
}

export default App;
