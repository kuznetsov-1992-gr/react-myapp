import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Outlet } from "react-router-dom";

import Header from "../components/Header";
import Users from "../Constants/Users";




function Loyout (){

    const dispatch = useDispatch()

   const [name, setNameUser] = useState('');

   const heandelChenge = (e) => {
       setNameUser(e.target.value)
   }

   const addUser = () => {
        const random = Math.round(Math.random()* 10000)
        let obj = {
            id: random,
            name: name,
           
           
        }

        dispatch({type: 'ADD_USER', payload: obj})
   }

    const users = useSelector(state => state.users.users)
    return(
        <>
            <Header/>
            
            <main style={{display: 'flex'}}>
                <div style={{display: 'block'}}>
                    <h2> User</h2>
                    {users.map(user => <Users key={user.id} users={user}/>)}
                    <input  value={name} onChange={heandelChenge} type="text" />
                    <button onClick={addUser} >abb user</button>
                </div>
                
                <Outlet/>
            </main>
            
        </>
    )
}

export default Loyout;
