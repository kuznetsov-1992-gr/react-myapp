import React from "react";
import { Outlet } from "react-router-dom";
import ButtonChat from "../components/ButtonChat";
import Header from "../components/Header";

function Loyout (){
    return(
        <>
            <Header/>
            
            <main style={{display: 'flex'}}>
                <ButtonChat/>
                <Outlet/>
            </main>
            
        </>
    )
}

export default Loyout;
