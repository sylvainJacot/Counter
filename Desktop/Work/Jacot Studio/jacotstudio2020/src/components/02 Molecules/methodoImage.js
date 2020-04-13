import React from "react";
import styled from "styled-components";
import {media} from "../01 Atoms/mediaqueries";
import {transitions} from "../01 Atoms/animations";
import {ResponsiveImage} from "../01 Atoms/ResponsiveImage";


export const ToolTip = styled.span`
display: none;
position: absolute;
padding: 0 24px;
border-radius: 8px;
background-color: ${props => props.tooltipbg};

left: 50%;
top: 100%;
transform: translate(-50%,50%);

font-family: Roboto-Regular;
font-size: 16px;
color: white;
letter-spacing: 0;
text-align: center;
line-height: 24px;
&:after {
content:"";
display: block;
position: absolute;
top:-4px;
left: 50%;
width: 8px;
height: 8px;
background-color: ${props => props.tooltipbg};
transform: translate(50%,-50%);
transform: rotate(45deg);
}
`;
export const Box = styled.div`
position: relative;
margin: 0 8px;

${media.desktop`
margin: 0 40px;
`}

&:hover {
${ToolTip} {
display: block;
}
}
`;


export const MethodoImageWrapper = styled.div`
position: relative;
width: 64px;
height: 64px;
border-radius: 8px;
padding: 8px;
overflow: hidden;
&:after{
content: "";
display: block;
position: absolute;
top: 100%;
right: 0;
bottom: 0;
left: 0;
${props => props.gradient};
transition: ${transitions.basic2};
}
////////////////// HOVER EFFECT

&:hover {
&:after {
top: 50%;
transition: ${transitions.basic2};
}
}
& img {
width: 100%;
height: 100%;
} 
`;






const MethodoImage = (props) => {
    return <>
        <Box>
            <MethodoImageWrapper gradient={props.gradient}>
            <ResponsiveImage
                sourceMobile={props.sourceMobile}
                altImage={props.altImage}
            />
        </MethodoImageWrapper>
            <ToolTip tooltipbg={props.color}>{props.methodTitle}</ToolTip>
        </Box>
    </>

};

export default MethodoImage;