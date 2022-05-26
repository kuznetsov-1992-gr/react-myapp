import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { messageReducer } from "./reducers/messageReducer";


import { userReducer } from "./reducers/userReducer";

export const store = createStore(combineReducers({
    users: userReducer,
    messages: messageReducer
}),  composeWithDevTools())
