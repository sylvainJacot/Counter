import React from "react";
import styled from "styled-components";


import ProjectMainTitle from "../04 Organisms/projectitem/projectmaintitle";
import ProjectHeader from "../04 Organisms/projectitem/projectheader";
import {images, imagesProjects} from "../01 Atoms/images";
import TemplateMethodo from "../04 Organisms/skillpage/templatemethodo";
import {media} from "../01 Atoms/mediaqueries";

export const Box = styled.div`

margin-top: 64px;

${media.desktop`
margin-top: 0px;
margin-right: 80px
`};

`;

export const BackgroundImageProject = styled.div`

width: 100%;
height: 200px;
background-image: url(${imagesProjects.DecoEvergreen});
background-position: center; 
background-repeat: no-repeat;
background-size: cover; 

${media.desktop `
height: 400px;
`}

`;



const ProjectPage = () => {
    return <>
        <Box>
            <ProjectHeader />
            <ProjectMainTitle Title={"Evergreen"}/>
            <BackgroundImageProject />
            <TemplateMethodo
                sourceMobile={images.Sass}
            />
        </Box>
        </>

};

export default ProjectPage;