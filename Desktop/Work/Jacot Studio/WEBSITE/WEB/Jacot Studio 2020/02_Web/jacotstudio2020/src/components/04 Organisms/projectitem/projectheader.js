import React from "react";
import styled from "styled-components";
import {ResponsiveImage} from "../../01 Atoms/ResponsiveImage";
import {imagesProjects} from "../../01 Atoms/images";
import {projectColors} from "../../01 Atoms/colors";
import {media} from "../../01 Atoms/mediaqueries";


export const Header = styled.header`
height: 208px;
width: 100%;
padding-bottom: 16px;
position: relative;
display: flex;
justify-content: center;
align-items: flex-end;
background-color: ${projectColors.Evergreen} ;

${media.desktop`
height: 400px;
`};

& picture {
width: 80%;
height: fit-content;

${media.desktop`
width: 48%;
`};

& img  {
width: 100%;
}
}



`;



const ProjectHeader = () => {
    return <>

            <Header>
                <ResponsiveImage
                    sourceMobile={imagesProjects.HeaderEvergreen}
                />
            </Header>
    </>
};

export default ProjectHeader;