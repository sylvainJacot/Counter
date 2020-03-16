import React from 'react';
import "./reset.css";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import GlobalFonts from "./components/Atoms/globalStyle";
import {Footer} from "./components/footer/footer";
import {FrontendHomePage} from "./components/pages/frontendhomepage";
import {AboutPage} from "./components/pages/aboutepage";
import {DisciplineNavHome} from "./components/disciplinenav/disciplinenav";
import HeaderNavigation from "./components/headernavigation/headernavigation";


function App() {
  return (
      <Router>
          <div className="App">
              <GlobalFonts/>
              <HeaderNavigation/>
              <Switch>
                  <Route exact path="/" component={DisciplineNavHome}/>
                  <Route path="/Frontend" component={FrontendHomePage}/>
                  <Route path="/About" component={AboutPage}/>
              </Switch>
              <Footer/>
          </div>
      </Router>
  );
}

export default App;
