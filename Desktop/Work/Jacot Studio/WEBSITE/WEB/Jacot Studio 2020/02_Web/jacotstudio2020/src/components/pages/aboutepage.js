import React from "react";
import styled from "styled-components";
import {colorsRoles} from "../Atoms/colors";

export const AboutPageWrapper = styled.div`
width: 900px;
height: 900px;
margin-left: 500px;
background-color: orangered;
display: flex;
align-items: center;
justify-content: center;
& h1 {
font-size: 40px;
color: ${colorsRoles.White};
}
`;

export class AboutPage extends React.Component {
    render() {
        return (
            <>
                <AboutPageWrapper>
                    <h1>About Page</h1>
                </AboutPageWrapper>
            </>
        )
    }
}