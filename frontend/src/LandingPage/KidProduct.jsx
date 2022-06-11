import { Grid, Typography, Card, CardActionArea, CardMedia, CardContent, Collapse, List, ListItemButton, ListItemText } from '@mui/material'
import shoe1 from "../shoesimages/shoe1.png";
import { Box } from '@mui/system'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Header from './Header'
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

const KidProduct = () => {
  const [collpase, setCollpase] = useState(false)

  const handleExpand = () => {
    setCollpase(!collpase)
  }
  return (
    <>
      <Header />
      <Grid container>
        <Grid item xs={3} sx={{ borderRight: '.1px solid #f0efef9c', position: 'sticky', zIndex: 10, top: 0 }} >
          <Box sx={{ height: '100vh', paddingLeft: 7, pt: 1 }}>
            <Typography sx={{ fontSize: 25, fontWeight: 500 }}>Kid's Shoes(626)</Typography>
            <Box sx={{ mt: 4, display: 'flex', flexDirection: 'column' }}>
              <Typography component={Link} to="#" sx={{ textDecoration: 'none', color: '#111111', fontSize: 18, '&:hover': { textDecoration: 'underline' }, mt: .6 }}>Running</Typography>
              <Typography component={Link} to="#" sx={{ textDecoration: 'none', color: '#111111', fontSize: 18, '&:hover': { textDecoration: 'underline' }, mt: .6 }}>Running</Typography>
              <Typography component={Link} to="#" sx={{ textDecoration: 'none', color: '#111111', fontSize: 18, '&:hover': { textDecoration: 'underline' }, mt: .6 }}>Running</Typography>
              <Typography component={Link} to="#" sx={{ textDecoration: 'none', color: '#111111', fontSize: 18, '&:hover': { textDecoration: 'underline' }, mt: .6 }}>Running</Typography>
              <Typography component={Link} to="#" sx={{ textDecoration: 'none', color: '#111111', fontSize: 18, '&:hover': { textDecoration: 'underline' }, mt: .6 }}>Running</Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={9} sx={{ zIndex: 3 }}>
          <Grid container>
            <Grid item xs={12} >
              <Box sx={{ disply: 'flex', flexDirection: 'row', cursor: 'pointer' }} onClick={() => handleExpand()} >
                <Typography sx={{ fontSize: 19, float: 'right', mr: 3, mt: 3, fontWeight: 500, color: 'black' }} > {collpase === false ? <ExpandMore /> : <ExpandLess />}</Typography>
                <Typography sx={{ fontSize: 19, float: 'right', mr: .5, mt: 3, fontWeight: 500, color: 'black' }}>Sort By</Typography>
                
              </Box>
            </Grid>
            {/* Collpase */}
            <Grid item xs={12}>
            <Box sx={{ width: 200, backgroundColor: 'transparent',float:'right',mr:3 }}>
                  <Collapse in={collpase} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      <ListItemButton sx={{ pl: 4,textAlign:'right' }}>
                        <ListItemText primary="Price: High to Low"  />
                      </ListItemButton>
                      <ListItemButton sx={{ mt:-1,textAlign:'right' }}>
                        <ListItemText primary="Price: Low to High"  />
                      </ListItemButton>
                    </List>
                  </Collapse>
                </Box>
            </Grid>

            <Grid item xs={12} md={6} lg={4} >
              <Card sx={{ p: 0, m: 0, border: 'none', boxShadow: 'none', }}>
                <CardActionArea >
                  <CardContent >
                    <CardMedia
                      component="img"
                      height="300"
                      image={shoe1}
                      sx={{ backgroundColor: '#f0efef9c' }}
                      alt="Paella dish"
                    />
                    <Typography sx={{ color: 'black', fontSize: 18, fontWeight: '500', pt: 2, flex: 1 }}> nike 2636 </Typography>
                    <Typography sx={{ color: '#a2a2a2', fontSize: 16, fontWeight: '500', pt: .1 }}> Men's Shoes </Typography>
                    <Typography sx={{ color: 'black', fontSize: 18, fontWeight: '500', pt: 1 }}> Rs. 81762 </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item xs={12} md={6} lg={4} >
              <Card sx={{ p: 0, m: 0, border: 'none', boxShadow: 'none', }}>
                <CardActionArea >
                  <CardContent >
                    <CardMedia
                      component="img"
                      height="300"
                      image={shoe1}
                      sx={{ backgroundColor: '#f0efef9c' }}
                      alt="Paella dish"
                    />
                    <Typography sx={{ color: 'black', fontSize: 18, fontWeight: '500', pt: 2, flex: 1 }}> nike 2636 </Typography>
                    <Typography sx={{ color: '#a2a2a2', fontSize: 16, fontWeight: '500', pt: .1 }}> Men's Shoes </Typography>
                    <Typography sx={{ color: 'black', fontSize: 18, fontWeight: '500', pt: 1 }}> Rs. 81762 </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item xs={12} md={6} lg={4} >
              <Card sx={{ p: 0, m: 0, border: 'none', boxShadow: 'none', }}>
                <CardActionArea >
                  <CardContent >
                    <CardMedia
                      component="img"
                      height="300"
                      image={shoe1}
                      sx={{ backgroundColor: '#f0efef9c' }}
                      alt="Paella dish"
                    />
                    <Typography sx={{ color: 'black', fontSize: 18, fontWeight: '500', pt: 2, flex: 1 }}> nike 2636 </Typography>
                    <Typography sx={{ color: '#a2a2a2', fontSize: 16, fontWeight: '500', pt: .1 }}> Men's Shoes </Typography>
                    <Typography sx={{ color: 'black', fontSize: 18, fontWeight: '500', pt: 1 }}> Rs. 81762 </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item xs={12} md={6} lg={4} >
              <Card sx={{ p: 0, m: 0, border: 'none', boxShadow: 'none', }}>
                <CardActionArea >
                  <CardContent >
                    <CardMedia
                      component="img"
                      height="300"
                      image={shoe1}
                      sx={{ backgroundColor: '#f0efef9c' }}
                      alt="Paella dish"
                    />
                    <Typography sx={{ color: 'black', fontSize: 18, fontWeight: '500', pt: 2, flex: 1 }}> nike 2636 </Typography>
                    <Typography sx={{ color: '#a2a2a2', fontSize: 16, fontWeight: '500', pt: .1 }}> Men's Shoes </Typography>
                    <Typography sx={{ color: 'black', fontSize: 18, fontWeight: '500', pt: 1 }}> Rs. 81762 </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>



          </Grid>
        </Grid>
      </Grid>
    </>
  )
}

export default KidProduct