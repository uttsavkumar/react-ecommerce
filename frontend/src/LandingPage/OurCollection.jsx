import React from 'react'
import { Box, Button, Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import shoe1 from "../shoesimages/shoe1.png";

const OurCollection = () => {
  return (
    <>
      <Grid container sx={{ p: 8, backgroundColor: 'white', mt: -8 }} >
        <Grid item xs={12} sx={{ p: 0, m: 0 }}>
          <Typography sx={{ padding: 0, fontSize: 23, fontWeight: "500", ml: 2 }}>
            Our Top Collection's
          </Typography>
        </Grid>

        <Grid item xs={12} md={6} lg={4}>
          <Card sx={{ p: 0, m: 0, height: 410, border: 'none', boxShadow: 'none',  }}>
            <CardActionArea >
              <CardContent >
                <CardMedia
                  component="img"
                  height="300"
                  image={shoe1}
                  sx={{ backgroundColor: '#f0efef9c' }}
                  alt="Paella dish"
                />
                <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                  <Typography sx={{ color: 'black', fontSize: 18, fontWeight: '500', pt: 3, flex: 1 }}> nike 2636 </Typography>
                  <Typography sx={{ color: 'black', fontSize: 18, fontWeight: '500', pt: 3 }}> Rs. 81762 </Typography>
                </Box>
                <Typography sx={{ color: '#a2a2a2', fontSize: 16, fontWeight: '500', pt: .1 }}> Men's Shoes </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Card sx={{ p: 0, m: 0, height: 410, border: 'none', boxShadow: 'none',  }}>
            <CardActionArea >
              <CardContent >
                <CardMedia
                  component="img"
                  height="300"
                  image={shoe1}
                  sx={{ backgroundColor: '#f0efef9c' }}
                  alt="Paella dish"
                />
                <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                  <Typography sx={{ color: 'black', fontSize: 18, fontWeight: '500', pt: 3, flex: 1 }}> nike 2636 </Typography>
                  <Typography sx={{ color: 'black', fontSize: 18, fontWeight: '500', pt: 3 }}> Rs. 81762 </Typography>
                </Box>
                <Typography sx={{ color: '#a2a2a2', fontSize: 16, fontWeight: '500', pt: .1 }}> Men's Shoes </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Card sx={{ p: 0, m: 0, height: 410, border: 'none', boxShadow: 'none',  }}>
            <CardActionArea >
              <CardContent >
                <CardMedia
                  component="img"
                  height="300"
                  image={shoe1}
                  sx={{ backgroundColor: '#f0efef9c' }}
                  alt="Paella dish"
                />
                <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                  <Typography sx={{ color: 'black', fontSize: 18, fontWeight: '500', pt: 3, flex: 1 }}> nike 2636 </Typography>
                  <Typography sx={{ color: 'black', fontSize: 18, fontWeight: '500', pt: 3 }}> Rs. 81762 </Typography>
                </Box>
                <Typography sx={{ color: '#a2a2a2', fontSize: 16, fontWeight: '500', pt: .1 }}> Men's Shoes </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      

      </Grid>


      {/* Latest collection */}
      <Grid container sx={{ p: 8, backgroundColor: 'white', mt: -8 }} >
        <Grid item xs={12} sx={{ p: 0, m: 0 }}>
          <Typography sx={{ padding: 0, fontSize: 23, fontWeight: "500", ml: 2 }}>
            Our Latest Collection's
          </Typography>
        </Grid>

        <Grid item xs={12} md={6} lg={4}>
          <Card sx={{ p: 0, m: 0, height: 410, border: 'none', boxShadow: 'none',  }}>
            <CardActionArea >
              <CardContent >
                <CardMedia
                  component="img"
                  height="300"
                  image={shoe1}
                  sx={{ backgroundColor: '#f0efef9c' }}
                  alt="Paella dish"
                />
                <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                  <Typography sx={{ color: 'black', fontSize: 18, fontWeight: '500', pt: 3, flex: 1 }}> nike 2636 </Typography>
                  <Typography sx={{ color: 'black', fontSize: 18, fontWeight: '500', pt: 3 }}> Rs. 81762 </Typography>
                </Box>
                <Typography sx={{ color: '#a2a2a2', fontSize: 16, fontWeight: '500', pt: .1 }}> Men's Shoes </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Card sx={{ p: 0, m: 0, height: 410, border: 'none', boxShadow: 'none',  }}>
            <CardActionArea >
              <CardContent >
                <CardMedia
                  component="img"
                  height="300"
                  image={shoe1}
                  sx={{ backgroundColor: '#f0efef9c' }}
                  alt="Paella dish"
                />
                <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                  <Typography sx={{ color: 'black', fontSize: 18, fontWeight: '500', pt: 3, flex: 1 }}> nike 2636 </Typography>
                  <Typography sx={{ color: 'black', fontSize: 18, fontWeight: '500', pt: 3 }}> Rs. 81762 </Typography>
                </Box>
                <Typography sx={{ color: '#a2a2a2', fontSize: 16, fontWeight: '500', pt: .1 }}> Men's Shoes </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Card sx={{ p: 0, m: 0, height: 410, border: 'none', boxShadow: 'none',  }}>
            <CardActionArea >
              <CardContent >
                <CardMedia
                  component="img"
                  height="300"
                  image={shoe1}
                  sx={{ backgroundColor: '#f0efef9c' }}
                  alt="Paella dish"
                />
                <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                  <Typography sx={{ color: 'black', fontSize: 18, fontWeight: '500', pt: 3, flex: 1 }}> nike 2636 </Typography>
                  <Typography sx={{ color: 'black', fontSize: 18, fontWeight: '500', pt: 3 }}> Rs. 81762 </Typography>
                </Box>
                <Typography sx={{ color: '#a2a2a2', fontSize: 16, fontWeight: '500', pt: .1 }}> Men's Shoes </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      

      </Grid>
    </>
  )
}

export default OurCollection