import { Grid } from "@mui/material";
import React from "react";
import "./Experiences.css";
import calculator from "../../Img/calculator.png";
import tasklist from "../../Img/tasklist.png";
import weather from "../../Img/weather.png";
import skillup from "../../Img/skillup.png";

export const Experiences = () => {
  return (
    <Grid container>
      <Grid sm={12} md={12}>
        <div className='exp-text'>
          I have experiences with some personal proyects that i built for fun,
          some with more, and some with less CSS, they were made only for
          practice, mainly to practice logic and other times, just for fun, here
          are some images next to the links of the respective projects made.
        </div>
      </Grid>
      <Grid sm={12} md={6}>
        <img src={calculator} alt='proyect-img' className='proyect'></img>
      </Grid>
      <Grid sm={12} md={6}>
        <img src={tasklist} alt='proyect-img' className='proyect'></img>
      </Grid>
      <Grid sm={12} md={6}>
        <img src={weather} alt='proyect-img' className='proyect'></img>
      </Grid>
      <Grid sm={12} md={6}>
        <img src={skillup} alt='proyect-img' className='proyect'></img>
      </Grid>
    </Grid>
  );
};
