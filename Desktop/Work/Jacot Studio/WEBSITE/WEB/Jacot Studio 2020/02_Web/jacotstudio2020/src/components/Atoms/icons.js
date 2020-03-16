import React from "react";
import {colorsRoles} from "./colors";
import styled from "styled-components";
import {Link} from "react-router-dom";
import {transitions} from "./animations";
import {media} from "./mediaqueries";

export const SpanWrapper = styled.div``;
export const IcBurgerMenuWrapper = styled(Link)`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: unset;
border: unset;
cursor: pointer;
    ${media.desktop`
    width: 80px;
    height: 80px;
    `}

& ${SpanWrapper} {
display: flex;
${media.desktop`
margin-bottom: 8px;
`}
    & span {
    display: block;
    width: 3px;
    height: 24px;
    border-radius: 0 0 100px 0;
    background-color: ${colorsRoles.LightGrey};
    transition: ${transitions.basic2};
    ${media.desktop`
    margin-bottom: 8px;
    height: 16px;
    `}
    }
        & :nth-child(2) {
    margin: 0 8px;
    border-radius: 100px 0 0 0;
    }
        ${media.desktop`
        margin: 0 4px;
    `}
}
& p {
display: none;
${media.desktop`
display: inline;
font-family: Roboto-Bold;
font-size: 2rem;
color: ${colorsRoles.LightGrey};
letter-spacing: 4px;
text-align: center;
text-transform: uppercase;
`}
}
`;

export class LogoJacotStudio extends React.Component {
    render() {
        const {CircleColor,FillColor,Size} = this.props;
        return (
            <svg xmlns="http://www.w3.org/2000/svg" width={Size} height={Size} viewBox="0 0 80 80">
                <defs/>
                <g fill="none" fill-rule="evenodd">
                    <rect width={Size} height={Size}  x="19.9999583" y="20" fill={CircleColor} rx="20"/>
                    <path fill={FillColor}
                          d="M72.251625 53.6220278c-1.7625 4.1672222-4.2869444 7.9108333-7.5029167 11.1266666-3.2159722 3.2159723-6.9594444 5.7402778-11.1266666 7.5029167-4.3118056 1.82375-8.8948611 2.7483333-13.6220834 2.7483333-2.4186111 0-4.7991666-.2436111-7.1252777-.7243055 10.8606944-2.1545833 17.1252777-9.0233333 17.1252777-19.2756945v-12.5c0-4.1354166 3.3645834-7.5 7.5-7.5 1.3806945 0 2.5-1.1191666 2.5-2.5 0-1.3806944-1.1193055-2.5-2.5-2.5-6.8925 0-12.5 5.6075-12.5 12.5v12.5c0 4.9991667-1.8551389 8.8195834-5.5140277 11.3551389-3.4408334 2.3845834-8.45 3.6448611-14.4858334 3.6448611h-3.0429166c-2.4283334-1.4623611-4.6729167-3.2181944-6.7058334-5.25125-.085-.0848611-.1673611-.1716666-.2513889-.2572222V52.4999444c0-6.0354166-4.2997222-11.0855555-9.99680552-12.2480555-.00055556-.0840278-.00319445-.1677778-.00319445-.2519445 0-4.7270833.92472223-9.3102777 2.74847223-13.6219444 1.76263888-4.1672222 4.28680554-7.9108333 7.50291664-11.1268056 3.2158334-3.2158333 6.9594445-5.74027773 11.1266667-7.50277773 4.3116667-1.82375 8.8948611-2.74847223 13.6219444-2.74847223 2.4186111 0 4.7991667.24375 7.1252778.72444445C36.2648194 7.87883333 29.9999583 14.7475833 29.9999583 24.9999444v12.5c0 4.1355556-3.3644444 7.5-7.5 7.5-1.3806944 0-2.4998611 1.1193056-2.4998611 2.5 0 1.3808334 1.1193056 2.5 2.5 2.5 6.8925 0 12.4998611-5.6075 12.4998611-12.5v-12.5c0-4.9990277 1.8552778-8.8194444 5.5141667-11.355 3.4408333-2.3845833 8.45-3.64499996 14.4858333-3.64499996h3.0427778c2.4286111 1.46263886 4.6730556 3.21833336 6.7059722 5.25124996.085.085.1673611.1718056.25125.2573612v11.9913888c0 6.0355556 4.2998611 11.0855556 9.9970834 12.2480556.0005555.0841667.0029166.1679167.0029166.2519444 0 4.7272223-.9245833 9.3104167-2.7483333 13.6220834m5.2483333-18.6220834c-1.0454166 0-2.04125-.2155555-2.94625-.6036111-2.675-1.1472222-4.55375-3.80625-4.55375-6.8963889V13.5459167c-1.1102777-1.2581945-2.2983333-2.4458334-3.5568055-3.55569448-.4713889-.41555555-.9525-.82013889-1.4431945-1.21347222-1.7595833-1.41069444-3.6406944-2.67555556-5.6255555-3.77680556-5.7402778-3.18430555-12.3448611-5-19.3744445-5-22.0913889 0-39.99999997 17.90861116-39.99999997 39.99999996 0 1.6934723.1063889 3.3619445.31055556 5h2.18958333c1.04527778 0 2.04111111.2156945 2.94611111.6038889 2.675 1.1470834 4.55375 3.8061111 4.55375 6.8961111V66.4541111c1.11027777 1.2581945 2.29833337 2.4458333 3.55680557 3.5556945.4713889.4155555.9526389.8201388 1.4431944 1.2134722 1.7595834 1.4106944 3.6406945 2.6756944 5.6255556 3.7766666 5.7402778 3.1844445 12.345 5 19.3744444 5 22.0915278 0 40-17.9086111 40-40 0-1.6933333-.10625-3.3618055-.3104166-5h-2.1895834z"/>
                </g>
            </svg>
        )
    }
}

export class IcLinkedin extends React.Component {
    render() {
        const {Size,FillColor} = this.props;
        return (
            <svg width={Size} height={Size} viewBox="0 0 80 80">
                <g id="01-Base-/-Ic-/-IcLinkeding">
                    <path d="M17.89,25 L17.89,80 L-7.10542736e-15,80 L-7.10542736e-15,25 L17.89,25 Z M42.89,25 L42.89,35.515 C45.07,32.585 51.685,25 62.115,25 C63.335,25 64.375,25.135 65.325,25.325 C65.57,25.365 65.81,25.41 66.05,25.465 C66.1166667,25.4833333 66.1811111,25.5027778 66.2444444,25.5227778 L66.62,25.645 C74.305,27.65 80,34.575 80,42.885 L80,42.885 L80,80 L62.115,80 L62.115,80 L62.115,45 C56.41,31.17 42.89,50 42.89,50 L42.89,50 L42.89,80 L25,80 L25,25 L42.89,25 Z M8.75,0 C13.5824916,0 17.5,3.91750844 17.5,8.75 C17.5,13.5824916 13.5824916,17.5 8.75,17.5 C3.91750844,17.5 0,13.5824916 0,8.75 C0,3.91750844 3.91750844,0 8.75,0 Z" id="IcLinkeding" fill={FillColor}></path>
                </g>
            </svg>
        )
    }
}

export class IcInstagram extends React.Component {
    render() {
        const {Size,FillColor} = this.props;
        return (
            <svg width={Size} height={Size} viewBox="0 0 80 80">

                <g id="01-Base-/-Ic-/-IcInstagram">
                    <path d="M55,0 C68.805,0 80,11.195 80,25 L80,25 L80,55 C80,68.805 68.805,80 55,80 L55,80 L25,80 C11.195,80 0,68.805 0,55 L0,55 L0,25 C0,11.195 11.195,0 25,0 L25,0 Z M55,7.5 L25,7.5 C15.35,7.5 7.5,15.35 7.5,25 L7.5,25 L7.5,55 C7.5,64.65 15.35,72.5 25,72.5 L25,72.5 L55,72.5 C64.65,72.5 72.5,64.65 72.5,55 L72.5,55 L72.5,25 C72.5,15.35 64.65,7.5 55,7.5 L55,7.5 Z M40,20 C51.045,20 60,28.955 60,40 C60,51.045 51.045,60 40,60 C28.955,60 20,51.045 20,40 C20,28.955 28.955,20 40,20 Z M40,27.5 C33.11,27.5 27.5,33.105 27.5,40 C27.5,46.89 33.11,52.5 40,52.5 C46.89,52.5 52.5,46.89 52.5,40 C52.5,33.105 46.89,27.5 40,27.5 Z M61.5,15.835 C62.9718389,15.835 64.165,17.0281611 64.165,18.5 C64.165,19.9718389 62.9718389,21.165 61.5,21.165 C60.0281611,21.165 58.835,19.9718389 58.835,18.5 C58.835,17.0281611 60.0281611,15.835 61.5,15.835 Z" id="IcInstagram" fill={FillColor}></path>
                </g>
            </svg>
        )
    }
}

export class IcWhatsapp extends React.Component {
    render() {
        const {Size,FillColor} = this.props;
        return (
            <svg width={Size} height={Size} viewBox="0 0 80 80">
                <g id="01-Base-/-Ic-/-IcWhatsapp">
                    <path d="M40.01,0 L39.99,0 C17.935,0 0,17.94 0,40 C0,48.75 2.82,56.86 7.615,63.445 L2.63,78.305 L18.005,73.39 C24.33,77.58 31.875,80 40.01,80 C62.065,80 80,62.055 80,40 C80,17.945 62.065,0 40.01,0 Z M63.285,56.485 C62.32,59.21 58.49,61.47 55.435,62.13 C53.345,62.575 50.615,62.93 41.425,59.12 C29.67,54.25 22.1,42.305 21.51,41.53 C20.945,40.755 16.76,35.205 16.76,29.465 C16.76,23.725 19.675,20.93 20.85,19.73 C21.815,18.745 23.41,18.295 24.94,18.295 C25.435,18.295 25.88,18.32 26.28,18.34 C27.455,18.39 28.045,18.46 28.82,20.315 C29.785,22.64 32.135,28.38 32.415,28.97 C32.7,29.56 32.985,30.36 32.585,31.135 C32.21,31.935 31.88,32.29 31.29,32.97 C30.7,33.65 30.14,34.17 29.55,34.9 C29.01,35.535 28.4,36.215 29.08,37.39 C29.76,38.54 32.11,42.375 35.57,45.455 C40.035,49.43 43.655,50.7 44.95,51.24 C45.915,51.64 47.065,51.545 47.77,50.795 C48.665,49.83 49.77,48.23 50.895,46.655 C51.695,45.525 52.705,45.385 53.765,45.785 C54.845,46.16 60.56,48.985 61.735,49.57 C62.91,50.16 63.685,50.44 63.97,50.935 C64.25,51.43 64.25,53.755 63.285,56.485 Z" id="-IcWhatsapp" fill={FillColor}></path>
                </g>
            </svg>
        )
    }
}

export class IcBurgerMenu extends React.Component {
    render() {
        return (
            <IcBurgerMenuWrapper to="/About">
                <SpanWrapper>
                    <span></span>
                    <span></span>
                    <span></span>
                </SpanWrapper>
                <p>Menu</p>
            </IcBurgerMenuWrapper>
        )
    }
}


