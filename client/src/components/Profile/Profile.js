import {React, useContext, useState} from "react"


import { Grid, Typography } from '@material-ui/core'
import { profileStyles } from "./styles";

import { AuthContext } from "../../context/Auth/AuthContext";

const Profile = () => {

    const classes = profileStyles();

    const { user } = useContext(AuthContext)

    console.log(user);


    return(
        <>
        <Grid
                container
                direction="column"
                justify="center"
                justifyContent="center"
                alignItems="center"
            >
            <Grid item  className={classes.space} /> 
        
            <Grid item > 
               PROFILE
            </Grid>
            
        </Grid>
        </>
    )
    
}



export default Profile;