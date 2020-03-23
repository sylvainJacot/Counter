import React from "react";
import styled from "styled-components";

import {connect} from "react-redux";
import mapDispatchToProps from "react-redux/lib/connect/mapDispatchToProps";
import {toggleMenuNav} from '../../../redux/menuNav/menuNav-actions';

import {colorsRoles} from "../../01 Atoms/colors";
import {LogoJacotStudio, IcLinkedin, IcInstagram, IcWhatsapp} from "../../01 Atoms/icons";
import IcBurgerMenu from "../../01 Atoms/icons";
import {transitions} from "../../01 Atoms/animations";
import {Link} from "react-router-dom";
import {media} from "../../01 Atoms/mediaqueries";


export const StyledLink = styled(Link)``;
export const HeaderWrapper = styled.header`
position: fixed;
display: flex;
justify-content: space-between;
align-items: center;
right: 0;
left: 0;
top: 0;
height: 64px;
z-index: 2;
background-color: ${colorsRoles.DarkGrey};
padding: 0 16px;
transition: ${transitions.basic2};

${media.desktop `
width: 80px;
height: unset;
padding: 32px 0;
right: 0;
bottom: 0;
left: unset;
flex-direction: column;
`}

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
${media.desktop `
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
`}


`;
export const SocialsWrapper = styled.ul`
display: none;
${media.desktop`
display: flex;
flex-direction: column;
`}
a {
margin-bottom: 40px;
&:last-child {
margin-bottom: 0px;
}

}


`;
export const Button = styled.button`

`;


const HeaderNavigation = ({toggleMenuNav}) => {
    return <>
                <HeaderWrapper>

                    <StyledLink to={"/"}>
                        <h1>
                            <LogoJacotStudio FillColor={colorsRoles.White} CircleColor={colorsRoles.LightGrey} Size={"40px"}/>
                        </h1>
                    </StyledLink>

                 <IcBurgerMenu/>

                <SocialsWrapper>
                    <a href="#">
                        <IcLinkedin FillColor={colorsRoles.LightGrey} Size={"24px"}/>
                    </a>
                    <a href="#">
                        <IcInstagram FillColor={colorsRoles.LightGrey} Size={"24px"}/>
                    </a>
                    <a href="#">
                        <IcWhatsapp FillColor={colorsRoles.LightGrey} Size={"24px"}/>
                    </a>
                </SocialsWrapper>
                </HeaderWrapper>
     </>
};


/* REDUX =============== INJECT THE STATE INTO THE COMPONENT
   connect () a 2 arguments -> MapStateToProps et MapDispatchToProps
 */

const MapDispatchToProps = dispatch => ({
    toggleMenuNav : () => dispatch(toggleMenuNav())
});

export default connect(null, MapDispatchToProps)(HeaderNavigation);