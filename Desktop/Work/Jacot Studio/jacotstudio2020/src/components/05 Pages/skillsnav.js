import React from "react";
import styled from "styled-components";
import {media} from "../01 Atoms/mediaqueries";
import {transitions} from "../01 Atoms/animations";
import Skillsnavitem from "../04 Organisms/skillsnav/skillsnavitem";
import {Skills} from "../01 Atoms/Data";



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


export default SkillsNav;


