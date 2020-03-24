import React from "react";
import styled from "styled-components";
import DisciplineHeader from "../04 Organisms/disciplinepage/disciplineheader";
import {colorsRoles} from "../01 Atoms/colors";
import {images} from "../01 Atoms/images";
import {media} from "../01 Atoms/mediaqueries";
import Skills from "../01 Atoms/Data";
import {DisciplineNavItem} from "../04 Organisms/disciplinenav/disciplinenavitem";
import {DisciplineNavList} from "../04 Organisms/disciplinenav/disciplinenav";

export const Box = styled.div`
${media.desktop`
margin-right: 80px;
`
}
`;

export class DisciplineHomePage extends React.Component {

    render() {
        return (
            <>
                {
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
                }

                </>
        )
    }
}

