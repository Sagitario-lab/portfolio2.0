import { Grid } from "@mui/material";
import React from "react";
import "./Whoami.css";

export const Whoami = () => {
  return (
    <Grid container className='who-cont'>
      <Grid sx={12} md={12}>
        <div className='who-info-cont'>
          <div className='who-ttl'>Full name</div>
          <div className='who-info'>Ignacio Gabriel Ulman</div>
        </div>
      </Grid>
      <Grid sx={12} md={12}>
        <div className='who-info-cont'>
          <div className='who-ttl'>Age</div>
          <div className='who-info'>22</div>
        </div>
        <div className='who-info-cont'>
          <div className='who-ttl'>Background</div>
          <div className='who-info'>
            I have been learning on my own for 3 years, I started with C, then I
            learned C++, and then I started with HTML, CSS and Javascript. Once
            I had a good base with html, css and javascript I got into Reactjs
            starting to make web pages to practice and gain experience on my
            own, recently I got into the backend area learning how to use
            expressjs, mysql and microsoft sql server (which I learned to use a
            year ago at 'ITUOM', while I was studying databases in the second
            year of the "Higher Technician in Systems Analyst" degree). Now I am
            looking for a job to be able to put in practice all my knowledge and
            be able to learn, alone or teaming up with other people, as much as
            possible.
          </div>
        </div>
      </Grid>
    </Grid>
  );
};
