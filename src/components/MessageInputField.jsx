import React from "react";
import PropTypes from 'prop-types'
import {TextField, Button, Box, Container} from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import Grid from '@mui/material/Grid';
import { display } from "@mui/system";

function MessageInputField({addToMessage, value, toggleToValue }){
    


 
  


    return(
        <Box>
            <Grid container spacing={0}>
                <Grid item xs={10}>
                    <TextField id="standard-basic" label="Standard" variant="standard" value={value}  onChange={toggleToValue} autoFocus={true} fullWidth={true}/>
                </Grid>
                <Grid item sx={4}> 
                    <Button sx={{ height: '100%'}}  variant="contained" onClick={()=> addToMessage()} endIcon={<SendIcon />} > to Send </Button>
                </Grid>   

                {/* <input value={value}  onChange={toggleToValue} type="text" /> */}
                {/* <button onClick={()=> addToMessage()}> to send</button> */}
            </Grid>
        </Box>
    )
}


MessageInputField.propTypes ={
    addToMessage: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
    toggleToValue: PropTypes.func.isRequired,

}

export default MessageInputField;