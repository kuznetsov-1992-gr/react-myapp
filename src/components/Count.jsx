import React from "react";
import {useDispatch, useSelector} from 'react-redux'

function Count (){

    const value = useSelector(state => state.count)
    const dispatch = useDispatch();

    return(
        <div>
            <button onClick={()=> dispatch({type: 'DECREMENT'})}>-</button>
            {value}
            <button onClick={()=> dispatch({type: 'INCREMENT'})}>+</button>
        </div>
    )
}

export default Count;