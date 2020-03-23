import React from "react";
import styled from "styled-components";
import {media} from "../../01 Atoms/mediaqueries";
import {colorsRoles, backgrounds, gradient} from "../../01 Atoms/colors";
import {transitions} from "../../01 Atoms/animations";
import {methodo} from "../../01 Atoms/Data";
import {images} from "../../01 Atoms/images";
import MethodoImage from "../../02 Molecules/methodoImage";

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


const FavouriteMethodo = (props) => {
    return <>
        <FavouriteMethodoWrapper>
            <h1>Favourite Methodo</h1>
                    {
                        methodo[0].tools.map((item) =>
                        <MethodoImage
                            sourceMobile={item.SourceImage}
                        />
                        )
                    }
        </FavouriteMethodoWrapper>
    </>

};

export default FavouriteMethodo;