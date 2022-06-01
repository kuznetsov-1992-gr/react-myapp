import { ADD_USER, DELETE_USER } from "./actionsType";

const initialState = {
    users : [
        {
            id: 1,
            name: 'Sam',
           
        },
        {
            id: 2,
            name: 'Pitrer',
           
        },
        {
            id: 3,
            name: 'Nik',
           
        },
        {
            id: 4,
            name: 'Julia',
          
        },
    ]
}


export const userReducer = (state = initialState, action) => {
    switch(action.type){
        case DELETE_USER:
            return{
                ...state,
                users: state.users.filter(user => user.id !== action.payload)

            };
        
        case ADD_USER:
            return {
                ...state,
                users: [...state.users, action.payload]
            }  
         

        default:
            return state;
    }
}