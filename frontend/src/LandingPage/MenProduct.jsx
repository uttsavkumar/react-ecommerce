import { Grid, Typography, Card, CardActionArea, CardMedia, CardContent, Collapse, List, ListItemButton, ListItemText } from '@mui/material'
import shoe1 from "../shoesimages/shoe1.png";
import { Box } from '@mui/system'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Header from './Header'
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { useEffect } from 'react';
import axios from 'axios';

const MenProduct = () => {
  const [collpase, setCollpase] = useState(false)
  const [data, setData] = useState([])
  const [cat, setCat] = useState([])
  const handleExpand = () => {
    setCollpase(!collpase)
  }
  useEffect(() => {
    axios.get('http://localhost:8000/api/men').then((res) => {
      setData(res.data)
    })
    axios.get('http://localhost:8000/api/mencat').then((res) => {
      setCat(res.data)
    })
  }, [])
  const handleFilter = (id) => {
    axios.get(`http://localhost:8000/api/filter/${id}`).then((res) => {
      setData(res.data)
    })
  }
  const nav = useNavigate()
  
  return (
    <>
      <Header />
      <Grid container>
        <Grid item xs={3} sx={{ borderRight: '.1px solid #f0efef9c', position: 'sticky', zIndex: 10, top: 0 }} >
          <Box sx={{ height: '100vh', paddingLeft: 7, pt: 1 }}>
            <Typography sx={{ fontSize: 25, fontWeight: 500 }}>Men's Shoes({data.length})</Typography>
            <Box sx={{ mt: 4, display: 'flex', flexDirection: 'column' }}>
              {cat.map((item, key) => (
                <Typography onClick={() => handleFilter(item.id)}  to='#' component={Link} key={key}  sx={{ textDecoration: 'none', color: '#111111', fontSize: 18, '&:hover': { textDecoration: 'underline' }, mt: .6,':focus':{textDecoration: 'underline',color:'#0d6efd'} }} >{item.cat_title}</Typography>

              ))}
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
              <Box sx={{ width: 200, backgroundColor: 'transparent', float: 'right', mr: 3 }}>
                <Collapse in={collpase} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    <ListItemButton sx={{ pl: 4, textAlign: 'right' }}>
                      <ListItemText primary="Price: High to Low" />
                    </ListItemButton>
                    <ListItemButton sx={{ mt: -1, textAlign: 'right' }}>
                      <ListItemText primary="Price: Low to High" />
                    </ListItemButton>
                  </List>
                </Collapse>
              </Box>
            </Grid>

            {data.map((item, key) => (
              <Grid item xs={12} md={6} lg={4} key={key} onClick={() => nav(`/single/${item.id}`)}>
                <Card sx={{ p: 0, m: 0, border: 'none', boxShadow: 'none', }}>
                  <CardActionArea >
                    <CardContent >
                      <CardMedia
                        component="img"
                        height="300"
                        src={`http://localhost:8000/images/${item.image}`}
                        sx={{ backgroundColor: '#f0efef9c' }}
                        alt="Paella dish"
                      />
                      <Typography sx={{ color: 'black', fontSize: 18, fontWeight: '500', pt: 2, flex: 1 }}> {item.title} </Typography>
                      <Typography sx={{ color: '#a2a2a2', fontSize: 16, fontWeight: '500', pt: .1 }}> {item.category.cat_title} </Typography>
                      <Typography sx={{ color: 'black', fontSize: 18, fontWeight: '500', pt: 1 }}> Rs. {item.price} </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            ))}




          </Grid>
        </Grid>
      </Grid>
    </>
  )
}

export default MenProduct