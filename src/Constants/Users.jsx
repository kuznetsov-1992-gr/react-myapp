import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { DELETE_USER } from "../redux/reducers/actionsType";



const Users = ({users , id}) =>{

    const dispatch = useDispatch()

    const deleteUser = (id) => {
        dispatch({type: DELETE_USER, payload: id})
    }

    return(
        <div>
        <Link to={`/chat/${users.id}`} key={id}>
            
            {users.name}
        </Link>
        <div><button onClick={() => deleteUser(users.id)}>delite user</button></div>
        </div>
    )
} 

export default Users;