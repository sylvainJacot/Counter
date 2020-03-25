import React from "react";
import styled from "styled-components";
import Skillheader from "../04 Organisms/skillpage/skillheader";
import {colorsRoles} from "../01 Atoms/colors";
import {media} from "../01 Atoms/mediaqueries";
import Skills from "../01 Atoms/Data";
import {images} from "../01 Atoms/images";
import TemplateMethodo from "../04 Organisms/skillpage/templatemethodo";


export const Box = styled.div`
${media.desktop`
margin-right: 80px;
`
}
`;

const SkillProjects  = ({}) => {
        return (
            <>

                        <Box>
                            <Skillheader
                                mainTitle={"Titre 01"}
                                mainColor={colorsRoles.Brand01}
                                srcMainImg={images.Parrot}
                                description={"Description 01"}
                            />
                            <TemplateMethodo
                                methodLogo={images.Sketch}
                            />
                        </Box>


                </>
        )
}

export default SkillProjects;

