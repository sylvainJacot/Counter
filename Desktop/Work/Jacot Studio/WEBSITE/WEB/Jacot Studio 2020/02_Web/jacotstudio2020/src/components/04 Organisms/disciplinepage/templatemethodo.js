import React from "react";
import styled from "styled-components";
import {media} from "../../01 Atoms/mediaqueries";
import {colorsRoles, backgrounds, gradient} from "../../01 Atoms/colors";
import {images} from "../../01 Atoms/images";
import MethodoImage from "../../02 Molecules/methodoImage";

export const TemplateMethodoWrapper = styled.section`
background-color: ${colorsRoles.White};
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
${media.desktop`
font-size: 6rem;
line-height: 84px;
flex-direction: unset;
align-items: unset;
`}
`;

export const MethodoImagesWrapper = styled.div`
display: flex;
`;


const TemplateMethodo = (props) => {
    return <>
        <TemplateMethodoWrapper>
            <h1>{props.Title}</h1>
                <MethodoImagesWrapper>

                        <MethodoImage
                            sourceMobile={images.Sketch}
                        />

                </MethodoImagesWrapper>
        </TemplateMethodoWrapper>
    </>

};

export default TemplateMethodo;