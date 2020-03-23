import React from "react";
import styled from "styled-components";
import {media} from "../../01 Atoms/mediaqueries";
import {transitions} from "../../01 Atoms/animations";
import {DisciplineNavItem} from "./disciplinenavitem";
import {navigationDiscipline} from "../../01 Atoms/Data";

import {connect} from "react-redux";

export const DisciplineNavWrapper = styled.nav`
margin-top: 64px;
${media.desktop`
margin-top: unset;
margin-right: 80px;
`}
`;

export const DisciplineNavList = styled.ul`
}
${media.desktop`
display: flex;
`}

&:hover > * {${media.desktop`
opacity: 0.4;
filter: blur(1px);
transition: ${transitions.basic2};
`}
  
 &:hover {${media.desktop`
opacity: 1;
filter: blur(0px);
transition: ${transitions.basic2};
`}
 
}

`;

const DisciplineNav = () => {
        return <>
                <DisciplineNavWrapper>
                    <DisciplineNavList>

                        {
                            navigationDiscipline.map((item, index) =>
                                <DisciplineNavItem
                                    key={index}
                                    title={item.title}
                                    quote={item.quote}
                                    colorBrand={item.color}
                                    bottomGradient={item.bottomGradient}
                                    altImg={item.altImg}
                                    label={item.labelCTA}
                                />
                            )
                        }

                    </DisciplineNavList>

                </DisciplineNavWrapper>

            </>

};

/* REDUX =============== INJECT THE STATE INTO THE COMPONENT
   connect () a 2 arguments -> MapStateToProps et MapDispatchToProps
 */

const MapStateToProps = ({menuNav : {currentStateMenuNav}}) => ({
    currentStateMenuNav
});

export default connect(MapStateToProps)(DisciplineNav);