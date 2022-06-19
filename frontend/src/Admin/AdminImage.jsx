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


const AdminImage = () => {
   
    const[data,setData] = useState([])
    const[image,setImage] = useState({})
    const[product_id,setProduct_id] = useState('')
    const[prd,setPrd] = useState([])
    const[alert,setAlert] = useState(false)
    useEffect(() => {
        axios.get('http://localhost:8000/api/image').then((res) => {
            setData(res.data);
        })
    },[alert])
    useEffect(() => {
        axios.get('http://localhost:8000/api/product').then((res) => {
            setPrd(res.data)
        })
    },[])
    const handleForm = () => {
        axios('http://localhost:8000/api/image',{
            method:'post',
            headers: {
                "content-type": "multipart/form-data"
            },
           data:{
            product_id:product_id,
            more_image:image
           }
        }).then((res) => {
            setAlert(!alert)
            setImage({})
            setProduct_id('')
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
                                Size Inserted
                            </Alert>}
                            {/* {alertDel && <Alert severity="error" onClose={(prev) => setAlertDel(!prev)} sx={{ width: 'auto' }}>
                                Size Deleted
                            </Alert>} */}
                            <TableContainer component={Paper} sx={{ border: 'none', boxShadow: 'none' }}>
                                <Table sx={{ width: '400', border: 'none', boxShadow: 'none' }} aria-label="simple table">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell sx={{ fontSize: 16, fontWeight: 700 }}>Image Id</TableCell>
                                            <TableCell sx={{ fontSize: 16, fontWeight: 700 }} align="right">Prd Id</TableCell>
                                            <TableCell sx={{ fontSize: 16, fontWeight: 700 }} align="right">Prd Title</TableCell>
                                            <TableCell sx={{ fontSize: 16, fontWeight: 700 }} align="right">Image</TableCell>
                                            <TableCell sx={{ fontSize: 16, fontWeight: 700 }} align="right">Action</TableCell>
                                        </TableRow>
                                    </TableHead>

                                  
                                        {data.map((item,key) =>(
                                            <TableBody key={key}>
                                            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                                <TableCell component="th" scope="row" sx={{ fontSize: 16, fontWeight: 700 }}>{item.id}</TableCell>
                                                <TableCell component="th" scope="row" sx={{ fontSize: 16, fontWeight: 700 }}>{item.product.id}</TableCell>
                                                <TableCell component="th" scope="row" sx={{ fontSize: 16, fontWeight: 700 }}>{item.product.title}</TableCell>
                                                <TableCell align="right" sx={{ fontSize: 16, fontWeight: 500 }}>
                                                    <img src={`http://localhost:8000/more_images/${item.more_image}`} height='70px'/>
                                                </TableCell>
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
                                <InputLabel id="demo-simple-select-label">Select product</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    label="Select product"
                                    defaultValue=''
                                    value={product_id}
                                    onChange={(e) => setProduct_id(e.target.value)}
                                >
                                     {prd.map((item,key) => (
                                        <MenuItem  value={item.id} key={key}>{item.title}</MenuItem>
                                     ))}
                                  
                                  
                                </Select>
                            </FormControl>
                            <Button
                            variant="outlined"
                            component="label"
                            sx={{ mt: 1, width: '100%', color: 'black', border: '1px solid grey' }}

                        >
                           {image.name !== undefined ? image.name : "Upload Image"}
                            <input
                                type="file"
                                hidden
                                name='image'
                                value={image.data}
                                onChange={(e) => setImage(e.target.files[0])}
                            />
                        </Button>
                            <Button fullWidth onClick={handleForm} variant="contained" sx={{ mt: 1, borderRadius: '10px', backgroundColor: 'black', '&:hover': { backgroundColor: 'black', color: 'white' }, mr: 3 }} >
                                <Typography sx={{ p: 1.1 }} className={style.family} >Insert Image</Typography>
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}

export default AdminImage