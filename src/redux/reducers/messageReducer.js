import { ADD_MESSAGE, DELETE_MESSAGE } from "./actionsType";

const initialState = {
    messages: [
        {
            id: 1,
            chatId: 1,
            text: '1 message'
        },
        {
            id: 2,
            chatId: 2,
            text: '2 message'
        },
        {
            id: 3,
            chatId: 2,
            text: '3 message'
        },
        {
            id: 4,
            chatId: 1,
            text: '4 message'
        },
        {
            id: 5,
            chatId: 3,
            text: '5 message'
        },
    ]
}




export const messageReducer = (state = initialState, action) =>{
    switch(action.type){
        case ADD_MESSAGE:
            return {
                ...state,
                messages: [...state.messages, action.payload]
            }
        case DELETE_MESSAGE:
            return{
                ...state,
                messages: state.messages.filter(message => message.id !== action.payload)
            }    
        default: 
        return state;
    }
}