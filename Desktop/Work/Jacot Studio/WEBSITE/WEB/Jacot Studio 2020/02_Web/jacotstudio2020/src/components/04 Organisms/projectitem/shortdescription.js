import React from "react";
import styled from "styled-components";
import {colorsRoles} from "../../01 Atoms/colors";


export const Box = styled.div`

width: 50%;
margin-bottom: 24px;

& h5 {
font-family: Roboto-Bold;
font-size: 16px;
color: ${colorsRoles.DarkGrey};
text-align: center;
line-height: 32px;
}

& p {
font-family: Roboto-Regular;
font-size: 16px;
color: ${colorsRoles.DarkGrey2};
letter-spacing: 0;
text-align: center;
line-height: 24px;
}

`;


const ShortDescription = (props) => {
    return <>
        <Box>
            <h5>{props.title}</h5>
            <p>{props.description}</p>
        </Box>
    </>

};

export default ShortDescription;