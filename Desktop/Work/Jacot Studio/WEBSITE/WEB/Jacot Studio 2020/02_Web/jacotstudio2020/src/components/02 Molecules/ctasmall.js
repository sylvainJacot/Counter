import React from "react";
import styled from "styled-components";
import {NavLink} from "react-router-dom";
import {colorsRoles} from "../01 Atoms/colors";
import {IcArrow} from "../01 Atoms/icons";
import {transitions} from "../01 Atoms/animations";
import {media} from "../01 Atoms/mediaqueries";

export const StyledLink = styled(NavLink)`
position: relative;
display: inline-block;
width: fit-content;
height: fit-content;
padding: 8px 16px 8px 16px;
margin-top: 24px;
border: 1px solid ${colorsRoles.White};
border-radius: 8px;
transition: ${transitions.basic2};
${media.desktop`
padding: 8px 16px 8px 0px;
`}


/*&:after {
content: "";
display: block;
position: absolute;
border-radius: 6px;
z-index: -1;
top: 0;
bottom: 0;
right: 0;
left: 0;
background-color: ${colorsRoles.Brand01};
}*/
`;
export const Content = styled.div`
display: flex;
align-items: center;
color: ${colorsRoles.White};
font-family: Roboto;
font-size: 2rem;

& svg {
margin-left: 2rem;
}
`;

const CTASmall = (props,pathName) => {
    return <>

        <StyledLink to={pathName}>
            <Content>
                {props.label}
            <IcArrow
                Size={"16px"}
                SizeBis={"auto"}
                FillColor={colorsRoles.White}
            />
            </Content>
        </StyledLink>

    </>

};


export default CTASmall;