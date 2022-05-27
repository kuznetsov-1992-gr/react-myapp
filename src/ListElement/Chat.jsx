import React from "react";
import { Box, TextField, Button } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import {useState} from 'react'
import { v4 as uuidv4 } from 'uuid';

import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import MessageShow from "../components/MessageShow";
import { ADD_MESSAGE } from "../redux/reducers/actionsType";




const  Chat = () => {
    const {idd} = useParams()
    const dispatch = useDispatch()

    const [value, setValue] = useState('')
    
    
    const messageState = useSelector(state => state.messages.messages);
    const chatsState = useSelector(state => state.users.users);
    
    const [userName] = chatsState.filter(chat => chat.id === +idd);
    

    const messagesChat = messageState.filter(messages => {
        if(!idd) return true;

        return messages.chatId === +idd
    } )

    const addMessage = (idd)=>{
        console.log(+idd)
    let obj = {
        id: uuidv4(),
        chatId: +idd,
        text: value
        
    }
        dispatch({type: ADD_MESSAGE, payload: obj, })
    }
    
    // console.log(chatMessage.message)

    

    return(
        <div style={{display: 'block'}}>
            <Box sx={{ bgcolor: '#cfe8fc', height: '80vh', width: '800px' }}>
            {/* {console.log(messageList)}
            <MessageField messageList={messageList}/> */}
            <div>{messagesChat.map(message => <MessageShow userName={userName} key={message.id} message={message}/>)}</div>
            
            </Box>
            <TextField value={value} onChange={(e)=>setValue(e.target.value)} autoFocus={true} fullWidth={true} id="standard-basic" label="Standard" variant="standard" />
            <Button onClick={() =>addMessage(+idd)} variant="contained" endIcon={<SendIcon />}>
                Send
            </Button>
        </div>
    )

}

export default Chat;