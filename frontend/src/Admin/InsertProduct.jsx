import { Grid, TextField, Typography, Select, MenuItem, FormControl, InputLabel,Button } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import Header from './Header'
import Side from './Side'
import {Link} from 'react-router-dom'
import style from '../Client.module.css'

const InsertProduct = () => {
    return (
        <>
            <Header />
            <Grid container>
                <Grid item xs={4} sx={{ p: 10 }}>
                    <Side />
                </Grid>
                <Grid item xs={8}>
                    <Grid item xs={12} sx={{ mt: 4 }}>
                        <Typography sx={{ fontSize: 30 }}>Insert Product</Typography>
                    </Grid>
                    <Grid item xs={10} sx={{ mt: 1.5 }}>
                    <TextField fullWidth id="outlined-basic" label="Enter Product Title" variant="outlined"  />
                    <TextField fullWidth id="outlined-basic" label="Enter Product Price" variant="outlined" sx={{ mt: 1 }} />
                    <TextField fullWidth id="outlined-basic" label="Enter Size" variant="outlined" sx={{ mt: 1 }} />
                        
                        <FormControl fullWidth sx={{ mt: 1 }}>
                            <InputLabel id="demo-simple-select-label">Select Category</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                label="Select Category"
                            // onChange={handleChange}
                            >
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl>
                        <TextField fullWidth id="outlined-basic" label="Enter Product Description" variant="outlined" sx={{ mt: 1 }} multiline rows={6}/>
                        <Button fullWidth component={Link} to="/insert/category" variant="contained" sx={{ mt: 1, borderRadius: '10px', backgroundColor: 'black', '&:hover': { backgroundColor: 'black', color: 'white' }, mr: 3,mb:5 }} >
                            <Typography sx={{ p: 1.1 }} className={style.family}>Insert Product</Typography>
                        </Button>
                    </Grid>


                </Grid>
            </Grid>
        </>
    )
}

export default InsertProduct