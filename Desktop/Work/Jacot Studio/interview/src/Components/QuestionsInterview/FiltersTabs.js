import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";
import {paths} from "../Atoms/QuestionsData";


const FiltersTabs = () => {
    return <>
        <Filters>
                {
                paths.map((item) => (
                    <StyledLink to={item.path}>{item.Name}</StyledLink>
                ))

                }
        </Filters>
    </>

};

export default FiltersTabs;

export const Filters = styled.ul`
width: 400px;
display: flex;
justify-content: center;
margin: 0 auto 24px auto;
`;

export const StyledLink = styled(Link)`
margin-left: 16px;

&:nth-child(1) {
margin-left: 0px;
}

`;

