import React from 'react';
import "./reset.css";
import {Route, Switch} from 'react-router-dom';

import { connect } from 'react-redux';
import { toggleMenuNav } from './redux/menuNav/menuNav-actions';

import GlobalFonts from "./components/Atoms/globalStyle";

import {Footer} from "./components/footer/footer";
import {FrontendHomePage} from "./components/pages/frontendhomepage";
import {AboutPage} from "./components/pages/aboutepage";
import DisciplineNav from "./components/disciplinenav/disciplinenav";
import HeaderNavigation from "./components/headernavigation/headernavigation";


function App() {
  return (
          <div className="App">
              <GlobalFonts/>
              <HeaderNavigation/>
              <Switch>
                  <Route exact path="/" component={DisciplineNav}/>
                  <Route path="/Frontend" component={FrontendHomePage}/>
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
