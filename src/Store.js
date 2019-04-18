import { createStore } from "redux";
import { reducers } from "./modules/reducers";
import thunk from "redux-thunk";
import { applyMiddleware } from "redux";

import { compose } from "redux";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ latency: 0 })
  : compose;

const middleWare = applyMiddleware(thunk);
export default createStore(reducers, composeEnhancers(middleWare));
