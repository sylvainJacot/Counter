import React from "react";
import styled from "styled-components";
import {media} from "../../Atoms/mediaqueries";
import {transitions, Breathe} from "../../Atoms/animations";
import {colorsRoles, gradient, backgrounds} from "../../Atoms/colors";
import {DisciplineNavItemContent} from "./disciplinenavitemContent";


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
display: flex;
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
display: block;
/*animation: ${Breathe} 5s linear infinite;*/
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

export class TestDeLexport extends React.Component {
    render() {
        return (
            <>
              <DisciplineNavItemWrapper>

                  <DisciplineNavItemContent/>
                  <ImgShadow/>
                  <BrandBackground/>

              </DisciplineNavItemWrapper>

            </>
        )
    }
}