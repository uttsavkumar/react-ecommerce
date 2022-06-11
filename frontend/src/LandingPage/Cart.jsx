import { Grid, Typography, Card, Button, CardMedia, CardContent, Container } from '@mui/material'
import shoe1 from "../shoesimages/shoe1.png";
import { Box } from '@mui/system'
import React, { useState } from 'react'
import style from '../Client.module.css'
import Header from './Header'
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';


const Cart = () => {

  return (
    <>
      <Header />
      <Grid container>
        <Grid item xs={8}>

          <Grid container sx={{ alignItems: 'center', p: 10 }}>
            <Grid item xs={10}>
              <Typography sx={{ fontSize: 30, mt: -2 }}>My Cart</Typography>
            </Grid>

            <Grid item xs={12} sx={{ mb: 1 }}>
              <Card sx={{ display: 'flex', p: 2, width: 700, border: 0, boxShadow: '0.1px .1px 0px 0px' }}>
                <CardMedia
                  component="img"
                  sx={{ width: 201, height: 150, backgroundColor: '#f5f5f5' }}
                  image={shoe1}
                  alt="img"
                />
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                  <CardContent sx={{ flex: '1 0 auto' }}>
                    <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                      <Typography component="div" variant="h6" sx={{ fontSize: 18 }}>
                        Nike Shoes
                      </Typography>
                      <Typography component="div" variant="h6" sx={{ fontSize: 18, ml: 25 }}>
                        Rs. 2636235
                      </Typography>
                      <Typography sx={{ ml: 5, fontSize: 25, mt: -.5, cursor: 'pointer' }} title="Remove from cart">
                        <DeleteOutlineOutlinedIcon fontSize='30' />
                      </Typography>
                    </Box>
                    <Typography color="text.secondary" sx={{ fontSize: 15, mt: .5 }}>
                      Men Shoes
                    </Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'row', mt: 3 }}>
                      <Typography color="text.secondary" sx={{ fontSize: 15 }}>
                        Size: 2
                      </Typography>
                      <Typography color="text.secondary" sx={{ fontSize: 15, ml: 5 }}>
                        Quantity: 2
                      </Typography>
                    </Box>
                  </CardContent>
                </Box>
              </Card>
            </Grid>


          </Grid>

        </Grid>
        <Grid item xs={3}>

          <Box sx={{ mt: 8, ml: -2 }}>
            <Typography sx={{ fontSize: 30 }}>Summary</Typography>
            <Box sx={{ display: 'flex', flexDirection: 'row', mt: 3 }}>
              <Typography sx={{ fontSize: 17, flexGrow: 1 }}>Sub Amount:</Typography>
              <Typography sx={{ fontSize: 19, }}>Rs. 2667326</Typography>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'row', mt: .5 }}>
              <Typography sx={{ fontSize: 17, flexGrow: 1 }}>Additional Charge's:</Typography>
              <Typography sx={{ fontSize: 19, }}>Rs. 226</Typography>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'row', mt: 3.5 }}>
              <Typography sx={{ fontSize: 17, flexGrow: 1 }}>Total Amount:</Typography>
              <Typography sx={{ fontSize: 19, }}>Rs. 22323326</Typography>
            </Box>

            <Grid container sx={{ mt: 3 }} >

              {/* Checkout Btn */}
              <Grid item lg={12} md={12} xs={12} sx={{ mt: 3.4 }} >
                <Button variant="contained" sx={{ mt: 1, width: '360px', borderRadius: '35px', backgroundColor: 'black', '&:hover': { backgroundColor: 'black' } }} >
                  <Typography sx={{ p: 1.4 }} className={style.family}>Proceed To Checkout</Typography>
                </Button>
              </Grid>




            </Grid>
          </Box>

        </Grid>
      </Grid>
    </>
  )
}

export default Cart