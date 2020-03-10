import React from "react";
import styled from "styled-components";
import {colorsRoles} from "../../Atoms/colors";
import {LogoJacotStudio} from "../../Atoms/icons";



export const HeaderWrapper = styled.header`
position: fixed;
display: block;
z-index: 1;
right: 0;
width: 80px;
height: 100vh;
background-color: red;
`;


export class HeaderNavigation extends React.Component {
    render() {
        return (
            <>
                <HeaderWrapper>
                 <LogoJacotStudio FillColor={colorsRoles.White} CircleColor={colorsRoles.LightGrey} Size={"40"}/>
                HeaderNavigation
                {this.props.children}
                </HeaderWrapper>
            </>
        )
    }
}