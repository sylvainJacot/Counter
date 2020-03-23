import React from "react";

import {colorsRoles, gradient} from "./colors";
import {images} from "./images";

const WrapTextDesign = (
    <>
        UX/UI
        <br />
        Designer
    </>
);
const WrapTextFront = (
    <>
        Creative
        <br />
        Developper
    </>
);
const WrapTextRetouch = (
    <>
        Photo
        <br />
        Retoucher
    </>
);

export const navigationDiscipline =  [
    {
        title: WrapTextDesign,
        quote: "Lorem ipsum UX/UI Designer ezifz iugef zieg fzieg",
        altImg: "Parrot",
        color: colorsRoles.Brand01,
        bottomGradient: gradient.Brand0130,
        labelCTA: "Learn more",
        src: images.Parrot,

    },
    {
        title: WrapTextFront,
        quote: "Lorem ipsum Creative Developer",
        altImg: "Fox",
        color: colorsRoles.Brand02,
        bottomGradient: gradient.Brand0230,
        labelCTA: "Learn",
        src: images.Parrot,
    },
    {
        title: WrapTextRetouch,
        quote: "Lorem ipsum Photo Retoucher",
        altImg: "Unicorne",
        color: colorsRoles.Brand03,
        bottomGradient: gradient.Brand0330,
        labelCTA: "Learn more",
        src: images.Parrot,
    },

]

export const methodo = [
    {
        title: "Favourite Methodology",
        discipline: "UX/UI Designer",
        tools: [
            {name: "Sketch", SourceImage: images.Sketch},
            {name: "Sass", SourceImage: images.Sass},
        ]
    },
    {
        title: "Favourite Methodology",
        discipline: "UX/UI Designer",
        tools: [
            {name: "Sketch", SourceImage: images.Sass},
            {name: "Sass", SourceImage: images.Sketch},
        ]
    }
]