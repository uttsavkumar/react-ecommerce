import { Alert, Button, FormControl, Grid, InputLabel, Select, TextField, Typography } from '@mui/material'
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


const AdminManageSize = () => {
    const [size, setSize] = useState('')
    const [data, setData] = useState([])
    const [alert, setAlert] = useState(false)
    const [alertDel, setAlertDel] = useState(false)

    const handleForm = () => {
        const data = {
            size: size
        }
        axios.post('http://localhost:8000/api/size', data).then(() => {
            setAlert(!alert)
            setSize('')
        })
    }
    const handleDelete = (id) => {
        axios.delete(`http://localhost:8000/api/size/${id}`).then(() => {
        setAlertDel(!alertDel)
        })
    }
    useEffect(() => {
        axios.get('http://localhost:8000/api/size').then((res) => {
            setData(res.data)
        })
    }, [alert])
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
                                Size Inserted
                            </Alert>}
                            {alertDel && <Alert severity="error" onClose={(prev) => setAlertDel(!prev)} sx={{ width: 'auto' }}>
                                Size Deleted
                            </Alert>}
                            <TableContainer component={Paper} sx={{ border: 'none', boxShadow: 'none' }}>
                                <Table sx={{ width: '400', border: 'none', boxShadow: 'none' }} aria-label="simple table">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell sx={{ fontSize: 16, fontWeight: 700 }}>Size Id</TableCell>
                                            <TableCell sx={{ fontSize: 16, fontWeight: 700 }} align="right">Size</TableCell>
                                            <TableCell sx={{ fontSize: 16, fontWeight: 700 }} align="right">Action</TableCell>
                                        </TableRow>
                                    </TableHead>

                                    {data.map((item, key) => (
                                        <TableBody key={key} >
                                            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                                <TableCell component="th" scope="row" sx={{ fontSize: 16, fontWeight: 700 }}>{item.id}</TableCell>
                                                <TableCell align="right" sx={{ fontSize: 16, fontWeight: 500 }}>{item.size}</TableCell>
                                                <TableCell align="right">
                                                    <DeleteIcon sx={{ color: 'red', cursor: 'pointer' }} onClick={() => handleDelete(item.id)}/>
                                                    <EditIcon sx={{ color: '#8080f9', ml: 1 }} />
                                                </TableCell>
                                            </TableRow>
                                        </TableBody>
                                    ))}



                                </Table>
                            </TableContainer>
                        </Grid>
                        <Grid item xs={4}>
                            <TextField fullWidth id="outlined-basic" value={size} onChange={(e) => setSize(e.target.value)} label="Enter Size" variant="outlined" sx={{ mt: 1 }} />
                            <Button fullWidth variant="contained" onClick={handleForm} sx={{ mt: 1, borderRadius: '10px', backgroundColor: 'black', '&:hover': { backgroundColor: 'black', color: 'white' }, mr: 3 }} >
                                <Typography sx={{ p: 1.1 }} className={style.family} >Insert Size</Typography>
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}

export default AdminManageSize