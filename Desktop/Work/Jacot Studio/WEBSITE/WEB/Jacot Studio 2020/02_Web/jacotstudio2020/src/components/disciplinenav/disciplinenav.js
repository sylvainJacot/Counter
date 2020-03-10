import React from "react";
import styled from "styled-components";
import {media} from "../../Atoms/mediaqueries";
import {transitions} from "../../Atoms/animations";
import {DisciplineNavItem} from "./disciplinenavitem";

export const DisciplineNavWrapper = styled.nav`
width: 100%;
height: 100%;
`;

export const DisciplineNavList = styled.ul`
}
${media.desktop`
display: flex;
`}

&:hover > * {${media.desktop`
opacity: 0.4;
filter: blur(1px);
transition: ${transitions.basic2}
`}
  
 &:hover {${media.desktop`
opacity: 1;
filter: blur(0px);
transition: ${transitions.basic2}
`}
 
}

`;

export class DisciplineNav extends React.Component {

    render() {
        return (
            <>
                <DisciplineNavWrapper>

                    <DisciplineNavList>

                        <DisciplineNavItem/>
                        <DisciplineNavItem/>
                        <DisciplineNavItem/>

                    </DisciplineNavList>

                </DisciplineNavWrapper>

            </>
        )
    }
}