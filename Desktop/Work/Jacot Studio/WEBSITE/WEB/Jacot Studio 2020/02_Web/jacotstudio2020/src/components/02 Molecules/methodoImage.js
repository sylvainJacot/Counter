import React from "react";
import styled from "styled-components";
import {gradient} from "../01 Atoms/colors";
import {transitions} from "../01 Atoms/animations";
import {ResponsiveImage} from "../01 Atoms/ResponsiveImage";


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
        <MethodoImageWrapper>
            <ResponsiveImage
                sourceMobile={props.sourceMobile}
                altImage={props.altImage}
            />
        </MethodoImageWrapper>
    </>

};

export default MethodoImage;