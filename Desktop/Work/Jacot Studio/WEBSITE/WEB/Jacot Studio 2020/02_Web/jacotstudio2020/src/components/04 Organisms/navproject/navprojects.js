import React from "react";

import styled from "styled-components";
import {projectColors,colorsRoles} from "../../01 Atoms/colors";

import Parallax from "react-rellax/lib/index";

import NavProjectItem from "../navproject/navprojectitem";
import {transitions} from "../../01 Atoms/animations";

export const Box = styled.div`
width: 100%;
height: 100%;
background-color: ${props => props.BgColor};
transition: ${transitions.basic2};
`;



export class NavProjects extends React.Component {
    constructor() {
        super();
        this.state = {
            bgColor: "red",
            YPos: 0,
            myRef: React.createRef(),
        };
    }

    ExampleRef = React.createRef();

    componentDidMount() {
        window.addEventListener('scroll',this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll',this.handleScroll);
    }


    handleScroll = () => {

        let lastScrollY = window.pageYOffset;


        this.setState({YPos:lastScrollY});
        console.log(lastScrollY);

        if (lastScrollY >= 0)  {
            window.requestAnimationFrame(() => {
                this.setState({bgColor:"none"})
            });

        if (lastScrollY >= 1000) {
            window.requestAnimationFrame(() => {
                this.setState({bgColor:"blue"})
            });

        }
        if (lastScrollY >= 2000) {
            window.requestAnimationFrame(() => {
                this.setState({bgColor:"yellow"})
            });

        }


        }

    }

    render() {
        return (
            <>
                <Box BgColor={`${this.state.bgColor}`} ref={this.ExampleRef}>

                    <NavProjectItem ref={this.myRef}/>
                    <NavProjectItem/>
                    <NavProjectItem/>
                </Box>

            </>
        )
    }
}

