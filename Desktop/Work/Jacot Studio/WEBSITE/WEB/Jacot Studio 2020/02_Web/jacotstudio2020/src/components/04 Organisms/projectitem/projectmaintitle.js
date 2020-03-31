import React from "react";
import styled from "styled-components";
import {media} from "../../01 Atoms/mediaqueries";
import {colorsRoles} from "../../01 Atoms/colors";
import ShortDescription from "./shortdescription";


export const Box = styled.div`

background-color: ${colorsRoles.White};
padding: 40px 0;

${media.desktop`
padding: 160px 0;
`}

& h1 {
position: relative;
font-family: PlayfairDisplay-Regular_Black;
font-size: 4rem;
line-height: 32px;
color: ${colorsRoles.DarkGrey};
margin-bottom: 40px;
text-align: center;
${media.desktop`
font-size: 6rem;
line-height: 84px;
flex-direction: unset;
align-items: unset;
`}
}

`;
export const ShortDescriptionWrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;

${media.tablet`
flex-direction: unset;
align-items: unset;

`};

`;


const ProjectMainTitle = (props) => {
    return <>
        <Box>
            <h1>{props.Title}</h1>
            <ShortDescriptionWrapper>
            <ShortDescription
                title={"Role"}
                description={"Test test"}
            />
                <ShortDescription
                    title={"Role"}
                    description={"Test test"}
                />
                <ShortDescription
                    title={"Role"}
                    description={"Test test"}
                />
            </ShortDescriptionWrapper>
        </Box>
        </>

};

export default ProjectMainTitle;