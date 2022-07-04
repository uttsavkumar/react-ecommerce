import { Button, Checkbox, Grid, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'
import Header from './Header'
import style from '../Client.module.css'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import * as yup from 'yup'
import { Formik } from 'formik'
const Signup = () => {

    const nav = useNavigate()
    function handleSignup({ name, lastname, password, email }) {
        axios('http://localhost:8000/api/register', {
            method: 'post',
            data: {
                name: name,
                lastname: lastname,
                email: email,
                password: password
            }
        }).then(() => {
            console.log('user created')
            nav('/login')
        })
    }
    const formValidation = yup.object().shape({
        name: yup.string().max(225, 'Character limit reached!'),
        lastname: yup.string().max(225, 'Character limit reached!'),
        email: yup.string().email('Please enter a valid email!').required('Please enter a valid email!'),
        password: yup.string().min(6, 'Minimiun of six character required').required('Password field is required!')

    })
    return (
        <>
            <Header />
            <Formik
                initialValues={{
                    name: '',
                    lastname: '',
                    password: '',
                    email: ''
                }}
                validationSchema={formValidation}
                onSubmit={(values) => handleSignup(values)}
            >
                {({ values, handleChange, handleSubmit, errors, handleReset }) => (
                    <Grid container>
                        <Grid item xs={10} lg={4} md={6} mx='auto' sx={{}}>
                            <Box padding={5}>
                                <Typography fontSize={22} padding={5} mt={-5} ml={5}>Become a Nike Member</Typography>
                                <Box mt={-4}>
                                    <Typography textAlign={'center'} sx={{ fontSize: 14, padding: 2, color: '#707070' }}>
                                        Create your Nike Member profile and get first access to the very best of Nike products, inspiration and community.
                                    </Typography>
                                </Box>
                                <TextField label="Email Address" name='email' variant="outlined" fullWidth size='small' onChange={handleChange('email')} value={values.email} />
                                {errors.email && <Typography style={{ marginTop: 5, marginLeft: 4, fontSize: 13.3, color: 'red' }}>{errors.email}</Typography>}
                                <TextField sx={{ mt: 2 }} label="Password" type={'password'} name='password' variant="outlined" fullWidth size='small' onChange={handleChange('password')} value={values.password} />
                                {errors.password && <Typography style={{ marginTop: 5, marginLeft: 4, fontSize: 13.3, color: 'red' }}>{errors.password}</Typography>}
                                <TextField sx={{ mt: 2 }} label="First Name" name='name' variant="outlined" fullWidth size='small' onChange={handleChange('name')} value={values.name} />
                                <TextField sx={{ mt: 2 }} label="Last Name" name='lastName' variant="outlined" fullWidth size='small' onChange={handleChange('lastname')} value={values.lastname} />

                                <Box sx={{ display: 'flex', flexDirection: 'row', mt: 2 }}>
                                    <Checkbox sx={{ mt: -1.5 }} />
                                    <Typography sx={{ fontSize: 13, color: '#707070' }}>Sign up for emails to get updates from Nike on products, offers and your Member benefits</Typography>
                                </Box>
                                <Box mt={1}>
                                    <Typography textAlign={'center'} sx={{ fontSize: 14, padding: 2, color: '#707070' }}>By creating an account, you agree to Nike's Privacy Policy and Terms of Use.</Typography>
                                </Box>
                                <Button onClick={handleSubmit} variant="contained" fullWidth sx={{ mt: 2, borderRadius: '5px', backgroundColor: 'black', '&:hover': { backgroundColor: 'black' } }} >
                                    <Typography sx={{ p: .4, fontWeight: '700' }} className={style.family}>JOIN US</Typography>
                                </Button>
                                <Typography mt={3} textAlign={'center'} sx={{ fontSize: 15 }}>Already a Member? <Link to={'/login'}>Sign In</Link></Typography>
                            </Box>
                        </Grid>
                    </Grid>
                )}
            </Formik>
        </>
    )
}

export default Signup