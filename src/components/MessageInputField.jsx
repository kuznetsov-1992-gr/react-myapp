import React from "react";

function MessageInputField({addToMessage, value, toggleToValue }){
    


 
  


    return(
        <div className="input-field">
            <input value={value}  onChange={toggleToValue} type="text" />
            <button onClick={()=> addToMessage()}> to send</button>
        </div>
    )
}

export default MessageInputField;