import { createStore, applyMiddleware, compose } from "redux";
import logger from "redux-logger";
import { createLogger } from 'redux-logger';
import rootReducer from "./root-reducer";

const middleWare = [logger];

const loggerMiddleware = createLogger({
    predicate: () => process.env.NODE_ENV === 'development',
});
middleWare.push(loggerMiddleware)

const store = createStore(
    rootReducer,
    compose (applyMiddleware(logger)
    )
);

export default store;
