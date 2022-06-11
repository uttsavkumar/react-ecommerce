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
    const loc = useLocation().pathname
    
    return (
        <>
        <Container maxWidth="xl">           
        <AppBar position="static" sx={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1.5 }} component={Link} to="/">
                        <img src={nike} alt="" height="85px" />
                    </Typography>
                    <Box sx={{ mt: '-1px', flexGrow: 1,ml:-4 }}>
                        <Button className={style.btn} variant="text" component={Link} to="/men/shoes" sx={{  color: 'black', ':hover': { borderBottom: '2px solid black',color:'black'},...(loc === '/men/shoes' && {  borderBottom: '2px solid black' })  }}>Men</Button>
                        <Button className={style.btn} variant="text" component={Link} to="/women/shoes" sx={{ color: 'black', ':hover': { borderBottom: '2px solid black',color:'black' },...(loc === '/women/shoes' && {  borderBottom: '2px solid black' }) }}>Women</Button>
                        <Button className={style.btn} variant="text" component={Link} to="/kid/shoes" sx={{ color: 'black', ':hover': { borderBottom: '2px solid black',color:'black' },...(loc === '/kid/shoes' && {  borderBottom: '2px solid black' }) }}>Kids</Button>
                        <Button className={style.btn}  sx={{ color: 'black', ':hover': { borderBottom: '2px solid black' } }} >Explore</Button>
                    </Box>
                    <Box>
                        <FormControl sx={{ m: 1, width: '25ch' }} variant="text">
                            <Input
                                variant="text"
                                sx={{ height: '37px',borderRadius:'25px', backgroundColor: '#e7e6e6c2', p: 0, ':hover': { backgroundColor: '#d9d7d7' } }}
                                className={style.input}
                                id="outlined-adornment-password"
                                placeholder='Search'
                                disableUnderline
                                startAdornment={
                                    <InputAdornment position="start" sx={{ ml: 2 }}>
                                        <SearchIcon sx={{ color: 'black' }} />
                                    </InputAdornment>
                                }

                            />
                        </FormControl>
                        <IconButton className={style.cart}  component={Link} to="/cart" sx={{ color: 'black', ':hover': { borderBottom: '2px solid black',color:'black' },...(loc === '/cart' && {  borderBottom: '2px solid black',  borderRadius: '0px' }) }} >
                            <ShoppingCartOutlinedIcon />
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>
        </Container>
        </>
    )
}

export default Header