import React from "react";
import styled from "styled-components";
import {media} from "../../Atoms/mediaqueries";
import {transitions, UpDown} from "../../Atoms/animations";
import {colorsRoles} from "../../Atoms/colors";
import Parrot from "../../media/img/Parrot.png";

export const DisciplineNavItemText = styled.div`
float: right;
width: 48%;
height: 138px;
margin-top: 32px;
margin-right: 16px;
text-align: right;
color: ${props => props.isHoverActive ? "red" : "green"};
/*color: ${colorsRoles.White};*/
transition: ${transitions.basic2}

${media.mobileL `
margin-top: 40px;
margin-right: 24px;
`}
${media.tablet`
margin-right: 32px;
`}
${media.desktop`
margin-top:126px;
margin-left: 40px;
width: 100%;
float: unset;
`}

h1 {
position: relative;
font-family: PlayfairDisplay-Regular_Black;
font-size: 3rem;
text-align: right;
line-height: 32px;
${media.tablet`
font-size: 4rem;
`}
${media.desktop`
text-align: left;
font-size: 4rem;
line-height: 40px;
`}

&:after {
content: "";
position: absolute;
bottom: -8px;
right: 0;
width: 40px;
height: 2px;
background-color: ${colorsRoles.Brand01};
${media.tablet`
bottom: -16px;
`}
${media.desktop`
right:unset;
left:0;
`}
}

}

p {
margin-top: 26px;
font-family: Roboto-Regular;
font-size: 2rem;
font-style: italic;
${media.tablet`
margin-top: 34px;
font-size: 3rem;
`}
${media.desktop`
text-align: left;
display: none;
margin-left: 40px;
`}

}

`;
export const DisciplineNavItemLink = styled.a` 
    display: block;
    position: absolute;
    overflow: hidden;
    z-index: 1;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    transition: ${transitions.basic1}
img {
position: absolute;
z-index: 1;
width: 328px;
height: auto;
left: -80px;
top: 64px;
transition: ${transitions.easeOut}

${media.tablet`
width: 400px;
top: 0;
`}
${media.desktop`
width: 300px;
left:50%;
top: unset;
bottom: -80px;
transform: translate(-50%,-50%);
animation: ${UpDown} 5s linear infinite;
`}
${media.desktopL`
width: ${props => props.isHoverActive ? "520px" : "400px"};
bottom: -182px;
`}
}

////////////////////:hover effects

&:hover {
    cursor: cell;
    transition: ${transitions.basic1}
   img {
      transition: ${transitions.basic2}
      ${media.desktop`
        bottom: -520px;
      `}
    }

}
`;

export class DisciplineNavItemContent extends React.Component {
    render() {
        const {onMouseEnter, onMouseLeave} = this.props;
        return (
            <>
                <DisciplineNavItemLink href={"#"} isHoverActive={onMouseEnter} isHoverActive={onMouseLeave}>

                    <DisciplineNavItemText>

                        <h1>UI/UX <br/>Developper</h1>
                        <p>What language is lorem ipsum ?</p>

                    </DisciplineNavItemText>

                    <img src={Parrot} />

                </DisciplineNavItemLink>

            </>
        )
    }
}