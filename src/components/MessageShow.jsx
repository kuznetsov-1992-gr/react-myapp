import React from "react";
import { useDispatch } from "react-redux";
import { DELETE_MESSAGE } from "../redux/reducers/actionsType";

const MessageShow = ({message, userName}) =>{
    const dispatch = useDispatch()

    const  deleteMessage = (id) =>{
        console.log('delete', id)

        dispatch({type: DELETE_MESSAGE, payload: id})
    }
    console.log(message)
    return(
        <div  key={message.id}>
            <h3 style={{color: 'green'}}>{userName.name}</h3>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <p style={{fontSize: '1.5rem'}}>{message.text}</p>
                <button style={{padding: '10px'}} onClick={()=>deleteMessage(message.id)}>x</button>
            </div>

        </div>
        
        
    )

}

export default MessageShow;