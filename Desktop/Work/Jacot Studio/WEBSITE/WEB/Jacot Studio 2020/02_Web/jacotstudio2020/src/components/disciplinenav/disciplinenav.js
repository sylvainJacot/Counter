import React from "react";
import styled from "styled-components";
import {DisciplineNavItem} from "./disciplinenavitem";
import {brackgrounds} from "../../Atoms/colors";

export const DisciplineNavWrapper = styled.nav`
`;

export const DisciplineNavList = styled.ul`

`;

export class DisciplineNav extends React.Component {
    render() {
        return (
            <>
                <DisciplineNavWrapper>

                    <DisciplineNavList>

                        <DisciplineNavItem />

                    </DisciplineNavList>

                </DisciplineNavWrapper>

            </>
        )
    }
}