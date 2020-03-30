import React from "react";
import styled from "styled-components";


import {imagesProjects} from "../../01 Atoms/images";
import CTADefault from "../../02 Molecules/ctadefault";
import {colorsRoles,projectColors} from "../../01 Atoms/colors";
import {ResponsiveImage} from "../../01 Atoms/ResponsiveImage";
import Parallax from "react-rellax";


export const Box = styled.section`
position: relative;
width: 100%;
height: 880px;
display: flex;
`;
export const LeftContent = styled.div`

height: 100%;
`;
export const LeftSide= styled.div`
width: 50%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;

    ${LeftContent} {
    width: 480px;
    height: fit-content;
    & p {
    font-family: Roboto-LightItalic;
    font-size: 16px;
    color: ${projectColors.Evergreen};
    letter-spacing: 0;
    line-height: 24px;
    margin-bottom: 8px;
    }
    
    & h3 {
    font-family: PlayfairDisplay-Regular_Black;
    font-size: 6rem;
    line-height: 48px;
    color: ${projectColors.Evergreen};
    margin-bottom: 32px;
    }
    
    & h3 ~ p {
    font-family: Roboto-Regular;
    font-size: 24px;
    color: ${colorsRoles.White};
    letter-spacing: 0;
    line-height: 36px;
    margin-bottom: 32px;
    }

}
`;
export const ForeGroundPic = styled.div``;
export const RightSide = styled.div`
width: 50%;
height: 100%;
background-color: ${props => props.BgColor};
position: relative;

& picture {
position: absolute;
top: 50%;
right: 56%;
transform: translate(50%,-50%);
}
& ${ForeGroundPic} {
    position: absolute;
    bottom: 25%;
    transform: translate(50%,-50%);
    & picture {
    }
}



`;


const NavProjectItem = (props) => {

    return (
        <>

            <Box>
                <LeftSide>
                    <LeftContent>
                        <p>Test</p>
                        <h3>Evergreen</h3>
                        <p>Recently I came across an exciting video on the internet. The video was packed with information about marketing and how.</p>
                        <CTADefault
                            label={"See Project"}
                            to={"/"}
                        />
                    </LeftContent>
                </LeftSide>


                    <RightSide BgColor={props.BgColor}>

                            <ResponsiveImage
                                sourceMobile={imagesProjects.MacBook}
                            />


                                <ForeGroundPic>
                                    <Parallax speed={3} percentage={0}>
                                    <ResponsiveImage
                                        sourceMobile={imagesProjects.Leaves}
                                    />
                                    </Parallax>
                                </ForeGroundPic>


                </RightSide>


            </Box>



        </>

    )
};

export default NavProjectItem;

