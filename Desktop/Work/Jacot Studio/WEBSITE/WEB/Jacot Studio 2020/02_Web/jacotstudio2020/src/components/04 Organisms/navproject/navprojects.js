import React from "react";
import throttle from 'lodash.throttle';

import styled from "styled-components";
import {colorsRoles} from "../../01 Atoms/colors";


import NavProjectItem from "../navproject/navprojectitem";

export const Box = styled.div`
width: 100%;
height: 100%;
`;



export class NavProjects extends React.Component {
    constructor() {
        super();
        this.handleScroll = throttle(this.handleScroll, 1000);
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

        let lastScrollY = window.pageYOffset + 320;
        let lastScrollYDesktop = lastScrollY + 160;
        let ref = this.myRef.current;
        let refTop = ref.offsetTop;

        let MediaQueryDesktop = window.matchMedia("(max-width: 1024px)")

        const NavProjectItemHeightDesktop = 880;
        const NavProjectItemHeightMobile = 640;

        const Bg1 = colorsRoles.Brand01;
        const Bg2 = colorsRoles.Brand02;
        const Bg3 = colorsRoles.Brand03;
        const Bg4 = colorsRoles.Sketch;

        this.setState({YPos:lastScrollY});
        console.log(lastScrollY);
        console.log(refTop);


        if (MediaQueryDesktop.matches) {

        if (lastScrollY >= 0) {
            window.requestAnimationFrame(() => {
                this.setState({bgColor: "none"})
            });
        }

        if (lastScrollY >= refTop) {
            window.requestAnimationFrame(() => {
                this.setState({bgColor:Bg1})
            });

        }
        if (lastScrollY >= refTop + NavProjectItemHeightMobile) {
            window.requestAnimationFrame(() => {
                this.setState({bgColor:Bg2})
            });

        }
            if (lastScrollY >= refTop + NavProjectItemHeightMobile * 2) {
                window.requestAnimationFrame(() => {
                    this.setState({bgColor:Bg3})
                });

            }
            if (lastScrollY >= refTop + NavProjectItemHeightMobile * 3) {
                window.requestAnimationFrame(() => {
                    this.setState({bgColor:Bg4})
                });

            }


        }
        else {
            if (lastScrollYDesktop >= 0) {
                window.requestAnimationFrame(() => {
                    this.setState({bgColor: "none"})
                });
            }

            if (lastScrollYDesktop >= refTop) {
                window.requestAnimationFrame(() => {
                    this.setState({bgColor:Bg1})
                });

            }
            if (lastScrollYDesktop >= refTop + NavProjectItemHeightDesktop) {
                window.requestAnimationFrame(() => {
                    this.setState({bgColor:Bg2})
                });

            }
            if (lastScrollYDesktop >= refTop + NavProjectItemHeightDesktop * 2) {
                window.requestAnimationFrame(() => {
                    this.setState({bgColor:Bg3})
                });

            }
            if (lastScrollYDesktop >= refTop + NavProjectItemHeightDesktop * 3) {
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

