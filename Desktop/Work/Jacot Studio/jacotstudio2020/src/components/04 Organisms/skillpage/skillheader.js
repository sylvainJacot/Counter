import React from "react";
import styled from "styled-components";
import {media} from "../../01 Atoms/mediaqueries";
import {colorsRoles, backgrounds, gradient} from "../../01 Atoms/colors";
import {transitions} from "../../01 Atoms/animations";
import {LogoSamsung} from "../../01 Atoms/icons";

export const HeaderWrapper = styled.header`
position: relative;
display: flex;
flex-direction: column;
align-items: center;
padding: 104px 16px 0 16px;
&:after {
content: "";
position: absolute;
display: block;
z-index: -1;
top: 0;
right: 0;
bottom: 0;
left: 0;
${gradient.DarkGrey};
}

${media.tablet`
padding: 104px 80px 0 80px;
`}

${media.desktop`
padding: unset;
align-items: unset;
padding-top: 80px;
flex-wrap: wrap;
align-items: unset;
flex-direction: column;
`}

`
export const HeaderMain = styled.main`
display: flex;
flex-direction: column;
align-items: center;
${media.desktop`
flex-direction: row;
justify-content: center;
`}
`;
export const Picture = styled.img`
width: 200%;
position: absolute;
left: 32%;
top: 64%;
transform: translate(-50%,-50%);
z-index: 1;

`;
export const DisciplinePictureWrapper = styled.div`
position: relative;
width: 184px;
height: 276px;
background-color: ${colorsRoles.DarkGrey};
overflow: hidden;
box-shadow: -8px 8px 0px 0px ${props => props.MainColor};
${media.desktop`
width: 308px;
height: 456px;
transform: scale(.9);
box-shadow: -16px 16px 0px 0px ${props => props.MainColor};
`}
&:after {
content: "";
display: block;
position: absolute;
width: 140%;
height: 140%;
top: -80%;
${backgrounds.RadialBg01};
}
`;
export const TextContent = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
margin-top: 24px;
${media.desktop`
margin-left: 80px;
width: 480px;
align-items: unset;
`}
${media.desktopL`
margin-top: unset;
width: 600px;
font-size: 6rem;
line-height: 84px;
margin-left: 120px;
`}
 h1 {
position: relative;
font-family: PlayfairDisplay-Regular_Black;
font-size: 4rem;
line-height: 48px;
color: ${colorsRoles.White};
${media.desktop`
font-size: 6rem;
line-height: 84px;
flex-direction: unset;
align-items: unset;
`}
     &:after {
    content: "";
    position: absolute;
    top: calc(48px + 16px);
    width: 80px;
    height: 2px;
    left: 50%;
    transform: translateX(-50%);
    background-color: ${colorsRoles.Brand01};
    transition: ${transitions.basic2}
    ${media.tablet`
    bottom: -16px;
    `}
    ${media.desktop`
    top: 100px;
    left:0;
    transform: unset;
    `}
     }
}
p {
font-family: Roboto-Regular;
font-size: 16px;
color: ${colorsRoles.White};
letter-spacing: 0;
line-height: 36px;
margin-top: 42px;
${media.desktop`
font-size: 24px;;
`}
}
`;

export const LogosWrapper = styled.div`
display: grid;
grid-auto-flow: row;
grid-template-columns: repeat(2, 1fr);
align-items: center;
grid-column-gap: 80px;
${media.tablet`
margin-top: 40px;
margin-bottom: 48px;
grid-template-columns: repeat(4, 80px);
justify-items: end;
`}
${media.desktop`
margin-top: 80px;
width: 100%;
align-items: unset;
justify-content: center;
`}


`;


const Skillheader = (props) => {
    return <>
            <HeaderWrapper>
                <HeaderMain>
                    <DisciplinePictureWrapper MainColor={props.mainColor}>
                        <Picture src={props.srcMainImg} />
                    </DisciplinePictureWrapper>
                    <TextContent>
                        <h1>{props.mainTitle}</h1>
                        <p>{props.description}</p>
                    </TextContent>
                </HeaderMain>
                <LogosWrapper>
                    <LogoSamsung Size={"80px"} FillColor={colorsRoles.LightGrey}/>
                    <LogoSamsung Size={"80px"} FillColor={colorsRoles.LightGrey}/>
                    <LogoSamsung Size={"80px"} FillColor={colorsRoles.LightGrey}/>
                    <LogoSamsung Size={"80px"} FillColor={colorsRoles.LightGrey}/>
                </LogosWrapper>
            </HeaderWrapper>
    </>

};

export default Skillheader;