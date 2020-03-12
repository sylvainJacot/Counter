import React from "react";
import {Route} from 'react-router-dom';
import GlobalFonts from "../Atoms/globalStyle";

import {HomePage} from "./pages/homepage";
import {FrontendHomePage} from "./pages/frontendhomepage";
import {HeaderFooter} from "./headernavigation/headerfooter";


export class BodyWrapper extends React.Component {

    render() {
        return (
            <>
                <GlobalFonts/>
                 <HeaderFooter>
                     <Route exact path="/" component={HomePage}/>
                     <Route path="/Frontend" component={FrontendHomePage}/>
                 </HeaderFooter>
            </>
        )
    }
}

