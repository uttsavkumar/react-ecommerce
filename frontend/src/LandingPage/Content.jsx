import { Button, Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import shoe1 from "../shoesimages/shoe1.png";
import lpage1 from "../catimage/lpage1.webp";
import lpage2 from "../catimage/lpage2.webp";
import style from '../Client.module.css'
import { Link } from "react-router-dom";


const Content = () => {

  return (
    <>

      <Grid container sx={{ m: 0, p: 0 }}>
        <Grid item xs={12}>
          <Typography
            sx={{
              padding: 10,
              textAlign: "center",
              fontSize: 28,
              fontWeight: "700",
            }}
          >
            BOLD LIKE BEFORE.
            <Typography
              sx={{ textAlign: "center", fontSize: 20, fontWeight: "700" }}
            >
              BUILT FOR NEXT.
            </Typography>
          </Typography>
        </Grid>

      </Grid>

      {/* Card Container */}
      <Grid container sx={{ p: 8, backgroundColor: 'white', mt: -8 }} >
        <Grid item xs={12} sx={{ p: 0, m: 0 }}>
          <Typography sx={{ padding: 0, fontSize: 23, fontWeight: "500", ml: 2 }}>
            Featured
          </Typography>
        </Grid>

        <Grid item xs={12} md={6} lg={6}>
          <Card sx={{ p: 0, m: 0, maxHeight: 600, border: 'none', boxShadow: 'none' }}>
            <CardActionArea component={Link} to="/men/shoes">
              <CardContent sx={{ position: 'relative' }}>
                <CardMedia
                  component="img"
                  height="600"
                  image={lpage1}
                  alt="Paella dish"
                />
                <Box sx={{ position: 'absolute', bottom: 20, p: 5 }}>
                  <Typography sx={{ color: 'white', fontSize: 21 }}>The Latest Top Collection in Men's </Typography>
                  <Button variant="contained" sx={{ mt: 1 }} className={style.contentbtn}>
                    <Typography sx={{ p: 1 }} className={style.contentbtntext}>Shop</Typography>
                  </Button>
                </Box>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>

        <Grid item xs={12} md={6} lg={6}>
          <Card sx={{ p: 0, m: 0, maxHeight: 600, border: 'none', boxShadow: 'none' }}>
            <CardActionArea component={Link} to="/women/shoes">
              <CardContent sx={{ position: 'relative' }}>
                <CardMedia
                  component="img"
                  height="600"
                  image={lpage2}
                  alt="Paella dish"
                />
                <Box sx={{ position: 'absolute', bottom: 20, p: 5 }}>
                  <Typography sx={{ color: 'black', fontSize: 21 }}>Styles to Inspire Dreamers</Typography>
                  <Button variant="contained" sx={{ mt: 1 }} className={style.contentbtn}>
                    <Typography sx={{ p: 1 }} className={style.contentbtntext}>Shop</Typography>
                  </Button>
                </Box>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>



    </>
  );
};

export default Content;
