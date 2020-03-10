import React from "react";
import styled from "styled-components";
import {backgrounds, colorsRoles} from "../../Atoms/colors";
import {LogoJacotStudio, IcLinkedin, IcInstagram, IcWhatsapp} from "../../Atoms/icons";



export const HeaderWrapper = styled.header`
position: fixed;
display: flex;
align-items: center;
justify-content: space-between;
flex-direction: column;
z-index: 1;
right: 0;
top: 0;
bottom: 0;
width: 80px;
background-color: indianred;
/*background-color: $   {colorsRoles.White}10;*/
padding: 32px 0;

`;
export const SocialsWrapper = styled.ul`
display: flex;
flex-direction: column;
a {
margin-bottom: 40px;
&:last-child {
margin-bottom: 0px;
}
}


`;

export class HeaderNavigation extends React.Component {
    render() {
        return (
            <>
                <HeaderWrapper>
                 <LogoJacotStudio FillColor={colorsRoles.White} CircleColor={colorsRoles.LightGrey} Size={"40px"}/>
                {this.props.children}
                <SocialsWrapper>
                    <a href="#"><IcLinkedin FillColor={colorsRoles.LightGrey} Size={"24px"}/></a>
                    <a href="#"><IcInstagram FillColor={colorsRoles.LightGrey} Size={"24px"}/></a>
                    <a href="#"><IcWhatsapp FillColor={colorsRoles.LightGrey} Size={"24px"}/></a>
                </SocialsWrapper>
                </HeaderWrapper>
            </>
        )
    }
}