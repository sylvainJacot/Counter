import React from "react";
import styled from "styled-components";
import {media} from "../../Atoms/mediaqueries";
import {TestDeLexport} from "./disciplinenavitem";

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

                        <TestDeLexport />
                        <TestDeLexport />
                        <TestDeLexport />

                    </DisciplineNavList>

                </DisciplineNavWrapper>

            </>
        )
    }
}