import { dividerClasses } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { loadTodos } from "../redux/reducers/todosReducer";
import { loadingTodosSelector, todosSelector } from "../redux/selectors";



const ProbeApi = () => {
    const todos = useSelector(todosSelector);
    const loading = useSelector(loadingTodosSelector)
    const dispatch = useDispatch();

    useEffect(()=> {
        dispatch(loadTodos())
    },[])

    
    if(loading){
        return (<div>loading</div>)
    }
    return(<div >
        {todos.map(todo =>(<div key={todo.id}>{todo.title}</div>))}
    </div>)
}

export default ProbeApi;