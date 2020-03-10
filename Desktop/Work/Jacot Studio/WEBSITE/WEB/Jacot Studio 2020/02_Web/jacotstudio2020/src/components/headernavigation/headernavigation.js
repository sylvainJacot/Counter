import React from "react";
import styled from "styled-components";
import {colorsRoles} from "../../Atoms/colors";
import {LogoJacotStudio} from "../../Atoms/icons";



export const HeaderWrapper = styled.header`
background-color: ${colorsRoles.White}5;
height: 56px;
`;


export class HeaderNavigation extends React.Component {
    render() {
        return (
            <>
                <HeaderWrapper>
                 <LogoJacotStudio FillColor={"red"} CircleColor={"blue"} Size={"40px"}/>
                HeaderNavigation
                {this.props.children}
                </HeaderWrapper>
            </>
        )
    }
}