import React from "react";
import PropTypes from 'prop-types'

function MessageInputField({addToMessage, value, toggleToValue }){
    


 
  


    return(
        <div className="input-field">
            <input value={value}  onChange={toggleToValue} type="text" />
            <button onClick={()=> addToMessage()}> to send</button>
        </div>
    )
}


MessageInputField.propTypes ={
    addToMessage: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
    toggleToValue: PropTypes.func.isRequired,

}

export default MessageInputField;