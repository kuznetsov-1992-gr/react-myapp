import React from "react";




function MessageField({messageList}){

    return( 
    <div className="message__field">
        {messageList.map(messageItem =>
             <div key={messageItem.id}>
                <h3>{messageItem.author}</h3>
                <p>{messageItem.text}</p> </div> )}
    </div>)
}

export default MessageField;