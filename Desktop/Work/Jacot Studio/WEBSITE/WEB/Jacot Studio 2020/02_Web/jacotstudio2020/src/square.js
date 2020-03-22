import React from 'react';
import styled from "styled-components";

export const SquareBox = styled.div`
width: 400px;
height: 400px;
background-color: tomato;
`;

function Square() {
    return (
        <>
            <SquareBox></SquareBox>
        </>
    );
}
export default Square;
