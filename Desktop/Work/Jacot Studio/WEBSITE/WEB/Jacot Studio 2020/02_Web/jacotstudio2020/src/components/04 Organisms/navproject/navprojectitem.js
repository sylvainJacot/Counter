import React from "react";
import styled from "styled-components";

import {media} from "../../01 Atoms/mediaqueries";
import CTADefault from "../../02 Molecules/ctadefault";
import {colorsRoles,projectColors} from "../../01 Atoms/colors";
import CTASmall from "../../02 Molecules/ctasmall";

export const Box = styled.section`
width: 100%;
height: 880px;
display: flex;
`;

export const LeftSideContent = styled.div`
width: 50%;
color: ${colorsRoles.White};

`;
export const RightSideContent = styled.div`
width: 50%;
background-color: ${projectColors.Evergreen};
`;

export const Content = styled.div``;

const NavProjectItem = (props) => {
    return (
        <>
            <Box>
                <LeftSideContent>
                    <Content>
                        <p>Test</p>
                        <h3>Evergreen</h3>
                        <p>Description</p>
                        <CTADefault
                            label={"See Project"}
                            to={"/"}
                        />
                    </Content>
                </LeftSideContent>

                <RightSideContent>
                    Right Side
                </RightSideContent>

            </Box>

        </>

    )
}

export default NavProjectItem;

