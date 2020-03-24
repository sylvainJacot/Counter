import React from "react";
import styled from "styled-components";
import DisciplineHeader from "../04 Organisms/disciplinepage/disciplineheader";
import {colorsRoles} from "../01 Atoms/colors";
import {media} from "../01 Atoms/mediaqueries";
import Skills from "../01 Atoms/Data";
import {images} from "../01 Atoms/images";


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
                            <DisciplineHeader
                                mainTitle={"Titre 01"}
                                mainColor={colorsRoles.Brand01}
                                srcMainImg={images.Parrot}
                                description={"Description 01"}
                            />
                        </Box>


                </>
        )
}

export default SkillProjects;

/*{
    Skills.map((skillItem) =>
        skillItem.skillProjects.map((skillProject) =>
            <Box>
                <DisciplineHeader
                    mainTitle={skillProject.mainTitle}
                    mainColor={skillProject.mainColor}
                    srcMainImg={skillProject.srcMainImg}
                    description={skillProject.description}
                />
            </Box>
        )

    )
}*/
