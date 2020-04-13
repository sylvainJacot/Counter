import React from 'react';
import "./reset.css";
import {Route, Switch} from 'react-router-dom';


import GlobalFonts from "./components/01 Atoms/globalStyle";

import {Footer} from "./components/04 Organisms/footer/footer";
import {AboutPage} from "./components/05 Pages/aboutepage";
import SkillsNav from "./components/05 Pages/skillsnav";
import HeaderNavigation from "./components/04 Organisms/headernavigation/headernavigation";
import {SkillProjects} from "./components/05 Pages/skillprojects";

import ProjectPage from "./components/05 Pages/projectpage";
import ErrorPage from "./components/05 Pages/404page";


function App() {
  return (
          <div className="App">
              <GlobalFonts/>
              <HeaderNavigation/>
              <Switch>
                  <Route exact path="/" component={SkillsNav}/>
                  <Route path="/uiux-designer" component={SkillProjects}/>
                  <Route path="/About" component={AboutPage}/>
                  <Route exact path="/projet" component={ProjectPage}/>
                  <Route path="*" component={ErrorPage} />
                  /* <Route path="/test" component={ProjectPage} /> */

              </Switch>
              <Footer/>
          </div>
  );
}


export default App;

/* "Null" we don't need any props from the store in App.js */
