import {keyframes} from "styled-components";
import {backgrounds} from "./colors";

export const transitions = {
    basic1 : "all 0.1s;",
    basic2 : "all 0.3s;",
};

export const UpDown = keyframes`
  0% {transform: translate(-50%,-50%)}
  50% {transform: translate(-50%,-48%)}
  100% {transform: translate(-50%,-50%)}
`;

export const Breathe = keyframes`
  0% {width: 60%; opacity: 70%}
  50% {width: 80%; opacity: 100%}
  100% {width: 60%; opacity: 70%}
`;