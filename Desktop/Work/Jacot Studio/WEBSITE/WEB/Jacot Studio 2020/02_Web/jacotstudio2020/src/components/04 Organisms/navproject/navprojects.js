import React from "react";

import styled from "styled-components";
import {projectColors,colorsRoles} from "../../01 Atoms/colors";


import NavProjectItem from "../navproject/navprojectitem";
import {transitions} from "../../01 Atoms/animations";

export const Box = styled.div`
width: 100%;
height: 100%;
`;



export class NavProjects extends React.Component {
    constructor() {
        super();
        this.myRef = React.createRef();
        this.state = {
            bgColor: "",
            YPos: 0,
            refPos: 0,
        };
    }

    componentDidMount() {
        window.addEventListener('scroll',this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll',this.handleScroll);
    }


    handleScroll = () => {

        let lastScrollY = window.pageYOffset + 160;
        let ref = this.myRef.current;
        let refTop = ref.offsetTop;

        const Bg1 = colorsRoles.Brand01;
        const Bg2 = colorsRoles.Brand02;
        const Bg3 = colorsRoles.Brand03;
        const Bg4 = colorsRoles.Sketch;

        this.setState({YPos:lastScrollY});
        console.log(lastScrollY);
        console.log(refTop);



        if (lastScrollY >= 0)  {
            window.requestAnimationFrame(() => {
                this.setState({bgColor:"none"})
            });

        if (lastScrollY >= refTop) {
            window.requestAnimationFrame(() => {
                this.setState({bgColor:Bg1})
            });

        }
        if (lastScrollY >= refTop + 880) {
            window.requestAnimationFrame(() => {
                this.setState({bgColor:Bg2})
            });

        }
            if (lastScrollY >= refTop + 880 * 2) {
                window.requestAnimationFrame(() => {
                    this.setState({bgColor:Bg3})
                });

            }
            if (lastScrollY >= refTop + 880 * 3) {
                window.requestAnimationFrame(() => {
                    this.setState({bgColor:Bg4})
                });

            }


        }

    }

    render() {
        return (
            <>
                <Box  ref={this.myRef}>

                    <NavProjectItem BgColor={`${this.state.bgColor}`}/>
                    <NavProjectItem BgColor={`${this.state.bgColor}`}/>
                    <NavProjectItem BgColor={`${this.state.bgColor}`}/>
                    <NavProjectItem BgColor={`${this.state.bgColor}`}/>
                </Box>

            </>
        )
    }
}

