import React from "react";
import styled from "styled-components";


export const SquareBox = styled.div`
display: block;
width: 400px;
height: 200px;
background-color: aqua;
`

export class Square extends React.Component {

    render() {
        return (
            <>
                <SquareBox></SquareBox>
            </>
        )
    }
}