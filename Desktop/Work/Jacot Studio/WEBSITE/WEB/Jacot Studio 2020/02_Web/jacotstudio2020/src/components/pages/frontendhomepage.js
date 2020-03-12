import React from "react";
import styled from "styled-components";

export const Wrapper = styled.div`
display: block;
width: 300px;
height: 300px;
background-color: cornflowerblue;
`;

export class FrontendHomePage extends React.Component {

    render() {
        return (
            <>
                <Wrapper>FrontendHomePage</Wrapper>
            </>
        )
    }
}

