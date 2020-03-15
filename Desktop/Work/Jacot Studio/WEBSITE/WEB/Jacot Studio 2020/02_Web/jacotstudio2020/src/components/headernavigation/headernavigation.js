import React from "react";
import styled from "styled-components";
import {colorsRoles} from "../Atoms/colors";
import {LogoJacotStudio, IcBurgerMenu, IcLinkedin, IcInstagram, IcWhatsapp} from "../Atoms/icons";
import {transitions} from "../Atoms/animations";


export const HeaderWrapper = styled.header`
position: fixed;
display: flex;
align-items: center;
justify-content: space-between;
flex-direction: column;
z-index: 2;
right: 0;
top: 0;
bottom: 0;
width: 80px;
background-color: ${colorsRoles.DarkGrey};
padding: 32px 0;
transition: ${transitions.basic2};

&::after {
display: block;
position: absolute;
z-index: -1;
content: "";
top: 0;
right: 0;
bottom: 0;
left: 0;
background-color: ${colorsRoles.White}10;
}
&:hover {
width: 144px;
transition: ${transitions.basic2};

  & div > span {
  height: 32px;
  transition: ${transitions.basic1};
  transition-delay: .1s;
   &:nth-child(2) {
   margin: 0 16px;
   }
  } 

}

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
                 <IcBurgerMenu/>
                <SocialsWrapper>
                    <a href="https://bashooka.com/coding/react-burger-menu-components/"><IcLinkedin FillColor={colorsRoles.LightGrey} Size={"24px"}/></a>
                    <a href="#"><IcInstagram FillColor={colorsRoles.LightGrey} Size={"24px"}/></a>
                    <a href="#"><IcWhatsapp FillColor={colorsRoles.LightGrey} Size={"24px"}/></a>
                </SocialsWrapper>
                </HeaderWrapper>
                {this.props.children}
            </>
        )
    }
}