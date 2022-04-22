import { combineReducers} from "redux";
import {createStore} from "redux";
import { productReducer,filterProductReducer } from "./reducer";

const rootReducer = combineReducers({ productReducer,filterProductReducer })

export const store = createStore(rootReducer)
