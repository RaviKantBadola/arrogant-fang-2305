import {applyMiddleware, combineReducers, legacy_createStore} from "redux"
import{ reducer as product} from "./reducer"
import thunk from "redux-thunk"
const rootReducer = combineReducers({
    product
})
export const store = legacy_createStore(rootReducer,applyMiddleware(thunk))