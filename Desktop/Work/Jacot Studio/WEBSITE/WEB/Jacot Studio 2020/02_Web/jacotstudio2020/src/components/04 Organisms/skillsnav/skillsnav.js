import React from "react";
import styled from "styled-components";
import {Switch,Route,useRouteMatch} from "react-router-dom";
import {media} from "../../01 Atoms/mediaqueries";
import {transitions} from "../../01 Atoms/animations";
import Skillsnavitem from "./skillsnavitem";
import Skills from "../../01 Atoms/Data";
import colorsRoles from "../../01 Atoms/colors";
import {connect} from "react-redux";
import SkillProjects from "../../05 Pages/skillprojects";
import Square from "../../../square";

export const SkillsNavWrapper = styled.nav`
margin-top: 64px;
${media.desktop`
margin-top: unset;
margin-right: 80px;
`}
`;

export const SkillsNavList = styled.ul`
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

const SkillsNav = () => {
    // let { path } = useRouteMatch();
        return <>
                <SkillsNavWrapper>
                    <SkillsNavList>

                        {
                            Skills.map((skillItem, index) =>

                                <Skillsnavitem
                                    key={index}
                                    title={skillItem.titleNav}
                                    quote={skillItem.quote}
                                    colorBrand={skillItem.mainColor}
                                    bottomGradient={skillItem.mainGradient}
                                    altImg={skillItem.altMainImg}
                                    label={skillItem.labelCTA}
                                    src={skillItem.srcMainImg}
                                    pathName={skillItem.pathName}
                                />

                            )
                        }

                    </SkillsNavList>

                </SkillsNavWrapper>

            </>


};

/* REDUX =============== INJECT THE STATE INTO THE COMPONENT
   connect () a 2 arguments -> MapStateToProps et MapDispatchToProps
 */

const MapStateToProps = ({menuNav : {currentStateMenuNav}}) => ({
    currentStateMenuNav
});

export default connect(MapStateToProps)(SkillsNav);



/*<Switch>
    <Route path={"/uiux-designer"}>
        <Square
            bgColor={"red"}
            nomcarre={"UI/UX"}
        />
    </Route>

    <Route path={"/uiux-designer"}>
        <Square
            bgColor={"blue"}
            nomcarre={"Frontend"}
        />
    </Route>

    <Route path={"/uiux-designer"}>
        <Square
            bgColor={"purple"}
            nomcarre={"PhotoRetouch"}
        />
    </Route>
</Switch>*/