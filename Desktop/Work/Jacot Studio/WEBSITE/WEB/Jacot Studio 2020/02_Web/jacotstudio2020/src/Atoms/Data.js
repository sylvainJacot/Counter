import React from "react";

import {colorsRoles, gradient} from "./colors";

const WrapTextDesign = (
    <>
        UX/UI
        <br />
        Designer
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
        title: "Creative",
        quote: "Lorem ipsum Creative Developer",
        color: colorsRoles.Brand02,
        bottomGradient: gradient.Brand0230,
    },
    {
        title: "Photo",
        quote: "Lorem ipsum Photo Retoucher",
        color: colorsRoles.Brand03,
        bottomGradient: gradient.Brand0330,
    },

]
