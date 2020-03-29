import React from "react";
import styled from "styled-components";
import {NavLink} from "react-router-dom";
import {colorsRoles} from "../01 Atoms/colors";
import {IcArrow} from "../01 Atoms/icons";
import {transitions} from "../01 Atoms/animations";
import {media} from "../01 Atoms/mediaqueries";

export const Content = styled.div`
display: flex;
align-items: center;
color: ${colorsRoles.White};
font-family: Roboto;
font-size: 2rem;

& svg {
margin-left: 16px;
transition: ${transitions.basic1};
}
`;


export const StyledLink = styled(NavLink)`
position: relative;
display: inline-block;
width: fit-content;
height: fit-content;
padding: 24px;
margin-top: 24px;
border: 1px solid ${colorsRoles.White};
border-radius: 8px;
    ${media.desktop`
    &:hover {
            & svg {
            margin-left: 32px;
            transition: ${transitions.basic1};
            }
        }
    `}

`;

const CTADefault = (props,pathName) => {
    return <>

        <StyledLink to={pathName}>
            <Content>
                {props.label}
                <IcArrow
                    IconSize={"24px"}
                    SizeBis={"auto"}
                    FillColor={colorsRoles.White}
                />
            </Content>
        </StyledLink>

    </>

};


export default CTADefault;