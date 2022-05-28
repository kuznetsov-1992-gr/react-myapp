import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { messageReducer } from "./reducers/messageReducer";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";
import  { createLogger } from "redux-logger";


import { userReducer } from "./reducers/userReducer";
import persistStore from "redux-persist/es/persistStore";

const time = store => next => action =>{
    const delay = action?.meta?.delay;
        if(!delay){
        return next(action)
    }

     
    const timeOut= setTimeout(()=>next(action),delay);

    return () => {
        clearTimeout(timeOut)
    }

    
}


const logger = createLogger(time())

// const time = store => next => action =>{
//     const delay = action?.meta?.delay;
//     if(!delay){
//         return next(action)
//     }

//     const timeOut= setTimeout(()=>next(action),delay);

//     return () => {
//         clearTimeout(timeOut)
//     }
// }





const persistConfig = {
    key: 'root',
    storage
}



const rootReducer = combineReducers({
    users: userReducer,
    messages: messageReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)


export const store = createStore(persistedReducer,  applyMiddleware(logger), )
// composeWithDevTools()
export const persist = persistStore(store)

