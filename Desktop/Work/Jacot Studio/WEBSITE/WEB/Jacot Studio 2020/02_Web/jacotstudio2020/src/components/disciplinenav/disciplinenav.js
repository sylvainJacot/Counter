import React from "react";
import styled from "styled-components";
import {media} from "../../Atoms/mediaqueries";
import {DisciplineNavItem} from "./disciplinenavitem";

export const DisciplineNavWrapper = styled.nav`
`;

export const DisciplineNavList = styled.ul`
${media.desktop`
display: flex;
`}
`;

export class DisciplineNav extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            hover: false,
            clickEffect: false,
        };
    }
    handleClick = () => {
        alert("Clicked");
        this.setState({clickEffect: !this.state.clickEffect})
    }

    onMouseEnter = () => {
        console.log("Hekko");
        this.setState({hover: true})
    };
    onMouseLeave = () => {
        console.log("Leave");
        this.setState({hover: false})
    };


    render() {
        return (
            <>
                <DisciplineNavWrapper>

                    <DisciplineNavList>

                        <DisciplineNavItem onClick={this.handleClick}/>
                        <DisciplineNavItem onClick={this.handleClick}/>
                        <DisciplineNavItem onClick={this.handleClick}/>

                    </DisciplineNavList>

                </DisciplineNavWrapper>

            </>
        )
    }
}