import React, { useState } from 'react'
import Header from './Header'
import { Button, Card, CardActionArea, CardContent, CardMedia, Grid, Typography, Box, Container, } from "@mui/material";
import style from '../Client.module.css'
import lpage1 from "../catimage/lpage1.webp";


const SingleProduct = () => {
  const [size, setSize] = useState('')

  console.log(size)
  return (
    <>
      <Header />
      <Grid container sx={{ p: 10 }}>
        <Grid item xs={12} md={7}>
          
          <Grid container>
            <Grid item xs={12} md={6}>
              <Card sx={{ p: 0, m: 0, maxHeight: 400, border: 'none', boxShadow: 'none' }}>
                <CardActionArea>
                  <CardContent sx={{ position: 'relative' }}>
                    <CardMedia
                      component="img"
                      height="400"
                      image={lpage1}
                      alt="Paella dish"
                    />

                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card sx={{ p: 0, m: 0, maxHeight: 400, border: 'none', boxShadow: 'none' }}>
                <CardActionArea>
                  <CardContent sx={{ position: 'relative' }}>
                    <CardMedia
                      component="img"
                      height="400"
                      image={lpage1}
                      alt="Paella dish"
                    />

                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>

          </Grid>
        </Grid>
        <Grid item xs={12} md={5}>
          <Container>
            <Box sx={{ p: 2 }}>
              <Typography sx={{ fontSize: 30, ml: 5 }}>Air Jordan 1 Zoom Cmft</Typography>
              <Typography sx={{ fontSize: 17, ml: 5 }}>Men Shoes</Typography>
              <Typography sx={{ fontSize: 17, ml: 5, mt: 3 }}>Rs. 52676326</Typography>
              <Typography sx={{ fontSize: 15, ml: 5, color: '#999999' }}>incl. of taxes and duties</Typography>
              <Typography sx={{ fontSize: 18, ml: 5, mt: 6 }}>Select Size</Typography>
              <Grid container sx={{ ml: 5, mt: 3 }} >
                {/* Size */}
                <Grid item lg={3} md={3} xs={12} sx={{ border: '1px solid #999999', borderRadius: '5px', height: '50px', textAlign: 'center', mt: 2, ml: 1, cursor: 'pointer', ...(size !== '' && { border: '1px solid black' }) }} onClick={(e) => setSize(e.target.value)}>
                  <Typography sx={{ fontSize: 18, mt: 1.2 }}>UK 5.5</Typography>
                </Grid>
                <Grid item lg={3} md={3} xs={12} sx={{ border: '1px solid #999999', borderRadius: '5px', height: '50px', textAlign: 'center', mt: 2, ml: 1, cursor: 'pointer', ...(size !== '' && { border: '1px solid black' }) }} onClick={(e) => setSize(e.target.value)}>
                  <Typography sx={{ fontSize: 18, mt: 1.2 }}>UK 5.5</Typography>
                </Grid>
                <Grid item lg={3} md={3} xs={12} sx={{ border: '1px solid #999999', borderRadius: '5px', height: '50px', textAlign: 'center', mt: 2, ml: 1, cursor: 'pointer', ...(size !== '' && { border: '1px solid black' }) }} onClick={(e) => setSize(e.target.value)}>
                  <Typography sx={{ fontSize: 18, mt: 1.2 }}>UK 5.5</Typography>
                </Grid>
                <Grid item lg={3} md={3} xs={12} sx={{ border: '1px solid #999999', borderRadius: '5px', height: '50px', textAlign: 'center', mt: 2, ml: 1, cursor: 'pointer', ...(size !== '' && { border: '1px solid black' }) }} onClick={(e) => setSize(e.target.value)}>
                  <Typography sx={{ fontSize: 18, mt: 1.2 }}>UK 5.5</Typography>
                </Grid>
                <Grid item lg={3} md={3} xs={12} sx={{ border: '1px solid #999999', borderRadius: '5px', height: '50px', textAlign: 'center', mt: 2, ml: 1, cursor: 'pointer', ...(size !== '' && { border: '1px solid black' }) }} onClick={(e) => setSize(e.target.value)}>
                  <Typography sx={{ fontSize: 18, mt: 1.2 }}>UK 5.5</Typography>
                </Grid>
                {/* Cart Btn */}
                <Grid item lg={12} md={12} xs={12} sx={{ mt: 3.4 }} >
                  <Button variant="contained" sx={{ mt: 1, width: '360px', borderRadius: '35px', backgroundColor: 'black', '&:hover': { backgroundColor: 'black' } }} >
                    <Typography sx={{ p: 1.4 }} className={style.family}>Add To Cart</Typography>
                  </Button>
                </Grid>

                <Grid item lg={12} md={12} xs={12} sx={{ textAlign: 'center' }}>
                  <Box sx={{ width: 370, ml: 2 }}>
                    <Typography sx={{ fontSize: 17, color: '#999999', p: 3, ml: -5 }}>This product is excluded from site promotions and discounts.</Typography>
                  </Box>
                </Grid>
                <Grid item lg={12} md={12} xs={12} sx={{}}>
                  <Box sx={{ width: 370, ml: 2 }}>
                    <Typography sx={{ fontSize: 18, color: 'black', p: 3, ml: -5 }}>Heavy-stitching accents combine with leather, suede and nature-inspired colours for a fresh take on these court classics. The worn-in look and the soft foam midsole feel like your favourite vintage sneakers.</Typography>
                  </Box>
                </Grid>

              </Grid>
            </Box>
          </Container>
        </Grid>

      </Grid>
    </>
  )
}

export default SingleProduct