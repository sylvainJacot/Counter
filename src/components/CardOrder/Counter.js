import React, {useState, useEffect, useContext} from "react";
import styled from "styled-components";
import {MinusIcon, AddIcon} from "../atoms/Icons";
import {Colors} from "../atoms/Colors";
import PropTypes from 'prop-types';
import {CardOrderContext} from "../CarOrderContext"


const Counter = ({}) => {

    const [counting,setCounting] = useState(0);
    const [activeCount, setActiveCount] = useState(true);

    const Increase = () => {
        if (counting < 1) {
            setActiveCount(!activeCount)
        }
        setCounting(counting + 1);
    }

    const Decrease = () => {
        setCounting(counting - 1);
        if (counting < 1) {
            setCounting(0)
            setActiveCount(!activeCount)
        }
    }

    return <>
        <Box>
            <Button onClick={Decrease}>
                <StyledMinusIcon isIncreased={activeCount}/>
            </Button>
            <Counting value={counting}/>
            <Button onClick={Increase}>
                <StyledAddIcon/>
            </Button>
        </Box>
    </>

};

export default Counter;

export const StyledMinusIcon = styled(MinusIcon)`
& svg {
fill: red ;
}

`;
export const StyledAddIcon = styled(AddIcon)`

& svg {
fill: red ;
}
`;

export const Box = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
border: 1px solid ${Colors.LightGrey};
border-radius: 50px;
padding: 0px 4px;
width: 144px;
height: 48px;

`;

export const Button = styled.button`
width: 38px;
height: 38px;
border: none;
border-radius: 50%;
background-color: ${Colors.White};


&:active, &:focus {
border: 1px solid ${Colors.Orange};
}

& > svg {
width: 18px;
height: 18px;
}


`;

export const Counting = styled.input`
display: inline-block;
background-color: transparent;
width: 50px;
height: 50px;
margin: 0;
padding: 0;
font-size: 1.5rem;
font-weight: normal;
border: none;
outline: none;
text-align: center;
`;
