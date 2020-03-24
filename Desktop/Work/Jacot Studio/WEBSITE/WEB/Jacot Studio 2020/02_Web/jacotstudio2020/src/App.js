import React from 'react';
import "./reset.css";
import {Route, Switch} from 'react-router-dom';

import { connect } from 'react-redux';
import { toggleMenuNav } from './redux/menuNav/menuNav-actions';

import GlobalFonts from "./components/01 Atoms/globalStyle";

import {Footer} from "./components/04 Organisms/footer/footer";
import {AboutPage} from "./components/05 Pages/aboutepage";
import SkillsNav from "./components/04 Organisms/skillsnav/skillsnav";
import Square from "../src/square";
import HeaderNavigation from "./components/04 Organisms/headernavigation/headernavigation";


function App() {
  return (
          <div className="App">
              <GlobalFonts/>
              <HeaderNavigation/>
              <Switch>
                  <Route exact path="/" component={SkillsNav}/>
                  <Route path="/uiux-designer" component={Square}/>
                  <Route path="/creative-developer" component={Square}/>
                  <Route path="/photo-retoucher" component={Square}/>
                  <Route path="/About" component={AboutPage}/>
              </Switch>
              <Footer/>
          </div>
  );
}

const mapDispatchToProps = dispatch => ({
    toggleMenuNav: menuNav => dispatch(toggleMenuNav(menuNav))
})

export default connect( null , mapDispatchToProps)(App);

/* "Null" we don't need any props from the store in App.js */
