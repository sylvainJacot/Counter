import React from "react";

import styled from "styled-components";
import Skillheader from "../04 Organisms/skillpage/skillheader";
import {colorsRoles} from "../01 Atoms/colors";
import {media} from "../01 Atoms/mediaqueries";

import {images} from "../01 Atoms/images";
import TemplateMethodo from "../04 Organisms/skillpage/templatemethodo";
import {NavProjects} from "../04 Organisms/navproject/navprojects";





export const Box = styled.div`
position: relative;
${media.desktop`
margin-right: 80px;
`
}
`;


export class SkillProjects extends React.Component {

render() {
        return (
            <>

                        <Box>


                            <Skillheader
                                mainTitle={"Titre 01"}
                                mainColor={colorsRoles.Brand01}
                                srcMainImg={images.Parrot}
                                description={"Description 01"}
                            />
                            <TemplateMethodo/>

                            <NavProjects/>


                        </Box>


                </>
        )
}
}



