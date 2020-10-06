import React from "react";
import styled from "styled-components";
import {Colors} from "../atoms/Colors";
import {Wave} from "../atoms/Decorative";
import {Margins} from "../atoms/Margins";


const CardOrderHeader = ({orderLabel,status}) => {
    return <>
        <CounterHeaderBox>
            <OrderLabel>
                <h2>{orderLabel}</h2>
                <Wave Fill={Colors.White}/>
            </OrderLabel>
            <Status status={status}><p>{status}</p></Status>
        </CounterHeaderBox>

    </>

};

export default CardOrderHeader;

export const CounterHeaderBox = styled.header`
display: flex;
height: 56px;
`;

export const OrderLabel = styled.div`
position: relative;
width: 200px;
display: flex;
align-items: center;

& > h2 {
padding-left: ${Margins.MarginsLeftRightCounter};
font-size: 1.5rem;
}

& > svg {
position: absolute;
right: -72px;
top: 0;
}

`;

export const Status = styled.div`
width: 200px;
background-color:  
        ${props =>
        props.status === "Active" ?
        Colors.Active
        : props.status === "Pending" ?
        Colors.Orange
        : Colors.LightGrey} ;
display: flex;
justify-content: flex-end;
align-items: center;

& > p {
width: 100%;
text-align: center;
padding-right: ${Margins.MarginsLeftRightCounter};
margin-left: 57px;
font-weight: bold;
}

`;