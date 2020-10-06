import React from "react";
import styled from "styled-components";
import Counter from "./Counter";


const ListItem = ({label,countingvalue}) => {
    return <>
        <Box>
        <LabelListItem>{label}</LabelListItem>
        <Counter countingvalue={countingvalue}/>
        </Box>
    </>

};

export default ListItem;

export const LabelListItem = styled.p`
font-size: 1.5rem;
font-weight: normal;
`;

export const Box = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
`;