import React from "react";
import arrayOfChats from "../Constants/arrayOfChats";
import { List} from '@mui/material/';
import CastomLink from "./CastomLink";



function ButtonChat(){

    return(
        <List style={{display: 'flex', flexDirection: 'column', width: '120px'}}>
            {arrayOfChats.map(chat => <CastomLink key={chat.id} to={chat.to}>{chat.nameChat}</CastomLink>)}
            
        </List>
    )
}

export default ButtonChat;