import { configureStore,combineReducers } from "@reduxjs/toolkit";
import userReducer from "./userSlice";

const reducer = combineReducers({
    userReducer
})

export const store = configureStore({
    reducer
})