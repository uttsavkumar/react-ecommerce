import React, { useState } from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import InputAdornment from '@mui/material/InputAdornment';
import { Input,Container } from '@mui/material';
import style from '../Client.module.css'
import IconButton from '@mui/material/IconButton';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchIcon from '@mui/icons-material/Search';
import nike from '../nike.png'
import { Link, useLocation } from 'react-router-dom'

const Header = () => {
    
    
    return (
        <>
        <Container maxWidth="xl">           
        <AppBar position="static" sx={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1.5,display:'flex',flexDirection:'row' }} component={Link} to="/admin">
                        <img src={nike} alt="" height="85px" />
                        <Typography className={style.family} sx={{ mt:3.5,fontSize:20,color:'black',textDecoration:'underline' }}>
                        Admin | Panel
                    </Typography>
                    </Typography>
                   
                    <Box>
                        <FormControl sx={{ m: 1, width: '40ch' }} variant="text">
                            <Input
                                variant="text"
                                sx={{ height: '37px',borderRadius:'25px', backgroundColor: '#e7e6e678', p: 0, ':hover': { backgroundColor: '#e7e6e6cf' } }}
                                className={style.input}
                                id="outlined-adornment-password"
                                placeholder='Search Product'
                                disableUnderline
                                startAdornment={
                                    <InputAdornment position="start" sx={{ ml: 2 }}>
                                        <SearchIcon sx={{ color: 'black' }} />
                                    </InputAdornment>
                                }

                            />
                        </FormControl>
                     
                    </Box>
                </Toolbar>
            </AppBar>
        </Container>
        </>
    )
}

export default Header