import React from "react";
import {Link, useMatch} from 'react-router-dom';


const styles = {
   passive: { 
    textDecoration: 'none',
    backgroundColor: 'white',
    border: '1px solid black',
    padding: '12px',
    color: 'black',
    margin: '10px'},

    active: {
        textDecoration: 'none',
        backgroundColor: 'blue',
        border: 'none',
        padding: '12px',
        color: 'white',
        margin: '10px',
        opacity: 0.5
    }

}

function CastomLink ({to, children, ...props}){
       
    const match = useMatch(to)
    return(
        <Link
            style={match ? styles.active : styles.passive}
            {...props}
            to={to}
            
            >
            {children}
            
        </Link>
    )

}

export default CastomLink;