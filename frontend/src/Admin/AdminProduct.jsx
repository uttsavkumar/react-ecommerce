import { Grid, Button, Typography, Alert } from '@mui/material'
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
import { Link } from 'react-router-dom'
import shoe1 from "../shoesimages/shoe1.png";
import axios from 'axios'

const AdminProduct = () => {
    const [product, setProduct] = useState([]);
    const [deleteAlert,setDeleteAlert] = useState(false)

    useEffect(() => {
        axios.get('http://localhost:8000/api/product').then((res) => {
            setProduct(res.data)
            console.log(res.data)
        })
    }, [deleteAlert])
    
    const handleDelete = (id) => {
        axios.delete(`http://localhost:8000/api/product/${id}`).then((res) => {
            setDeleteAlert((prev) => !prev)
        })
    }
    return (
        <>
            <Header />
            <Grid container spacing={0}>
                <Grid item xs={4} sx={{ p: 10 }}>
                    <Side />
                </Grid>
                <Grid item xs={8} >
                    <Grid item xs={12} >
                        <Button component={Link} to="/insert/product" variant="contained" sx={{ mt: 1, width: '165px', borderRadius: '35px', backgroundColor: 'black', '&:hover': { backgroundColor: 'black', color: 'white' }, float: 'right', mr: 3 }} >
                            <Typography sx={{ p: 1.4 }} className={style.family}>Add Product</Typography>
                        </Button>
                    </Grid>
                    <Grid item xs={12}>
                    {deleteAlert && <Alert severity="error" onClose={(prev) => setDeleteAlert(!prev)} sx={{ width: 750 }}>
                            Catgeory Deleted!
                        </Alert>}
                        <TableContainer component={Paper} sx={{ border: 'none', boxShadow: 'none' }}>
                            <Table sx={{ width: 900, border: 'none', boxShadow: 'none' }} aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell sx={{ fontSize: 16, fontWeight: 700 }}>Product Id</TableCell>
                                        <TableCell sx={{ fontSize: 16, fontWeight: 700 }} align="right">Product Title</TableCell>
                                        <TableCell sx={{ fontSize: 16, fontWeight: 700 }} align="right">Category Title</TableCell>
                                        <TableCell sx={{ fontSize: 16, fontWeight: 700 }} align="right">Parent Title</TableCell>
                                        <TableCell sx={{ fontSize: 16, fontWeight: 700 }} align="right">Image</TableCell>
                                        <TableCell sx={{ fontSize: 16, fontWeight: 700 }} align="right">Price</TableCell>
                                        <TableCell sx={{ fontSize: 16, fontWeight: 700 }} align="right">Action</TableCell>
                                    </TableRow>
                                </TableHead>

                                {product.map((item, key) => (
                                    <TableBody key={key}>
                                        <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                            <TableCell component="th" scope="row" sx={{ fontSize: 16, fontWeight: 700 }}>{item.id} </TableCell>
                                            <TableCell align="right" sx={{ fontSize: 16, fontWeight: 700 }}>{item.title}</TableCell>
                                            <TableCell align="right" sx={{ fontSize: 16, fontWeight: 500 }}>{item.category.cat_title}</TableCell>
                                            <TableCell align="right" sx={{ fontSize: 16, fontWeight: 500 }}>{item.category.parent_id}</TableCell>
                                            <TableCell align="right" >
                                                <img src={`http://localhost:8000/images/${item.image}`} height='70px' />
                                            </TableCell>
                                            <TableCell align="right" sx={{ fontSize: 16, fontWeight: 500 }}>Rs {item.price}</TableCell>
                                            <TableCell align="right">
                                                <DeleteIcon sx={{ color: 'red', cursor: 'pointer' }} onClick={() => handleDelete(item.id)} />
                                                <EditIcon sx={{ color: '#8080f9', ml: 1 }} />
                                            </TableCell>
                                        </TableRow>
                                    </TableBody>
                                ))}


                            </Table>
                        </TableContainer>
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}

export default AdminProduct