import React from "react";
import {Footer} from "../footer/footer";
import {HeaderNavigation} from "./headernavigation";


export class HeaderFooter extends React.Component {

    render() {
        return (
            <>
                <HeaderNavigation/>
                {this.props.children}
                <Footer/>
            </>
        )
    }
}

