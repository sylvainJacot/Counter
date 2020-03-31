import React from "react";
import styled from "styled-components";
import {media} from "../../01 Atoms/mediaqueries";
import {colorsRoles, backgrounds, gradient} from "../../01 Atoms/colors";
import {images} from "../../01 Atoms/images";
import MethodoImage from "../../02 Molecules/methodoImage";

export const TemplateMethodoWrapper = styled.section`
background-color: ${colorsRoles.White};
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
padding: 80px 0;
 h1 {
position: relative;
font-family: PlayfairDisplay-Regular_Black;
font-size: 4rem;
line-height: 48px;
color: ${colorsRoles.DarkGrey};
margin-bottom: 40px;
text-align: center;
${media.desktop`
font-size: 6rem;
line-height: 84px;
flex-direction: unset;
align-items: unset;
`}
`;

export const MethodoImagesWrapper = styled.div`
display: flex;
justify-content: center;
flex-wrap: wrap;

${media.desktop`
justify-content: space-between;
flex-wrap: no-wrap;
`}

`;


const TemplateMethodo = (props) => {
    return <>
        <TemplateMethodoWrapper>
            <h1>Favourite Methodology</h1>
                <MethodoImagesWrapper>

                        <MethodoImage
                            sourceMobile={props.methodLogo}
                        />
                    <MethodoImage
                        sourceMobile={props.methodLogo}
                    />
                    <MethodoImage
                        sourceMobile={props.methodLogo}
                    />
                    <MethodoImage
                        sourceMobile={props.methodLogo}
                    />
                    <MethodoImage
                        sourceMobile={props.methodLogo}
                    />

                </MethodoImagesWrapper>
        </TemplateMethodoWrapper>
    </>

};

export default TemplateMethodo;