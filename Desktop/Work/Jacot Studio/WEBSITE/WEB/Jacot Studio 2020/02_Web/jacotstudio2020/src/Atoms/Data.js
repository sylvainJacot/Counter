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
        quote: "Lorem ipsum UX/UI Designer",
        color: colorsRoles.Brand01,
        bottomGradient: gradient.Brand0130,
    },
    {
        title: WrapTextFront,
        quote: "Lorem ipsum Creative Developer",
        color: colorsRoles.Brand02,
        bottomGradient: gradient.Brand0230,
    },
    {
        title: WrapTextRetouch,
        quote: "Lorem ipsum Photo Retoucher",
        color: colorsRoles.Brand03,
        bottomGradient: gradient.Brand0330,
    },

]
