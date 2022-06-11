import { Card, CardActionArea, CardContent, Grid, Typography } from '@mui/material'
import React from 'react'
import Header from './Header'
import Side from './Side'
import style from '../Client.module.css'
const AdminHome = () => {
    return (
        <>
            <Header />
            <Grid container>
                <Grid item xs={4} sx={{ p: 10 }}>
                    <Side />
                </Grid>
                <Grid item xs={8}>
                    <Grid container>
                        <Grid item xs={4}>
                           
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}

export default AdminHome