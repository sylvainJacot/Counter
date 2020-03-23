import React from "react";
import styled from "styled-components";
import {media} from "../../01 Atoms/mediaqueries";
import {colorsRoles, backgrounds, gradient} from "../../01 Atoms/colors";
import {transitions} from "../../01 Atoms/animations";
import {navigationDiscipline} from "../../01 Atoms/Data";
import {images} from "../../01 Atoms/images";

export const FavouriteMethodoWrapper = styled.section`
background-color: ${colorsRoles.White};
display: flex;
flex-direction: column;
align-items: center;
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
export const MethodoImageWrapper = styled.div`
width: fit-content;
display: flex;
`;
export const MethodoImage = styled.div`
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




const FavouriteMethodo = (props) => {
    return <>
        <FavouriteMethodoWrapper>
            <h1>Favourite Methodo</h1>
                <MethodoImageWrapper>
                    <MethodoImage> <img src={images.Sketch}/></MethodoImage>
                    <MethodoImage> <img src={images.Sketch}/></MethodoImage>
                    <MethodoImage><img src={images.Sketch}/></MethodoImage>
                    <MethodoImage><img src={images.Sketch}/></MethodoImage>
                </MethodoImageWrapper>

        </FavouriteMethodoWrapper>
    </>

};

export default FavouriteMethodo;