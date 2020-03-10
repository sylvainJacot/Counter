import React from "react";
import styled from "styled-components";
import {colorsRoles} from "../../Atoms/colors";
import {LogoJacotStudio} from "../../Atoms/icons";



export const HeaderWrapper = styled.header`
background-color: ${colorsRoles.White}5;
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