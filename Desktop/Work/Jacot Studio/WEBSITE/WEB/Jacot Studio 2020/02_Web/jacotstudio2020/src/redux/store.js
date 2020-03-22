import { createStore, applyMiddleware, compose } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { createLogger } from 'redux-logger';
import rootReducer from "./root-reducer";

const middleWare = [logger, thunk];

const loggerMiddleware = createLogger({
    predicate: () => process.env.NODE_ENV === 'development',
});
middleWare.push(loggerMiddleware)

const store = createStore(
    rootReducer,
    compose (applyMiddleware(...middleWare)
    )
);

export default store;
