import React from "react";
import styled from "styled-components";
import {media} from "../../Atoms/mediaqueries";
import {DisciplineNavItem} from "./disciplinenavitem";
import {brackgrounds} from "../../Atoms/colors";

export const DisciplineNavWrapper = styled.nav`
`;

export const DisciplineNavList = styled.ul`
${media.desktop`
display: flex;
`}
`;

export class DisciplineNav extends React.Component {
    render() {
        return (
            <>
                <DisciplineNavWrapper>

                    <DisciplineNavList>

                        <DisciplineNavItem />
                        <DisciplineNavItem />
                        <DisciplineNavItem />

                    </DisciplineNavList>

                </DisciplineNavWrapper>

            </>
        )
    }
}