import React from 'react';
import './WhatIveLearnCardItem.scss';
import {TipsProptypes} from "../../constants/what-i-have-learn-mock";


export const WhatIveLearnCardItem = ({tip}) => {
    return (
        <div className="carditem">
            <h2>{tip.title}</h2>
            <code>{tip.code}</code>
            <p>{tip.text}</p>
        </div>
    )
};

WhatIveLearnCardItem.propTypes = {
    tip: TipsProptypes
};