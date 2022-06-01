import { errorTodos, getTodos, setLoading } from "./actions"
import { ERROR_TODOS, GET_TODOS, LOADING_TODOS } from "./actionsType"



const initialState ={
    todos: [],
    loading: false,
    error: null
}


export const todosReducer = (state=initialState, action) => {
    switch(action.type){
        case LOADING_TODOS:
            return{
                ...state,
                loading: true
            }
        case GET_TODOS:
            
            return{
                ...state,
                todos:  action.payload,
                loading: false
            }
        
        case ERROR_TODOS:
            return{
               ...state, 
               error: action.payload,
               loading: false
            }
        default:
            return state
    }
}

export const loadTodos = () =>{
   
   
    return async dispatch =>{
        dispatch(setLoading())
       try{ 
            const response = await fetch('https://jsonplaceholder.typicode.com/todos?_start=0&_limit=100');
            const data = await response.json();
            dispatch(getTodos(data))
        }catch(err){
            dispatch(errorTodos(err))
        }
    }

}