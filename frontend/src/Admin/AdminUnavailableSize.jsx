import { Alert, Button, FormControl, Grid, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Header from './Header'
import Side from './Side'
import style from '../Client.module.css'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import axios from 'axios'
const AdminUnavailableSize = () => {
    const[prd,setPrd] = useState([])
    const[size,setSize] = useState([])
    const[data,setData] = useState([])

    const[prd_id,setPrd_id] = useState('')
    const[size_id,setSize_id] = useState('')
    const[alert ,setAlert] = useState(false)

    useEffect(() => {
        axios.get('http://localhost:8000/api/size').then((res) => {
            setSize(res.data)
        })
        axios.get('http://localhost:8000/api/product').then((res) => {
            setPrd(res.data)
        })
    },[])

    useEffect(() => {
        axios.get('http://localhost:8000/api/sizeUnavailable').then((res) => {
            setData(res.data)
        })
    },[alert])

    const handleForm = () => {
        axios.post('http://localhost:8000/api/sizeUnavailable',{
            product_id:prd_id,
            size_id:size_id
        }).then(() => {
            console.log('inserted')
            setAlert(!alert)
        })
    }
    return (
        <>
            <Header />
            <Grid container>
                <Grid item xs={4} sx={{ p: 10 }}>
                    <Side />
                </Grid>
                <Grid item xs={8}>

                    <Grid container spacing={6}>
                        <Grid item xs={7}>
                                                      
                            {alert && <Alert severity="success" onClose={(prev) => setAlert(!prev)} sx={{ width: 'auto' }}>
                                Size Unavailable Inserted
                            </Alert>}
                            <TableContainer component={Paper} sx={{ border: 'none', boxShadow: 'none' }}>
                                <Table sx={{ width: '400', border: 'none', boxShadow: 'none' }} aria-label="simple table">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell sx={{ fontSize: 16, fontWeight: 700 }}>Size Unavailable Id</TableCell>
                                            <TableCell sx={{ fontSize: 16, fontWeight: 700 }} align="right">Product</TableCell>
                                            <TableCell sx={{ fontSize: 16, fontWeight: 700 }} align="right">Size id</TableCell>
                                            <TableCell sx={{ fontSize: 16, fontWeight: 700 }} align="right">Action</TableCell>
                                        </TableRow>
                                    </TableHead>

                                    {data.map((item,key) => (
                                        <TableBody key={key}>
                                        <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                            <TableCell component="th" scope="row" sx={{ fontSize: 16, fontWeight: 700 }}>{item.id}</TableCell>
                                            <TableCell align="right" sx={{ fontSize: 16, fontWeight: 500 }}>{item.sizeprd.title}</TableCell>
                                            <TableCell align="right" sx={{ fontSize: 16, fontWeight: 500 }}>{item.size.size}</TableCell>
                                            <TableCell align="right">
                                                <DeleteIcon sx={{ color: 'red', cursor: 'pointer' }} />
                                                <EditIcon sx={{ color: '#8080f9', ml: 1 }} />
                                            </TableCell>
                                        </TableRow>
                                    </TableBody>
                                    ))}


                                </Table>
                            </TableContainer>
                        </Grid>
                        <Grid item xs={4}>
                            <FormControl fullWidth sx={{ mt: 1 }}>
                                <InputLabel id="demo-simple-select-label">Select Product</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    label="Select Product"
                                    defaultValue=''
                                    name='category_id'
                                    value={prd_id}
                                    onChange={(e) => setPrd_id(e.target.value)}
                                >
                                   {prd.map((item,key) => (
                                     <MenuItem key={key} value={item.id}>{item.title}</MenuItem>
                                   ))}
                                  
                                </Select>
                            </FormControl>
                            <FormControl fullWidth sx={{ mt: 1 }}>
                                <InputLabel id="demo-simple-select-label">Select Size</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    label="Select Size"
                                    defaultValue=''
                                    value={size_id}
                                    onChange={(e) => setSize_id(e.target.value)}
                                >
                                    {size.map((item,key) => (
                                     <MenuItem key={key} value={item.id}>{item.size}</MenuItem>
                                   ))}
                                  
                                </Select>
                            </FormControl>
                            <Button onClick={handleForm} fullWidth variant="contained" sx={{ mt: 1, borderRadius: '10px', backgroundColor: 'black', '&:hover': { backgroundColor: 'black', color: 'white' }, mr: 3 }} >
                                <Typography sx={{ p: 1.1 }} className={style.family} >Insert Unavailable Size</Typography>
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}

export default AdminUnavailableSize