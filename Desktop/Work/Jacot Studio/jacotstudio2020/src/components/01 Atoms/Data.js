import React from "react";

import {colorsRoles, gradient, projectColors, methodoColors} from "./colors";
import {images, imagesProjects} from "./images";

const  UXUIDesigner
    = (
    <>
        UX/UI
        <br />
        Designer
    </>
);
const CreativeDev = (
    <>
        Creative
        <br />
        Developper
    </>
);
const PhotoRetoucher = (
    <>
        Photo
        <br />
        Retoucher
    </>
);

export const Skills =  [
    {
        titleNav: UXUIDesigner,
        mainTitle: "UX/UI Designer",
        quote: "Lorem ipsum UX/UI Designer ezifz iugef zieg fzieg",
        description: "Forget Ebay and other forms of ... description",
        altMainImg: "Parrot",
        srcMainImg: images.Parrot,
        mainColor: colorsRoles.Brand02,
        mainGradient: gradient.Brand0230,
        labelCTA: "Learn more",
        pathName:"/uiux-designer",
    },
    {
        titleNav: CreativeDev,
        mainTitle: "UX/UI Designer",
        quote: "Lorem ipsum UX/UI Designer ezifz iugef zieg fzieg",
        description: "Forget Ebay and other forms of ... description",
        altMainImg: "Parrot",
        srcMainImg: images.Parrot,
        mainColor: colorsRoles.Brand02,
        mainGradient: gradient.Brand0230,
        labelCTA: "Learn more",
        pathName:"/uiux-designer",
    },
    {
        titleNav: PhotoRetoucher,
        mainTitle: "UX/UI Designer",
        quote: "Lorem ipsum UX/UI Designer ezifz iugef zieg fzieg",
        description: "Forget Ebay and other forms of ... description",
        altMainImg: "Parrot",
        srcMainImg: images.Parrot,
        mainColor: colorsRoles.Brand02,
        mainGradient: gradient.Brand0230,
        labelCTA: "Learn more",
        pathName:"/uiux-designer",
    },

]

export const Methodologies = [
    {
        category: "UI/UX Designer",
        mainMethodo: [
            {
                title: "Sketch",
                logo: images.Sketch,
                color: methodoColors.Sketch,
                gradient: gradient.BrandSketch30,
            },
            {
                title: "Sass",
                logo: images.Sass,
                color: methodoColors.Sass,
                gradient: gradient.BrandSass30,
            }
        ],
        evergreen: [
            {
                title: "Sketch",
                logo: images.Sketch,
                color: methodoColors.Sketch,
                gradient: gradient.BrandSketch30,
            },
            {
                title: "Sass",
                logo: images.Sass,
                color: methodoColors.Sass,
                gradient: gradient.BrandSass30,
            },
            {
                title: "Sass",
                logo: images.Sass,
                color: methodoColors.Sass,
                gradient: gradient.BrandSass30,
            },
            {
                title: "Sass",
                logo: images.Sass,
                color: methodoColors.Sass,
                gradient: gradient.BrandSass30,
            },
        ]
    }
]


export const UIUXProjects = [

    {
        category: "UI/UX Designer",
        title: "Evergreen",
        description: "Evergreen is a great project",
        role: "The best role ever",
        review: "The best review ever",
        team: "A big one",
        pathname: "/projet",
        decorativeimage: images.Parrot,
        maincolor: projectColors.Evergreen,
        secondarycolor: colorsRoles.Sketch,
        backgroundpicture: imagesProjects.MacBook,
        foregroundpicture: imagesProjects.Leaves,
    },

    {
        category: "UI/UX Designer",
        title: "Samsung",
        description: "Evergreen is a great project",
        role: "The best role ever",
        review: "The best review ever",
        team: "A big one",
        pathname: "/projet",
        decorativeimage: images.Parrot,
        maincolor: projectColors.Evergreen,
        secondarycolor: colorsRoles.Sketch,
        backgroundpicture: imagesProjects.MacBook,
        foregroundpicture: imagesProjects.Leaves,
    },
    {
        category: "UI/UX Designer",
        title: "Evergreen",
        description: "Evergreen is a great project",
        role: "The best role ever",
        review: "The best review ever",
        team: "A big one",
        pathname: "/projet",
        decorativeimage: images.Parrot,
        maincolor: projectColors.Evergreen,
        secondarycolor: colorsRoles.Sketch,
        backgroundpicture: imagesProjects.MacBook,
        foregroundpicture: imagesProjects.Leaves,
    },
    {
        category: "UI/UX Designer",
        title: "Evergreen",
        description: "Evergreen is a great project",
        role: "The best role ever",
        review: "The best review ever",
        team: "A big one",
        pathname: "/projet",
        decorativeimage: images.Parrot,
        maincolor: projectColors.Evergreen,
        secondarycolor: colorsRoles.Sketch,
        backgroundpicture: imagesProjects.MacBook,
        foregroundpicture: imagesProjects.Leaves,
    },
]



