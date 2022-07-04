import React, { useState,useContext } from 'react'
import { Card, CardActionArea, CardMedia, Container, Grid } from '@mui/material'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import TwitterIcon from '@mui/icons-material/Twitter';
import InputAdornment from '@mui/material/InputAdornment';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Input } from '@mui/material';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import style from '../Client.module.css'
import IconButton from '@mui/material/IconButton';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchIcon from '@mui/icons-material/Search';
import nike from '../nike.png'
import nikewhite from '../nikewhite.png'
import shoe1 from '../shoesimages/shoe1.png'
import shoe2 from '../shoesimages/shoe2.png'
import GitHubIcon from '@mui/icons-material/GitHub';
import shoe3 from '../shoesimages/shoe5.png'
import AllLandingPage from './AllLandingPage';
import Footer from './Footer';
import {Link} from 'react-router-dom'
import Auth from '../Context/AuthContext';
import { useEffect } from 'react';

const data = [
    {
        id: 1,
        img: shoe2,
        bi: "linear-gradient(to right top,#00f8d3, #15ffdc, #67f2c5, #89eb9f,  #d6f28f, #e6f48e)",
        color: 'black',
        heading: 'NIKE',
        title: 'AIR JORDON',
        content: 'The Classic Leather SP: Simple. Bold. With a lightweight compression. Perfect for transition for reinvention.',
        inputcolor: '#e8f4c4',
        inputcolorhover: '#eff7d9',
        btncolor: '#292b36',
        btnhover: 'black',
        cardhover: '#a2f8eb',
        cardborderhover: '2px solid white',
        status: false,
    },
    {
        id: 2,
        img: shoe1,
        color: 'white',
        bi: "linear-gradient(to right top, #22edf4, #00d9f9, #00c3fa, #00acf6, #0093eb, #008fe6, #008ce1, #0088dc, #0098dd, #00a7d7, #00b3ce, #2fbec3)",
        heading: 'UNLOCK YOUR,',
        title: 'BEAST',
        content: 'With a durable upper and responsive lightweight foam cushioning, Floatride Energy is for all the ways you run.',
        inputcolor: '#78cde6',
        inputcolorhover: '#8ed1e4',
        btncolor: '#292b36',
        btnhover: 'white',
        cardhover: '#badbfb',
        cardborderhover: 'none',
        status: false,
    },
    {
        id: 3,
        img: shoe3,
        color: 'black',
        bi: "linear-gradient(to right top, #3e373b, #5d585c, #7f7b7f, #a2a0a3, #c7c6c8, #d3d3d4, #e0e0e1, #ededed, #e3e3e3, #d9d9d9, #d0cfcf, #c6c5c5);",
        heading: 'LIFE IS',
        title: 'CLASSIC',
        content: 'The Classic Leather SP: Simple. Bold. With a lightweight compression. Perfect for transition for reinvention.',
        inputcolor: 'white',
        inputcolorhover: '#eeeeeede',
        btncolor: 'black',
        btnhover: '#292b36',
        cardhover: '#f0efef9c',
        cardborderhover: 'none',
        status: true

    }
]
const Home = () => {
    const [bg, setBg] = useState(data);
    const [grad, setGrad] = useState([data[2]]);
    const handleCard = (e, id) => {
        e.preventDefault()
        const newData = data.filter((item) => {
            return item.id === id 
        })
        setGrad(newData)
    }
    const handleStatus = (e, id) => {
        e.preventDefault()
        const newData = bg.map((item) => {
            return item.id === id ? { ...item, status: true } : { ...item, status: false }
        })
        setBg(newData)
        console.log(bg)
    }


    return (
        <>
            {
                grad.map((back,key) => (

                    <Container maxWidth="xl" sx={{ backgroundImage: back.bi, height: '100vh' }} key={key}>
                        <AppBar position="static" sx={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
                            <Toolbar>
                                <Typography variant="h6" component="div" sx={{ flexGrow:1.5}}>
                                    <img src={nike} alt="" height="85px" />
                                </Typography>
                                <Box sx={{  mt: '-1px', flexGrow: 1 }}>
                                    <Button component={Link} to="/men/shoes"  variant="text" className={style.btn} sx={{ color: back.color, ':hover': { borderBottom: `2px solid ${back.color}`,color:'black' } }}>Men</Button>
                                    <Button  component={Link} to="/women/shoes" className={style.btn} sx={{ color: back.color, ':hover': { borderBottom: `2px solid ${back.color}`,color:'black' } }}>Women</Button>
                                    <Button  component={Link} to="/kid/shoes" className={style.btn} sx={{ color: back.color, ':hover': { borderBottom: `2px solid ${back.color}`,color:'black' } }}>Kids</Button>
                                    <Button   className={style.btn} sx={{ color: back.color, ':hover': { borderBottom: `2px solid ${back.color}`,color:'black' } }}>Explore</Button>
                                </Box>
                                <Box>
                                    <FormControl sx={{ m: 1, width: '25ch' }} variant="text">
                                        <Input
                                            variant="text"
                                            sx={{ height: '37px', backgroundColor: back.inputcolor, p: 0, ':hover': { backgroundColor: back.inputcolorhover } }}
                                            className={style.input}
                                            id="outlined-adornment-password"
                                            placeholder='Search'
                                            disableUnderline
                                            startAdornment={
                                                <InputAdornment position="start" sx={{ ml: 2 }}>
                                                    <SearchIcon sx={{ color: back.color }} />
                                                </InputAdornment>
                                            }

                                        />
                                    </FormControl>
                                    <IconButton  component={Link} to="/cart" className={style.cart} sx={{ color: back.color, ':hover': { borderBottom: `2px solid ${back.color}`,color:'black' } }}>
                                        <ShoppingCartOutlinedIcon />
                                    </IconButton>
                                </Box>
                            </Toolbar>
                        </AppBar>

                        <Grid container spacing={2}>
                            <Grid item xs={10} md={4}>
                                <Box sx={{ p: 5, mt: 3 }}>
                                    <Typography variant='h4' sx={{ color: back.color, ml: '6px' }}>{back.heading}</Typography>
                                    <Typography variant='h3' sx={{ fontWeight: 700, color: back.color }}>{back.title}</Typography>
                                </Box>
                                <Box sx={{ p: 5, mt: '-50px' }}>
                                    <Typography variant="p" className={style.family} sx={{ fontWeight: 400, fontSize: '13px', color: back.color, }}>{back.content}</Typography>
                                    <Box sx={{ mt: 3 }}>
                                        <Button variant='outlined' sx={{ padding: '10px', textTransform: 'none', color: 'white', backgroundColor: back.btncolor, ':hover': { backgroundColor: back.btnhover ,} }} className={[style.shopnow, style.family]}>Shop Now</Button>
                                    </Box>
                                </Box>


                                <Grid container spacing={2} sx={{ p: 2, ml: 1 }}>
                                    {
                                        bg.map((item,key) => (
                                            <Grid item display={{ xs:'none',sm:'block',md:'block' }}  lg={3} key={key}>
                                                <Button sx={{ p: 0, m: 0 }} onClick={(e) => [handleCard(e, item.id), handleStatus(e, item.id)]}>
                                                    <Card sx={{ height: '78px', borderRadius: '15px', border: '1px solid transparent', backgroundColor: item.status === true ? back.cardhover : 'white', ':hover': { backgroundColor: back.cardhover, border: `1px solid ${back.cardborderhover}` } }} >
                                                        <CardActionArea>
                                                            <CardMedia
                                                                component='img'
                                                                image={item.img}
                                                                height='68px'
                                                            />
                                                        </CardActionArea>
                                                    </Card>
                                                </Button>
                                            </Grid>
                                        ))
                                    }
                                </Grid>

                            </Grid>
                            <Grid item md={8} display={{ xs:'none',md:'block' }}>
                                <img src={nikewhite} className={style.nikelogo} alt="" />
                                <img src={back.img} alt="" className={style.shoe} />
                               <Box sx={{ display:'flex',float:'right',flexDirection:'column',mt:20,mr:6 }}>
                               <Button  className={style.btn}  sx={{ pt:.7 }}>
                                    <FacebookOutlinedIcon sx={{ color: back.color, fontSize: '22px' }} />
                                </Button>
                                <Button  className={style.btn} sx={{ pt:.7 }}>
                                    <InstagramIcon sx={{ color: back.color, fontSize: '20px' }} />
                                </Button>
                                <Button className={style.btn} sx={{ pt:.7 }}>
                                    <TwitterIcon sx={{ color: back.color, fontSize: '20px' }} />
                                </Button>
                                <Button  className={style.btn} sx={{ pt:.7 }}>
                                    <GitHubIcon sx={{ color: back.color, fontSize: '20px' }} />
                                </Button>
                               </Box>
                            </Grid>
                        </Grid>
                    </Container>
                ))
            }
            <AllLandingPage/>

            <Footer/>


               
        </>
    )
}
export default Home