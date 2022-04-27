import React, {useState, useEffect} from "react";
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types'
import MessageField from './components/MessageField'
import MessageInputField from "./components/MessageInputField";
import bot from './Constants/bot_value'

import'../src/style/App.css';



function App () {

  const [messageList, setMessageList] = useState([]);

  const [value, setValue] = useState('');

  const [greatPeople, setGreatPeople] = useState({author: "bot", text: 'Welcome', id: uuidv4()});
  
  


  const toggleToValue = (e) =>{
    setValue(e.target.value);
}

  function addToMessage(){

  
    setMessageList(
      [...messageList , {author: 'user', text: value, id: uuidv4()}]
    );
    setValue('');

    
    
  }

  function genitateValue(bot){
    let bot_key =Object.keys(bot)[parseInt(Math.random()* Object.keys(bot).length)]
    
    let bot_value = bot[bot_key][parseInt(Math.random() * bot[bot_key].length)];

  setGreatPeople({author: bot_key, text: bot_value, id: uuidv4()})
  

  // console.log(bot_key)
  // console.log(bot_value)
  console.log(greatPeople)
  }





  useEffect(()=>{

    if(messageList.length >= 1 && messageList[messageList.length - 1].author === 'user' ){
      
      genitateValue(bot)

      setTimeout(()=>{
        setMessageList([...messageList, greatPeople])
      },1500);
      
    }
  
  },[messageList]);

  
 
  
  // let bot_key =Object.keys(bot)[parseInt(Math.random()* Object.keys(bot).length)]
  // let bot_value = bot[bot_key][parseInt(Math.random() * bot[bot_key].length)];
  

  // console.log(bot_key)
  // console.log(bot_value)

  
  
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