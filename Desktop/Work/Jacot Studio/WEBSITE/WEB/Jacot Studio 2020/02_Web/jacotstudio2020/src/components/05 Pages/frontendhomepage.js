import React from "react";
import styled from "styled-components";
import DisciplineHeader from "../04 Organisms/disciplinepage/disciplineheader";
import {colorsRoles} from "../01 Atoms/colors";
import {images} from "../01 Atoms/images";
import {media} from "../01 Atoms/mediaqueries";
import FavouriteMethodo from "../04 Organisms/disciplinepage/favouritemethodo";

export const Box = styled.div`
${media.desktop`
margin-right: 80px;
`
}
`;

export class FrontendHomePage extends React.Component {

    render() {
        return (
            <>
                <Box>
                    <DisciplineHeader
                        Title={"UI DESIGNER"}
                        MainColor={colorsRoles.Brand01}
                        Picture={images.Parrot}
                        Texte={"Forget Ebay and other forms of advertising for your property that costs you hard earned money. Why not do it all for free? Investment Assets Properties have ready several locations around the world to take your free listings for any luxury property you have."}
                    />
                    <FavouriteMethodo/>
                </Box>
                </>
        )
    }
}

