import React from "react";
import Span from "./Span";


function Message ({name}){
   
    return<h1  className="welcome"> welcome <Span name={name}></Span></h1>
}

export default Message;