import React from "react";
import styled from "styled-components";
import ListItem from "./ListItem";
import {Margins} from "../atoms/Margins";

const ListItems = (props) => {


    return <>
        <Box>
            {
                props.ListItemMapped.map((item, index) => (
                    <ListItem
                        key={index}
                        label={item.orderLabel}
                        countingvalue={item.value}
                    />
                ))
            }


        </Box>
    </>

};

export default ListItems;

export const Box = styled.div`
padding: 32px ${Margins.MarginsLeftRightCounter} 0px ${Margins.MarginsLeftRightCounter};
flex-grow: 1;
& > div {
margin-bottom: 32px;
}


`;