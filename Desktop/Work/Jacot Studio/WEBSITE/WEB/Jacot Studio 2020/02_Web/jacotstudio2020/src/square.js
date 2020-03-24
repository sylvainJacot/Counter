import React from 'react';
import styled from "styled-components";

export const SquareBox = styled.div`
width: 300px;
height: 300px;
display: block;
color: white;
display: flex;
align-items: center;
justify-content: center;
font-size: 5em;
border: 1px solid tomato;
background-color: ${props => props.bgColor};
`;

const Square = (props) => {
    return (
        <>
            <SquareBox bgColor={props.bgColor}>{props.nomcarre}</SquareBox>
        </>
    );
}
export default Square;
