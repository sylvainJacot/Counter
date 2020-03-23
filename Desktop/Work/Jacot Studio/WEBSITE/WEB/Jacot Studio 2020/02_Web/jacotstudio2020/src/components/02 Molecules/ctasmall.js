import React from "react";
import styled from "styled-components";
import {NavLink} from "react-router-dom";
import {colorsRoles} from "../01 Atoms/colors";
import {IcArrow} from "../01 Atoms/icons";

export const StyledLink = styled(NavLink)`
display: inline-block;
width: fit-content;
padding: 8px 16px;
margin-top: 24px;
border: 1px solid ${colorsRoles.White};
border-radius: 8px;
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