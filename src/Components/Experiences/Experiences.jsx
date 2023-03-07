import React from "react";
import "./Experiences.css";
import Grid from "@mui/material/Grid";
export const Experiences = () => {
  return (
    <div>
      <div className='experiences-cont' >
        <Grid container spacing={1} >
          <Grid item xs={12} md={6}>
            <h1 className='exp'>HTML</h1>
          </Grid>
          <Grid item xs={12} md={6}>
            <h1 className='exp'>CSS</h1>
          </Grid>
          <Grid item xs={12} md={6}>
            <h1 className='exp'>JAVASCRIPT</h1>
          </Grid>
          <Grid item xs={12} md={6}>
            <h1 className='exp'>REACTJS</h1>
          </Grid>
          <Grid item xs={12} md={6}>
            <h1 className='exp'>GIT/GITHUB</h1>
          </Grid>
          <Grid item xs={12} md={6}>
            <h1 className='exp'>NODEJS</h1>
          </Grid>
          <Grid item xs={12} md={6}>
            <h1 className='exp'>EXPRESS</h1>
          </Grid>
          <Grid item xs={12} md={6}>
            <h1 className='exp'>MYSQL</h1>
          </Grid>
          <Grid item xs={12} md={6}>
            <h1 className='exp'>MICROSOFT SQL SERVER</h1>
          </Grid>
          <Grid item xs={12} md={6}>
            <h1 className='exp'>PHOTOSHOP</h1>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};
