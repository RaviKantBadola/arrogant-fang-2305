import {
    legacy_createStore,
    combineReducers,
    compose,
    applyMiddleware,
  } from "redux";
  
  import thunk from "redux-thunk";
import { productReducer } from "./redux/product.reducer";
  
 
  const rootReducer = combineReducers({
      Products: productReducer,
  });
  
  const composer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  
  export const store = legacy_createStore(
    rootReducer,
    composer(applyMiddleware(thunk))
  );
  