import {createStore, applyMiddleware} from "redux";
/* Logger permet de faire des console.log de nos reducers*/
import {logger} from "redux-logger/src";

import rootReducer from "./root-reducer";

const middlewares = [logger];

export const store = createStore(() => rootReducer, applyMiddleware(...middlewares));

export default store;