import React from "react";
import styled from "styled-components";
import {images} from "../../01 Atoms/images";
import {media} from "../../01 Atoms/mediaqueries";
import {colorsRoles, backgrounds, gradient} from "../../01 Atoms/colors";
import {transitions} from "../../01 Atoms/animations";

export const HeaderWrapper = styled.section`
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
margin-right: 80px;
flex-direction: unset;
justify-content: center;
`}

`
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
box-shadow: -8px 8px 0px 0px ${colorsRoles.Brand01};
${media.desktop`
width: 308px;
height: 456px;
box-shadow: -16px 16px 0px 0px ${colorsRoles.Brand01};
`}
&:after {
content: "";
display: block;
position: absolute;
width: 100%;
height: 100%;
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
font-size: 24px;
color: ${colorsRoles.White};
letter-spacing: 0;
line-height: 36px;
margin-top: 42px;
}
`;



const DisciplineHeader = () => {
    return <>
        <HeaderWrapper>
            <DisciplinePictureWrapper>
                <Picture src={images.Parrot} />
            </DisciplinePictureWrapper>
            <TextContent>
                <h1>UI Designer</h1>
                <p>Forget Ebay and other forms of advertising for your property that costs you hard earned money. Why not do it all for free? Investment Assets Properties have ready several locations around the world to take your free listings for any luxury property you have.
                </p>
            </TextContent>
        </HeaderWrapper>
    </>

};

export default DisciplineHeader;