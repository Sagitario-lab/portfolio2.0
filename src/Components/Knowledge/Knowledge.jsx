import React from "react";
import "./Knowledge.css";
import Grid from "@mui/material/Grid";
export const Knowledge = () => {
  return (
    <div className='knowledge-cont'>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6} className='asdasdas'>
          <h1 className='know'>HTML</h1>
        </Grid>
        <Grid item xs={12} md={6}>
          <h1 className='know'>CSS</h1>
        </Grid>
        <Grid item xs={12} md={6}>
          <h1 className='know'>JAVASCRIPT</h1>
        </Grid>
        <Grid item xs={12} md={6}>
          <h1 className='know'>REACTJS</h1>
        </Grid>
        <Grid item xs={12} md={6}>
          <h1 className='know'>GIT/GITHUB</h1>
        </Grid>
        <Grid item xs={12} md={6}>
          <h1 className='know'>NODEJS</h1>
        </Grid>
        <Grid item xs={12} md={6}>
          <h1 className='know'>EXPRESS</h1>
        </Grid>
        <Grid item xs={12} md={6}>
          <h1 className='know'>MYSQL</h1>
        </Grid>
        <Grid item xs={12} md={6}>
          <h1 className='know'>MICROSOFT SQL SERVER</h1>
        </Grid>
        <Grid item xs={12} md={6}>
          <h1 className='know'>PHOTOSHOP</h1>
        </Grid>
        <Grid item xs={12} md={12}>
          <h1 className='know'>Languages</h1>
          <div className='languages-cont'>
            <div  className='language'>
              <div className='languages'> English</div>
              <div>
                <i className='pi pi-star-fill'></i>
                <i className='pi pi-star-fill'></i>
                <i className='pi pi-star-fill'></i>
                <i className='pi pi-star-fill'></i>
              </div>
            </div>

            <div>
              <div className='languages'> Spanish</div>
              <div>
                <i className='pi pi-star-fill'></i>
                <i className='pi pi-star-fill'></i>
                <i className='pi pi-star-fill'></i>
                <i className='pi pi-star-fill'></i>
                <i className='pi pi-star-fill'></i>
              </div>
            </div>
            <div>
              <div className='languages'> Portuguese</div>
              <div>
                <i className='pi pi-star-fill'></i>
                <i className='pi pi-star-fill'></i>
                <i className='pi pi-star-fill'></i>
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};
