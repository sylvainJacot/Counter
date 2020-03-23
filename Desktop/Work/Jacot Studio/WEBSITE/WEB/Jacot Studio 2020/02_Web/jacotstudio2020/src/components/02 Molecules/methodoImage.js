import React from "react";
import styled from "styled-components";
import {gradient} from "../01 Atoms/colors";
import {transitions} from "../01 Atoms/animations";
import {ResponsiveImage} from "../01 Atoms/ResponsiveImage";


export const ToolTip = styled.span`
display: none;
position: absolute;
padding: 0 24px;
width: fit-content;
height: 24px;
border-radius: 8px;
background-color: tomato;

left: 0;
bottom: 0;
transform: translate(50%,-50%);

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
background-color: tomato;
transform: translate(50%,-50%);
transform: rotate(45deg);
}
`;
export const Box = styled.div`
position: relative;
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
cursor: pointer;
&:after{
content: "";
display: block;
position: absolute;
top: 100%;
right: 0;
bottom: 0;
left: 0;
${gradient.BrandSketch30};
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
            <MethodoImageWrapper>
            <ResponsiveImage
                sourceMobile={props.sourceMobile}
                altImage={props.altImage}
            />
        </MethodoImageWrapper>
            <ToolTip>Sketch</ToolTip>
        </Box>
    </>

};

export default MethodoImage;