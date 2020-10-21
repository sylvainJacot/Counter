import React from 'react';
import "./reset.css";
import styled from "styled-components";
import{ BrowserRouter as Router} from "react-router-dom";
import QuestionsInterviewPage from "./Components/Pages/QuestionsInterviewPage";
import {Colors} from "./Components/Atoms/Colors";

function App() {
  return (
      <Router>
        <AppContainer>
          <QuestionsInterviewPage/>
        </AppContainer>
      </Router>
  );
}

export default App;

export const AppContainer = styled.body`
width: 100%;
height: 100%;
background-color: ${Colors.LightGrey};
padding-bottom: 40px;
`;