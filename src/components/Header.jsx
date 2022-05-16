import { blue } from "@mui/material/colors";
import React from "react";
import { NavLink } from "react-router-dom";


const styles = {
    backgroundColor: 'blue',
    textDecoration: 'none',
    padding: '10px',
    color: 'white',
   
    
}

function Header (){
    return(
        <div style={styles}>
            <NavLink style={styles} to='/'>Home</NavLink>
            <NavLink style={styles} to='/profile'>Profile</NavLink>
            
        </div>
    )
}

export default Header;