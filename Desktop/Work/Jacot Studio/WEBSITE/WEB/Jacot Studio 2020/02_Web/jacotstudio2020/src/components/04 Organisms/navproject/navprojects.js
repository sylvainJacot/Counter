import React from "react";

import styled from "styled-components";
import {projectColors,colorsRoles} from "../../01 Atoms/colors";

import {Parallax} from "react-spring/renderprops-addons";

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
                <NavProjectItem
                    BgColor={colorsRoles.Brand03}/>
                <NavProjectItem
                    BgColor={colorsRoles.Sketch}/>

            </Box>

        </>
    )
}

export default NavProjects;

