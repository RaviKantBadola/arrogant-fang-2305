
import reducer from "./reducer"


 import {applyMiddleware, combineReducers, legacy_createStore} from "redux"
 import{ reducer as product} from "../RaviComponent/Products-Redux/reducer"
 import thunk from "redux-thunk"
 const rootReducer = combineReducers({
     product,reducer
 })
 export const store = legacy_createStore(rootReducer,applyMiddleware(thunk))