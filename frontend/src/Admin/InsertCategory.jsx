import { Grid, TextField, Typography, Select, MenuItem, FormControl, InputLabel, Button, dialogActionsClasses, Alert, AlertTitle } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import Header from './Header'
import Side from './Side'
import { Link } from 'react-router-dom'
import style from '../Client.module.css'
import { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'

const InsertCategory = () => {
    const [cat, setCat] = useState([])
    const [parent_id, setParent] = useState('')
    const [cat_title, setCatTitle] = useState('')
    const [alert, setAlert] = useState(false)

    useEffect(() => {
        axios.get('http://localhost:8000/api/category').then((response) => {
            setCat(response.data)
        })
    }, [])
    const handleClean = () => {
        setParent('')
        setCatTitle('')
    }
    const handleForm = () => {
        axios({
            method: 'post',
            url: 'http://localhost:8000/api/category',
            data: {
                cat_title: cat_title,
                parent_id: parent_id
            }
        }).then(() => {
            setAlert(true)
            handleClean()
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
                    {alert && <Alert onClose={() => setAlert(false)} sx={{ width: 780, fontSize: 15, fontWeight: 500 }}>
                        Category Inserted!
                    </Alert>}
                    <Grid item xs={12} sx={{ mt: 4 }}>
                        <Typography sx={{ fontSize: 30 }}>Insert Category</Typography>
                    </Grid>
                    <Grid item xs={10} sx={{ mt: 1.5 }}>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Select Parent Title</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                label="Select Parent Title"
                                onChange={(e) => setParent(e.target.value)}
                                defaultValue=""
                                value={parent_id}
                            >
                                <MenuItem value={0}>Parent Category</MenuItem>
                                {cat.map((item, key) => (
                                    <MenuItem value={item.id} key={key}>{item.cat_title}</MenuItem>
                                ))}

                            </Select>
                        </FormControl>
                        <TextField value={cat_title} fullWidth id="outlined-basic" label="Enter Category Title" onChange={(e) => setCatTitle(e.target.value)} variant="outlined" sx={{ mt: 1 }} />
                        <Button fullWidth onClick={handleForm} variant="contained" sx={{ mt: 1, borderRadius: '10px', backgroundColor: 'black', '&:hover': { backgroundColor: 'black', color: 'white' }, mr: 3 }} >
                            <Typography sx={{ p: 1.1 }} className={style.family} >Insert Category</Typography>
                        </Button>
                    </Grid>


                </Grid>
            </Grid>
        </>
    )
}

export default InsertCategory