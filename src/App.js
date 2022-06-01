import React, {useState, useEffect} from "react";
import { v4 as uuidv4 } from 'uuid';
import {Container, Box, Button, Typography, List, ListItem, ListItemText, IconButton} from '@mui/material/';
import CachedIcon from '@mui/icons-material/Cached';
import CommentIcon from '@mui/icons-material/Comment';

import MessageField from './components/MessageField'
import MessageInputField from "./components/MessageInputField";
import bot from './Constants/bot_value'

import'../src/style/App.css';



function App () {

  const [messageList, setMessageList] = useState([]);

  const [value, setValue] = useState('');

  const [greatPeople, setGreatPeople] = useState({author: "bot", text: 'Welcome',label: 'bot', id: uuidv4()});

  const [nameUser, setNameUser] = useState('user')
  
  


  const toggleToValue = (e) =>{
    setValue(e.target.value);
}

  function addToMessage(){

  
    setMessageList(
      [...messageList , {author: nameUser, text: value, label: 'user', id: uuidv4()}]
    );
    setValue('');

    
    
  }

  function genitateValue(bot){
   
    

    let bot_key = Object.keys(bot)[parseInt(Math.random()* Object.keys(bot).length)];
    console.log(bot_key)
    if(bot_key === 'answer-bot'){
      bot_key = Object.keys(bot)[parseInt(Math.random()* Object.keys(bot).length)];
       console.log('duble:', bot_key )
    }
    
    let bot_value = bot[bot_key][parseInt(Math.random() * bot[bot_key].length)];

  setGreatPeople({author: bot_key, text: bot_value, id: uuidv4()})
  

 
  // console.log(bot_value)
  // console.log(greatPeople)
  }





  useEffect(()=>{

    if(messageList.length >= 1 && messageList[messageList.length - 1].label === 'user' ){
      
      genitateValue(bot)

      setTimeout(()=>{
        setMessageList([...messageList, greatPeople])
      },1500);
      
    }
  
  },[messageList]);

  const ChengeName = () =>{
    let nm = prompt('Как вас зовут');

    setNameUser(nm);


    console.log(nameUser)
  }
  
  
  // let bot_key =Object.keys(bot)[parseInt(Math.random()* Object.keys(bot).length)]
  // let bot_value = bot[bot_key][parseInt(Math.random() * bot[bot_key].length)];
  

  // console.log(bot_key)
  // console.log(bot_value)

  
  
  return (
    <Container sx={{display: 'flex'}}>
      <List>
        
        {Object.keys(bot).map( item => (
            <ListItem
            key={uuidv4()}
            disableGutters
            secondaryAction={
              <IconButton aria-label="comment">
                <CommentIcon />
              </IconButton>
            }
          >
            <ListItemText primary={item} />
          </ListItem>
        ))}
      </List>

      <Container sx={{width: '800px', margin: 0}}>
        < Box sx={{display: 'flex', justifyContent: 'space-between '}}>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
          <Button sx={{display: "flex", alignItems: 'center'}}  onClick={ChengeName}>
            <Typography gutterBottom variant="p" component="div" sx={{marginRight: '10px'}}>
              chenge name
            </Typography>
            < CachedIcon/>
          </Button>
        </Box>
        < MessageField messageList={messageList}/>
        <MessageInputField
          addToMessage={addToMessage}
          messageList={messageList}
          value={value}
          toggleToValue={toggleToValue}
            />
      </Container>      
    </Container>
  )

}




export default App;