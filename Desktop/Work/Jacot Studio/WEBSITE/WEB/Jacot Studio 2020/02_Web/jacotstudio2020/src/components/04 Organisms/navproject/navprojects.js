import React from "react";

import styled from "styled-components";
import {projectColors,colorsRoles} from "../../01 Atoms/colors";

import Parallax from "react-rellax/lib/index";

import NavProjectItem from "../navproject/navprojectitem";

export const Box = styled.div`
width: 100%;
height: 100%;
`;


const NavProjects  = () => {


    return (
        <>

            <Box>

                <NavProjectItem
                    BgColor={projectColors.Evergreen}/>
            </Box>

        </>
    )
}

export default NavProjects;

