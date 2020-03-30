import React from "react";
import styled from "styled-components";


import {imagesProjects} from "../../01 Atoms/images";
import CTADefault from "../../02 Molecules/ctadefault";
import {colorsRoles,projectColors} from "../../01 Atoms/colors";
import {ResponsiveImage} from "../../01 Atoms/ResponsiveImage";
import {ParallaxLayer} from "react-spring/renderprops-addons";



export const Box = styled.section`
position: relative;
width: 100%;
height: 880px;
display: flex;

`;
export const LeftContent = styled.div``;
export const LeftSideContent = styled.div`
width: 50%;
display: flex;
align-items: center;

    ${LeftContent} {
    width: 480px;
    margin-left: 64px;
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
export const RightSideContent = styled.div`
width: 50%;
height: 100%;
background-color: ${props => props.BgColor};
position: relative;

& picture {
position: absolute;
left: -88px;
top: 50%;
transform: translateY(-50%);
}
& ${ForeGroundPic} {

    & picture {
    left: -50%;
    top: 50%;
    transform: translateX(50%);
    }
}



`;


const NavProjectItem = (props) => {

    return (
        <>

            <Box>
                <LeftSideContent>
                    <LeftContent>
                        <p>Test</p>
                        <h3>Evergreen</h3>
                        <p>Recently I came across an exciting video on the internet. The video was packed with information about marketing and how.</p>
                        <CTADefault
                            label={"See Project"}
                            to={"/"}
                        />
                    </LeftContent>
                </LeftSideContent>

                <RightSideContent BgColor={props.BgColor}>

                    <ResponsiveImage
                        sourceMobile={imagesProjects.MacBook}
                    />

                                <ForeGroundPic>
                                    <ResponsiveImage
                                        sourceMobile={imagesProjects.Leaves}
                                    />
                                </ForeGroundPic>
                </RightSideContent>


            </Box>



        </>

    )
};

export default NavProjectItem;

