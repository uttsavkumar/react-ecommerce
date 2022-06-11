import React from 'react'
import { Button, Card, CardContent, CardMedia, Grid, Typography, Box, CardActionArea } from "@mui/material";
import style from '../Client.module.css'
import kid from '../catimage/kid.webp'
import men from '../catimage/men.webp'
import women from '../catimage/women.webp'
const AllShoesCat = () => {
    return (
        <>
            <Grid container sx={{ m: 0, p: 0 }}>
                <Grid item xs={12}>
                    <Typography
                        sx={{
                            padding: 7,
                            textAlign: "center",
                            fontSize: 28,
                            fontWeight: "700",
                        }}
                    >
                        WE BRING YOU A VERY LARGE COLLECTION
                        <Typography
                            sx={{ textAlign: "center", fontSize: 20, fontWeight: "700" }}
                        >
                            OF MEN, WOMEN, AND KID'S FOOTWEAR.
                        </Typography>
                    </Typography>
                </Grid>
            </Grid>

            <Grid container sx={{ p: 8, backgroundColor: 'white', mt: -8 }} >
                <Grid item xs={12} sx={{ p: 0, m: 0 }}>
                    <Typography sx={{ padding: 0, fontSize: 23, fontWeight: "500", ml: 2 }}>
                        More Nike
                    </Typography>
                </Grid>

                <Grid item xs={12} md={4} lg={4}>
                    <Card sx={{ p: 0, m: 0, maxHeight: 600, border: 'none', boxShadow: 'none' }}>
                        <CardActionArea>
                            <CardContent sx={{ position: 'relative' }}>
                                <CardMedia
                                    component="img"
                                    height="580"
                                    image={men}
                                    alt="Paella dish"
                                />
                                <Box sx={{ position: 'absolute', bottom: 20, p: 5 }}>
                                    <Button variant="contained" sx={{ mt: 1 }} className={style.catbtn}>
                                        <Typography sx={{ p: 1 }} className={style.catbtntext}>Men's</Typography>
                                    </Button>
                                </Box>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item xs={12} md={4} lg={4}>
                    <Card sx={{ p: 0, m: 0, maxHeight: 600, border: 'none', boxShadow: 'none' }}>
                        <CardActionArea>
                            <CardContent sx={{ position: 'relative' }}>
                                <CardMedia
                                    component="img"
                                    height="580"
                                    image={women}
                                    alt="Paella dish"
                                />
                                <Box sx={{ position: 'absolute', bottom: 20, p: 5 }}>
                                    <Button variant="contained" sx={{ mt: 1 }} className={style.catbtn}>
                                        <Typography sx={{ p: 1 }} className={style.catbtntext}>Women's</Typography>
                                    </Button>
                                </Box>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item xs={12} md={4} lg={4}>
                    <Card sx={{ p: 0, m: 0, maxHeight: 600, border: 'none', boxShadow: 'none' }}>
                        <CardActionArea>
                            <CardContent sx={{ position: 'relative' }}>
                                <CardMedia
                                    component="img"
                                    height="580"
                                    image={kid}
                                    alt="Paella dish"
                                />
                                <Box sx={{ position: 'absolute', bottom: 20, p: 5 }}>
                                    <Button variant="contained" sx={{ mt: 1 }} className={style.catbtn}>
                                        <Typography sx={{ p: 1 }} className={style.catbtntext}>Kid's</Typography>
                                    </Button>
                                </Box>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>

            </Grid>

        </>
    )
}

export default AllShoesCat