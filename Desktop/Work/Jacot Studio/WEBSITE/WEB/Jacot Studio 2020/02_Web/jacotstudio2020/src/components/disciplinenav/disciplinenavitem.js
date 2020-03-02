import React from "react";
import styled from "styled-components";
import {colorsRoles, gradient, brackgrounds} from "../../Atoms/colors";
import Parrot from "../../media/img/Parrot.png";

export const DisciplineNavItemWrapper = styled.li` 
position: relative;
width: 320px;
height: 361px;
overflow: hidden;
background-color: ${colorsRoles.DarkGrey};

img {
position: absolute;
z-index: 1;
width: 331px;
height: auto;
right: 72px;
top: 64px;
}

&:before {
content: "";
position: absolute;
top:0;
transform: translate(0,-50%);
width: 100%;
height: 320px;
${brackgrounds.RadialBg01};
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

export const DisciplineNavItemContent = styled.div`
float: right;
width: 144px;
height: 138px;
margin-top: 32px;
margin-right: 16px;
text-align: right;

h1 {
position: relative;
font-family: PlayfairDisplay-Regular_Black;
font-size: 24px;
text-align: right;
line-height: 32px;
color: ${colorsRoles.White};

&:after {
content: "";
position: absolute;
bottom: -8px;
right: 0;
width: 40px;
height: 2px;
background-color: ${colorsRoles.Brand01};
}

}

p {
margin-top: 26px;
font-family: Roboto-Regular;
font-size: 16px;
color: ${colorsRoles.White};
}

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
            <>
              <DisciplineNavItemWrapper>
                  <BrandBackground>

                <DisciplineNavItemContent>

                    <h1>UI/UX Developer</h1>
                    <p>What language is lorem ipsum ?</p>

                </DisciplineNavItemContent>

                <img src={Parrot}/>
                  </BrandBackground>

            </DisciplineNavItemWrapper>

            </>
        )
    }
}