import React from "react";
import { Routes, Route } from "react-router-dom";


import Home from '../src/ListElement/Home';
import  Profile from '../src/ListElement/Profile'
import ErrorElement from "./ListElement/ErrorElement";
import Loyout from "./ListElement/Loyout";
import BotAnswer from "./components/BotAnswer";


import'../src/style/App.css';
import Chat from "./ListElement/Chat";




function App () {
  return (
    <Routes>
      <Route path="/" element={<Loyout/>}>
      <Route index path="/" element={<Home/>} />
      <Route path="profile" element={ <Profile/>} />
      <Route path="bot" element={<BotAnswer/>} />
      <Route path={`/chat/:idd`} element={<Chat/>}/>
      <Route path="*" element={<ErrorElement/>}/>

      </Route>
    </Routes> 
  )

}




export default App;