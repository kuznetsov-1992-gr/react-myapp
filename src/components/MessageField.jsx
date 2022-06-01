import React from "react";
import PropTypes from "prop-types";
import { Box } from "@mui/material";




function MessageField({messageList}){

    return( 
    <Box  sx={{ bgcolor: '#cfe8fc', height: '80vh' }}>
        {messageList.map(messageItem =>
             <div key={messageItem.id}>
                <h3>{messageItem.author}</h3>
                <p>{messageItem.text}</p> </div> )}
    </Box>)
}
MessageField.propTypes ={
    messageList: PropTypes.array.isRequired
}
export default MessageField;