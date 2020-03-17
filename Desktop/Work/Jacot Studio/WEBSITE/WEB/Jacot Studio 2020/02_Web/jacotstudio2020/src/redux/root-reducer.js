import { combineReducers } from "redux";
import menuNavReducer from "./menuNav/menuNav-reducer";

export default combineReducers({
    menuNav : menuNavReducer
})