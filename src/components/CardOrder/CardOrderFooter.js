import React from "react";
import styled from "styled-components";
import {Colors} from "../atoms/Colors";
import {Margins} from "../atoms/Margins";


const CardOrderFooter = () => {
    return <>
    <Box>
    <TotalLabel>Total</TotalLabel>
    <Total>0</Total>
    </Box>
    </>

};

export default CardOrderFooter;

export const Box = styled.div`
background-color: ${Colors.LightGrey};
height: 72px;
display: flex;
justify-content: space-between;
align-items: center;
padding: 0 ${Margins.MarginsLeftRightCounter};
`;

export const TotalLabel = styled.p`
font-size: 1.5rem;
font-weight: 700;
`;
export const Total = styled.p`
display: inline-block;
width: 144px;
text-align: center;
padding: 0px 4px;
font-size: 1.5rem;
font-weight: 700;
`;