import { combineReducers } from "@reduxjs/toolkit";
import quoteReducer from './quoteReducer';
const reducers = combineReducers({
    quote: quoteReducer
});
export default reducers;