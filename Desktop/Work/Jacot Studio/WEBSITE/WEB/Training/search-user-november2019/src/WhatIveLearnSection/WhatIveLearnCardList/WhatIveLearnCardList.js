import React, {Component} from 'react';
import {WhatIveLearnCardItem} from "../WhatIveLearnCardItem/WhatIveLearnCardItem";
import {TipsProptypes} from "../../constants/what-i-have-learn-mock";

class WhatIveLearnCardList extends Component {
    static propTypes ={
        tips: TipsProptypes
    };

    render() {
        return this.props.tips.map(tip =>(
                <WhatIveLearnCardItem tip={tip} key={tip.id}/>
                )
            )
    }
}
export default WhatIveLearnCardList;