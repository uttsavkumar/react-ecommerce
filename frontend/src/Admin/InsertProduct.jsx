import { Grid, TextField, Typography, Select, MenuItem, FormControl, InputLabel, Button } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import Header from './Header'
import Side from './Side'
import { Link } from 'react-router-dom'
import style from '../Client.module.css'
import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'

const InsertProduct = () => {

    const [data, setData] = useState({
        title: '',
        price: '',
        description: '',
        category_id: '',

    })
    const [image, setImage] = useState({})
    const [cat, setCat] = useState([])
    const empty = () => {
        setData({
            title: '',
            price: '',
            description: '',
            category_id: ''
        })
        setImage('')
    }

    useEffect(() => {
        axios.get('http://localhost:8000/api/category').then((res) => {
            setCat(res.data)
        })
    }, [])

    const handleForm = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }
    const InsertData = () => {

        axios('http://localhost:8000/api/product', {
            headers: {
                "content-type": "multipart/form-data"
            },
            method: 'post',
            data: {
                title: data.title,
                price: data.price,
                category_id: data.category_id,
                description: data.description,
                image: image,
            }
        }).then(() => {
            empty()
            console.log('inserted')
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
                    <Grid item xs={12} sx={{ mt: 4 }}>
                        <Typography sx={{ fontSize: 30 }}>Insert Product</Typography>
                    </Grid>
                    <Grid item xs={10} sx={{ mt: 1.5 }}>
                        <TextField fullWidth id="outlined-basic" name='title' label="Enter Product Title" variant="outlined" onChange={handleForm} value={data.title} />
                        <TextField fullWidth type={'number'} id="outlined-basic" name='price' label="Enter Product Price" variant="outlined" sx={{ mt: 1 }} onChange={handleForm} value={data.price} />


                        <FormControl fullWidth sx={{ mt: 1 }}>
                            <InputLabel id="demo-simple-select-label">Select Category</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                label="Select Category"
                                defaultValue=''
                                name='category_id'
                                value={data.category_id}
                                onChange={handleForm}
                            >
                                <MenuItem value={0}>Parent Category</MenuItem>
                                {
                                    cat.map((item, key) => (
                                        <MenuItem value={item.id} key={key}>{item.cat_title}</MenuItem>
                                    ))
                                }

                            </Select>
                        </FormControl>

                        <Button
                            variant="outlined"
                            component="label"
                            sx={{ mt: 1, width: '100%', color: 'black', border: '1px solid grey' }}

                        >
                            {image.name !== undefined ? image.name : "Upload File"}
                            <input
                                type="file"
                                hidden
                                name='image'
                                value={image.data}
                                onChange={(e) => setImage(e.target.files[0])}
                            />
                        </Button>
                        <TextField fullWidth name='description' id="outlined-basic" label="Enter Product Description" variant="outlined" sx={{ mt: 1 }} multiline rows={6} onChange={handleForm} value={data.description} />
                        <Button fullWidth onClick={InsertData} variant="contained" sx={{ mt: 1, borderRadius: '10px', backgroundColor: 'black', '&:hover': { backgroundColor: 'black', color: 'white' }, mr: 3, mb: 5 }} >
                            <Typography sx={{ p: 1.1 }} className={style.family}>Insert Product</Typography>
                        </Button>
                    </Grid>


                </Grid>
            </Grid>
        </>
    )
}

export default InsertProduct