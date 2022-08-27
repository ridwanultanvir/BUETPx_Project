import React from 'react';
import { Grid,Box, Paper, Typography } from '@mui/material';


import AdminHeader from './Static/AdminHeader';
import {Divider, Button} from '@mui/material';

import {useState, useEffect} from "react";
import Announce from './Announce';
const AdminPanel = () =>{

    return(
        <Grid container direction='column'>
            <Grid item>
                <AdminHeader/>
            </Grid>

            <Grid item>
                <Announce/>
            </Grid>

        </Grid>
    );

}

export default AdminPanel;