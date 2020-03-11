import React from "react";
import {DisciplineNav} from "../disciplinenav/disciplinenav";


export class HomePage extends React.Component {
    render() {
        const {headerNavWidth} = this.props;
        return (
            <>
            <DisciplineNav width={headerNavWidth}/>
            </>
        )
    }
}