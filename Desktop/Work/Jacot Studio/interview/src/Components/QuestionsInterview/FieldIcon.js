import React from "react";
import styled, {css} from "styled-components";
import {Colors} from "../Atoms/Colors";


const FieldIcon = ({FieldLabel, Color}) => {
    return <>
        <Wrapper Color={Color}>
            {FieldLabel}
        </Wrapper>
    </>

};

export default FieldIcon;

export const Wrapper = styled.div`
padding: 4px 8px;
background-color: ${props => props.Color}30;
color: ${Colors.Black}50;
border-radius: 8px;
border: 1px solid ${props => props.Color};
font-size: 10px;
font-weight: 600;

`;