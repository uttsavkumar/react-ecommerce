import { Alert, Button, Grid, Typography } from '@mui/material'
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
import axios from 'axios'


const AdminCategory = () => {
    const [cat, setCat] = useState([])
    const [delAlert, setDelAlert] = useState(false)

    useEffect(() => {
        axios.get('http://localhost:8000/api/category').then((response) => {
            setCat(response.data)
            console.log(response.data)

        })
    }, [delAlert])

    const handleDelete = (id) => {
        axios.delete(`http://localhost:8000/api/category/${id}`).then((response) => {
            setDelAlert(prev => !prev)
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
                    <Grid item xs={12} >
                        <Button component={Link} to="/insert/category" variant="contained" sx={{ mt: 1, width: '165px', borderRadius: '35px', backgroundColor: 'black', '&:hover': { backgroundColor: 'black', color: 'white' }, float: 'right', mr: 3 }} >
                            <Typography sx={{ p: 1.4 }} className={style.family}>Add Category</Typography>
                        </Button>
                    </Grid>
                    <Grid item xs={10}>
                        {delAlert && <Alert severity="error" onClose={(prev) => setDelAlert(!prev)} sx={{ width: 750 }}>
                            Catgeory Deleted!
                        </Alert>}
                        <TableContainer component={Paper} sx={{ border: 'none', boxShadow: 'none' }}>
                            <Table sx={{ width: 750, border: 'none', boxShadow: 'none' }} aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell sx={{ fontSize: 16, fontWeight: 700 }}>Category Id</TableCell>
                                        <TableCell sx={{ fontSize: 16, fontWeight: 700 }} align="right">Parent Id</TableCell>
                                        <TableCell sx={{ fontSize: 16, fontWeight: 700 }} align="right">Category Title</TableCell>
                                        <TableCell sx={{ fontSize: 16, fontWeight: 700 }} align="right">Action</TableCell>
                                    </TableRow>
                                </TableHead>

                                {cat.map((item, key) => (
                                    <TableBody key={key}>
                                        <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                            <TableCell component="th" scope="row" sx={{ fontSize: 16, fontWeight: 700 }}>{item.id} </TableCell>
                                            <TableCell align="right" sx={{ fontSize: 16, fontWeight: 700 }}>{item.parent_id !== 0 ? item.parent.cat_title : "Parent Category"}</TableCell>
                                            <TableCell align="right" sx={{ fontSize: 16, fontWeight: 500 }}>{item.cat_title}</TableCell>
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

export default AdminCategory