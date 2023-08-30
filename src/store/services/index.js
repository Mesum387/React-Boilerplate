import {
    applyMiddleware,
    combineReducers,
    compose,
    configureStore,
    createSlice,
  } from "@reduxjs/toolkit";
  import thunk from "redux-thunk";
  import auth_slice from "./slices/auth_slice.js";
  
  let reducers = combineReducers({
    auth: auth_slice,
  });
  // const rootReducer = (state, action) => {
  //   if (action.type === TYPE_LOGOUT_USER) {
  //     state = undefined;
  //   }
  //   return reducers(state, action);
  // };
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  export const store = configureStore(
    { reducer: reducers },
    composeEnhancers(applyMiddleware(thunk))
  );
  export default store;