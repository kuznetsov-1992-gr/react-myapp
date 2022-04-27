import React, {useState, useEffect} from "react";
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types'
import MessageField from './components/MessageField'
import MessageInputField from "./components/MessageInputField";

import'../src/style/App.css';



function App () {

  const [messageList, setMessageList] = useState([]);

  const [value, setValue] = useState('');


  const toggleToValue = (e) =>{
    setValue(e.target.value)
}

  function addToMessage(){
    setMessageList(
      [...messageList , {author: 'user', text: value, id: uuidv4()}]
    );
    setValue('')

  }

  
  useEffect(()=>{
    if(messageList.length >= 1 && messageList[messageList.length - 1].author === 'user' ){
      setTimeout(()=>{
        setMessageList([...messageList, {author: 'bot', text: 'welcome user', id: uuidv4()}])
      },1500)
      
    }
  
  },[messageList])
  

  

  
  
  return (
    <>
      < MessageField messageList={messageList}/>
      <MessageInputField
        addToMessage={addToMessage}
        messageList={messageList}
        value={value}
        toggleToValue={toggleToValue}
          />
    </>
  )

}




export default App;