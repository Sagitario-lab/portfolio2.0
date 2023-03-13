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
          practice, mainly to practice logic and other times, just for fun.
        </div>
        <div className='exp-text mobile-text'>
          Here are some of images next to the links to the respective projects
          that I made
        </div>
      </Grid>
      <Grid sm={12} md={6}>
        <a
          href='https://github.com/Sagitario-lab/calculator'
          target={"_blank"}
          rel='noreferrer'
        >
          <img src={calculator} alt='proyect-img' className='proyect'></img>
        </a>
      </Grid>
      <Grid sm={12} md={6}>
        <a
          href='https://github.com/Sagitario-lab/tasklist'
          target={"_blank"}
          rel='noreferrer'
        >
          <img src={tasklist} alt='proyect-img' className='proyect'></img>
        </a>
      </Grid>
      <Grid sm={12} md={6}>
        <a
          href='https://github.com/Sagitario-lab/weatherapp'
          target={"_blank"}
          rel='noreferrer'
        >
          <img src={weather} alt='proyect-img' className='proyect'></img>
        </a>
      </Grid>
      <Grid sm={12} md={6}>
        <a
          href='https://github.com/Sagitario-lab/skillup'
          target={"_blank"}
          rel='noreferrer'
        >
          <img src={skillup} alt='proyect-img' className='proyect'></img>
        </a>
      </Grid>
    </Grid>
  );
};
