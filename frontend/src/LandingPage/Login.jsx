import { Button, Checkbox, Grid, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useContext } from 'react'
import Header from './Header'
import style from '../Client.module.css'
import { Link } from 'react-router-dom'
import { Formik } from 'formik'
import * as yup from 'yup'
import Auth from '../Context/AuthContext'

const Login = () => {
  const formValidation = yup.object().shape({
    email: yup.string().email('Please enter a valid email!').required('Please enter a valid email!'),
    password: yup.string().min(6, 'Minimiun of six character required').required('Password field is required!')
  })

  //access data from authcontext
  const { handleLogin } = useContext(Auth)
  return (
    <>
      <Header />
      <Formik
        initialValues={{
          email: '',
          password: ''
        }}
        validationSchema={formValidation}
        onSubmit={(values) => handleLogin(values)}
      >
        {({ handleSubmit, handleChange, values, errors }) => (
          <Grid container>
            <Grid item xs={10} lg={4} md={6} mx='auto' sx={{}}>
              <Box padding={5}>
                <Typography fontSize={27} padding={5} mt={-5} ml={7}>Your account for everything nike</Typography>
                <TextField label="Email Address" variant="outlined" fullWidth size='md' onChange={handleChange('email')} value={values.email} />
                {errors.email && <Typography style={{ marginTop: 5, marginLeft: 4, fontSize: 13.3, color: 'red' }}>{errors.email}</Typography>}
                <TextField sx={{ mt: 2 }} label="Password" type="password" variant="outlined" fullWidth size='md' onChange={handleChange('password')} value={values.password} />
                {errors.password && <Typography style={{ marginTop: 5, marginLeft: 4, fontSize: 13.3, color: 'red' }}>{errors.password}</Typography>}

                <Box sx={{ display: 'flex', flexDirection: 'row', mt: 2 }}>
                  <Checkbox sx={{ mt: -1.5 }} />
                  <Typography flex={1} sx={{ fontSize: 14 }}>Keep me logged in</Typography>
                  <Typography sx={{ fontSize: 14, textDecoration: 'underline', cursor: 'pointer', color: '#707070' }}>Forgotten your password?</Typography>
                </Box>
                <Box mt={1}>
                  <Typography textAlign={'center'} sx={{ fontSize: 14, padding: 2, color: '#707070' }}>By loggin in, you agree to Nike's Privacy Policy and Terms of Use.</Typography>
                </Box>
                <Button onClick={handleSubmit} variant="contained" fullWidth sx={{ mt: 2, borderRadius: '5px', backgroundColor: 'black', '&:hover': { backgroundColor: 'black' } }} >
                  <Typography sx={{ p: .4, fontWeight: '700' }} className={style.family}>SIGN IN</Typography>
                </Button>
                <Typography mt={3} textAlign={'center'} sx={{ fontSize: 15 }}>Not a Member? <Link to={'/signup'}>Join Us</Link></Typography>
              </Box>
            </Grid>
          </Grid>
        )}
      </Formik>
    </>
  )
}

export default Login