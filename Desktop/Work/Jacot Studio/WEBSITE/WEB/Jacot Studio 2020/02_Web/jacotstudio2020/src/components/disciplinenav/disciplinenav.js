import React from "react";
import styled from "styled-components";
import {media} from "../../Atoms/mediaqueries";
import {transitions} from "../../Atoms/animations";
import {DisciplineNavItem} from "./disciplinenavitem";
import {navigationDiscipline} from "../../Atoms/Data";

export const DisciplineNavWrapper = styled.nav`
height: 100%;
margin-right: 80px;
/*margin-right: ${props => props.headerNavWidth}px; */
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
    constructor(props) {
        super(props);
    }

    render() {
        const {headerNavWidth} = this.props;
        return (
            <>
                <DisciplineNavWrapper headerNavWidth={headerNavWidth}>

                    <DisciplineNavList>

                        {
                            navigationDiscipline.map((Item) =>
                                <DisciplineNavItem
                                    Title1={Item.Title1}
                                    Title2={Item.Title2}
                                    Quote={Item.Quote}
                                    ColorBrand={Item.Color}
                                    BottomGradient={Item.BottomGradient}
                                />
                            )
                        }

                    </DisciplineNavList>

                </DisciplineNavWrapper>

            </>
        )
    }
}

