import { Divider, List, ListItemButton, ListItemText } from '@mui/material'
import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Side = () => {
    const loc = useLocation().pathname
    const [side, setSide] = useState(false)
    return (
        <>
            <List component="nav" aria-label="secondary mailbox folder" sx={{ borderRadius: '10px' }}>

                <ListItemButton component={Link} to="/admin" sx={{ border: '1px solid #b6b6b6bd', color: 'black', textDecoration: 'none', '&:hover ': { backgroundColor: '#424242', color: 'white' }, ...(loc === '/admin' && { border: '1px solid black', backgroundColor: 'black', color: 'white' }) }}>
                    <ListItemText primary="Dashboard" />
                </ListItemButton>
                <ListItemButton component={Link} to="/category" sx={{ border: '1px solid #b6b6b6bd', color: 'black', textDecoration: 'none', '&:hover': { backgroundColor: '#424242', color: 'white' }, ...(loc === '/category' || loc === '/insert/category' ? { border: '1px solid black', backgroundColor: 'black', color: 'white' }:null)  }}>
                    <ListItemText primary="Category Info" />
                </ListItemButton>
                <ListItemButton component={Link} to="/product" sx={{ border: '1px solid #b6b6b6bd', color: 'black', textDecoration: 'none', '&:hover': { backgroundColor: '#424242', color: 'white' }, ...(loc === '/product' || loc === '/insert/product' ? { border: '1px solid black', backgroundColor: 'black', color: 'white' }: null) }}>
                    <ListItemText primary="Product Info" />
                </ListItemButton>
                <ListItemButton component={Link} to="/size" sx={{ border: '1px solid #b6b6b6bd', color: 'black', textDecoration: 'none', '&:hover': { backgroundColor: '#424242', color: 'white' }, ...(loc === '/size'  ? { border: '1px solid black', backgroundColor: 'black', color: 'white' }: null) }}>
                    <ListItemText primary="Manage Size" />
                </ListItemButton>
                <ListItemButton component={Link} to="/size/unavailable" sx={{ border: '1px solid #b6b6b6bd', color: 'black', textDecoration: 'none', '&:hover': { backgroundColor: '#424242', color: 'white' }, ...(loc === '/size/unavailable' || loc === '/insert/unavailable' ? { border: '1px solid black', backgroundColor: 'black', color: 'white' }: null) }}>
                    <ListItemText primary="Unavailable Size" />
                </ListItemButton>
                <ListItemButton component={Link} to="/image" sx={{ border: '1px solid #b6b6b6bd', color: 'black', textDecoration: 'none', '&:hover': { backgroundColor: '#424242', color: 'white' }, ...(loc === '/image'  ? { border: '1px solid black', backgroundColor: 'black', color: 'white' }: null) }}>
                    <ListItemText primary="Product Image" />
                </ListItemButton>


            </List>
        </>
    )
}

export default Side