import React from "react";
import styled from "styled-components";

import {NavLink} from "react-router-dom";

import {media} from "../../01 Atoms/mediaqueries";
import {transitions, Breathe, UpDown} from "../../01 Atoms/animations";
import {colorsRoles, gradient, backgrounds} from "../../01 Atoms/colors";
import Parrot from "../../../media/img/Parrot.png";
import CTASmall from "../../02 Molecules/ctasmall";


export const DisciplineNavItemWrapper = styled.li`
position: relative;
display: block;
overflow: hidden;
width: 100%;
height: 360px;
background-color: ${colorsRoles.DarkGrey};
${media.desktop`
height: 100vh;
width: 33.33%;
`}

&:before {
content: "";
position: absolute;
top:0;
transform: translate(0,-50%);
width: 100%;
height: 320px;
${backgrounds.RadialBg01};
${media.desktop`
width: 690px;
height: 624px;
right: 50%;
transform: translate(50%,-50%);
`}
}

&:after {
content: "";
position: absolute;
bottom: -16px;
width: 100%;
height: 160px;
${props => props.bottomGradient}
/*${gradient.Brand0130};*/
}

`;
export const DisciplineNavItemText = styled.div`
float: right;
height: 138px;
margin-top: 32px;
text-align: right;
max-width: 64%;
color: ${colorsRoles.White};
transition: ${transitions.basic2};

${media.mobileL `
margin-top: 40px;
`}

${media.desktop`
margin-top:80px;
width: 100%;
max-width: unset;
float: unset;
display: flex;
flex-direction: column;
`}

h1 {
position: relative;
font-family: PlayfairDisplay-Regular_Black;
font-size: 3rem;
text-align: right;
line-height: 32px;
${media.tablet`
font-size: 4rem;
`}
${media.desktop`
text-align: left;
font-size: 4rem;
line-height: 40px;
`}

&:after {
content: "";
position: absolute;
bottom: -8px;
right: 0;
width: 40px;
height: 2px;
background-color: ${props => props.colorBrand};
transition: ${transitions.basic2}
${media.tablet`
bottom: -16px;
`}
${media.desktop`
right:unset;
left:0;
`}
}


}

p {
margin-top: 26px;
font-family: Roboto-Regular;
font-size: 2rem;
font-style: italic;
${media.tablet`
margin-top: 34px;
font-size: 3rem;
`}
${media.desktop`
text-align: left;
display: none;
`}

}
& > a {
visibility: visible;
${media.desktop`
visibility: hidden;
`}
}

`;
export const ImgShadow = styled.div`
position: absolute;
display: none;
width: 80%;
height: 40px;
bottom: 4%;
right: 50%;
z-index: 1;
transform: translate(50%,0);
transition: ${transitions.basic1}
${backgrounds.RadialBg02};
${media.desktop`
display: block;
animation: ${Breathe} 5s linear infinite;
`}
${media.desktopL`
bottom: 2%;
transition: ${transitions.basic1}
`}
`;
export const StyledLink = styled(NavLink)` 
display: block;
width: auto;
padding: 0 16px;
${media.mobileL`
padding: 0 32px;
`}
${media.tablet`
padding: 0 40px;
`}
img {
position: absolute;
z-index: 2;
width: 328px;
height: auto;
left: -80px;
top: 64px;
transition: ${transitions.easeOut}

${media.tablet`
width: 400px;
top: 0;
`}
${media.desktop`
width: 360px;
left:50%;
top: unset;
bottom: -24%;
transform: translate(-50%,50%);
animation: ${UpDown} 5s linear infinite;
`}
${media.desktopL`
width: 400px;
bottom: -32%;
`}
}

////////////////////:hover effects

&:hover {
    cursor: pointer;
    transition: ${transitions.basic1}
   img {
      transition: ${transitions.basic2}
      ${media.desktop`
        width: 560px;
        bottom: -80%;
      `}
    }
    ${DisciplineNavItemText} > p {
    display: block;
    }
    ${ImgShadow} {
    display: none;
    transition: ${transitions.basic1}
    }
    ${DisciplineNavItemText} {
        & > h1:after {
        width: 80px;
        transition: ${transitions.basic2}
        }
        ${media.desktop`
        &  a {
        visibility: visible;
        color: ${colorsRoles.DarkGrey};
        padding: 8px 16px 8px 16px;
      `}

        }
    }
}
`;
export const BrandBackground = styled.div`
position: absolute;
top: 0;
right: 0;
left: 0;
bottom: 0;
background-color: ${props => props.colorBrand}16;
`;

export class DisciplineNavItem extends React.Component {
    render() {
        const {colorBrand,bottomGradient,altImg,label} = this.props;
        return (
              <DisciplineNavItemWrapper bottomGradient={bottomGradient}>
                  <StyledLink to="/Frontend">

                      <DisciplineNavItemText colorBrand={colorBrand}>

                          <h1>{this.props.title}</h1>
                          <p>{this.props.quote}</p>
                          <CTASmall label={label} />

                      </DisciplineNavItemText>


                      <img alt={altImg} src={Parrot} />

                      <ImgShadow/>
                      <BrandBackground colorBrand={colorBrand}/>

                  </StyledLink>

              </DisciplineNavItemWrapper>

        )
    }
}