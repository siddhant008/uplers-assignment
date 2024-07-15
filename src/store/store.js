import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../reducers/authReducer";
import pusherReducer from "../reducers/pusherReducer";

const rootReducer = combineReducers({
	auth: authReducer,
  pusher: pusherReducer
});

const store = configureStore({ reducer: rootReducer });

export default store;
