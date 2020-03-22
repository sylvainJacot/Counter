import React from "react";

import {colorsRoles, gradient} from "./colors";

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
    },
    {
        title: WrapTextFront,
        quote: "Lorem ipsum Creative Developer",
        altImg: "Fox",
        color: colorsRoles.Brand02,
        bottomGradient: gradient.Brand0230,
    },
    {
        title: WrapTextRetouch,
        quote: "Lorem ipsum Photo Retoucher",
        altImg: "Unicorne",
        color: colorsRoles.Brand03,
        bottomGradient: gradient.Brand0330,
    },

]
