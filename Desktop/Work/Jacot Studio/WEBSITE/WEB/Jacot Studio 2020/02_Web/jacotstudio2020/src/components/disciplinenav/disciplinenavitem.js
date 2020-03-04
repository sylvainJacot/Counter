import React from "react";
import styled from "styled-components";
import {media} from "../../Atoms/mediaqueries";
import {transitions, Breathe, UpDown} from "../../Atoms/animations";
import {colorsRoles, gradient, backgrounds} from "../../Atoms/colors";
import Parrot from "../../media/img/Parrot.png";


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
${gradient.Brand0130};
}

`;
export const DisciplineNavItemLink = styled.a` 
img {
position: absolute;
z-index: 1;
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
width: 300px;
left:50%;
top: unset;
bottom: -80px;
transform: translate(-50%,-50%);
animation: ${UpDown} 5s linear infinite;
`}
${media.desktopL`
width: 400px;
bottom: -182px;
`}
}

////////////////////:hover effects

&:hover {
    cursor: cell;
    transition: ${transitions.basic1}
   img {
      transition: ${transitions.basic2}
      ${media.desktop`
        bottom: -520px;
      `}
    }

}
`;
export const DisciplineNavItemText = styled.div`
float: right;
width: 48%;
height: 138px;
margin-top: 32px;
margin-right: 16px;
text-align: right;
color: ${colorsRoles.White};
transition: ${transitions.basic2};

${media.mobileL `
margin-top: 40px;
margin-right: 24px;
`}
${media.tablet`
margin-right: 32px;
`}
${media.desktop`
margin-top:126px;
margin-left: 40px;
width: 100%;
float: unset;
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
background-color: ${colorsRoles.Brand01};
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
margin-left: 40px;
`}

}

`;
export const ImgShadow = styled.div`
position: absolute;
display: none;
width: 80%;
height: 40px;
bottom: 80px;
right: 50%;
transform: translate(50%,0);
transition: ${transitions.basic1}
${backgrounds.RadialBg02};
${media.desktop`
display: "block";
animation: ${Breathe} 5s linear infinite;
`}
`;
export const BrandBackground = styled.div`
position: absolute;
top: 0;
right: 0;
left: 0;
bottom: 0;
background-color: ${colorsRoles.Brand01}16;
`;

export class DisciplineNavItem extends React.Component {
    render() {
        return (
              <DisciplineNavItemWrapper>
                  <DisciplineNavItemLink href={"#"}>

                      <DisciplineNavItemText>

                          <h1>UI/UX <br/>Developper</h1>
                          <p>What language is lorem ipsum ?</p>

                      </DisciplineNavItemText>

                      <img src={Parrot} />

                      <ImgShadow/>
                      <BrandBackground/>

                  </DisciplineNavItemLink>

              </DisciplineNavItemWrapper>

        )
    }
}