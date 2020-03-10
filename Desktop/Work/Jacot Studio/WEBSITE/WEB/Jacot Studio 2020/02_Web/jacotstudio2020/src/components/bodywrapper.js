import React from "react";
import styled from "styled-components";
import GlobalFonts from "../Atoms/globalStyle";
import {HomePage} from "./pages/homepage";
import {HeaderNavigation} from "./headernavigation/headernavigation";


export class BodyWrapper extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            width: 0,
        };
        this.headerNavWidth = React.createRef();
    }

    catchWidth = () => {
        this.setState({width : this.headerNavWidth.clientWidth});
        console.log(this.state.width);
    };
    componentDidMount () {
        this.catchWidth();
    };

    render() {
        return (
            <>
                <GlobalFonts/>
                 <HeaderNavigation ref={this.headerNavWidth} />
                 <HomePage width={this.state.width}/>
            </>
        )
    }
}