import React from "react";
import styled from "styled-components";
import Parrot from "../../media/img/Parrot.png";
import Fox from "../../media/img/Fox.png";
import Horse from "../../media/img/Horse.png";

export const DisciplineNav = styled.nav`

`;

export const DisciplineNavItem = styled.ul`

`;

export class HomePage extends React.Component {
    render() {
        return (
            <>
                <DisciplineNav>
                    <DisciplineNavItem>
                            <h1>UI/UX Developer</h1>
                            <p>What language is lorem ipsum ?</p>
                            <img src={Parrot}/>
                    </DisciplineNavItem>
                </DisciplineNav>

            </>
        )
    }
}