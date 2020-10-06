import React from "react";
import styled from "styled-components";
import {Colors} from "../atoms/Colors";
import CardOrderHeader from "./CardOrderHeader";
import ListItems from "./ListItems";
import CardOrderFooter from "./CardOrderFooter";

const CardOrder = ({orderLabel,status,ListItemMapped}) => {
    return <>
        <CounterBox>
           <CardOrderHeader orderLabel={orderLabel} status={status} />
           <ListItems ListItemMapped={ListItemMapped}/>
           <CardOrderFooter/>
        </CounterBox>
    </>

};

export default CardOrder;

export const CounterBox = styled.div`
width: 400px;
height: 320px;
background-color: ${Colors.White};
overflow: hidden;
border-radius: 16px;
display: flex;
flex-direction: column;
justify-content: space-between;
margin: 16px;
`;