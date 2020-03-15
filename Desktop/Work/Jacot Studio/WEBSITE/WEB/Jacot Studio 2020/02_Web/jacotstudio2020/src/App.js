import React from 'react';
import "./reset.css";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import GlobalFonts from "./components/Atoms/globalStyle";
import {HeaderNavigation} from "./components/headernavigation/headernavigation";
import {Footer} from "./components/footer/footer";
import {HomePage} from "./components/pages/homepage";
import {FrontendHomePage} from "./components/pages/frontendhomepage";


function App() {
  return (
      <Router>
          <div className="App">
              <GlobalFonts/>
              <HeaderNavigation/>
              <Switch>
                  <Route exact path="/" component={HomePage}/>
                  <Route path="/Frontend" component={FrontendHomePage}/>
              </Switch>
              <Footer/>
          </div>
      </Router>
  );
}

export default App;
