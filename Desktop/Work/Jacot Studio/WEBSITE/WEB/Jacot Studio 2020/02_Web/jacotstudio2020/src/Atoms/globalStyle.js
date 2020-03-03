/* seen on https://dev.to/alaskaa/how-to-import-a-web-font-into-your-react-app-with-styled-components-4-1dni */

import {createGlobalStyle} from "styled-components";
import {media} from "./mediaqueries";

import PlayfairDisplayBlack from "../Atoms/fonts/Playfair_Display/PlayfairDisplay-Black.woff";
import PlayfairDisplayBlack2 from "../Atoms/fonts/Playfair_Display/PlayfairDisplay-Black.woff2";

import RobotoRegular from "../Atoms/fonts/Roboto/Roboto-Regular.woff";
import RobotoRegular2 from "../Atoms/fonts/Roboto/Roboto-Regular.woff";

export default createGlobalStyle`

    @font-face {
        font-family: 'Playfair Display';
        url(${PlayfairDisplayBlack}) format('woff'),
        url(${PlayfairDisplayBlack2}) format('woff2');
    }
    @font-face {
    font-family: 'Roboto';
    url(${RobotoRegular}) format('woff'),
    url(${RobotoRegular2}) format('woff2'),
    font-weight: normal;
    font-style: normal;
    }
    
    html {
    font-size: 8px;
    }
    
    body {
    background-color: black;
    ${media.desktop `
    background-color: red;
    `
    }

`;