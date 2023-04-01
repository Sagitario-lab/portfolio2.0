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
            Let me introduce me, I´m a self-taught junior web developer who is
            currently studying for a degree in Systems Analysis. I´m a highly
            motivated and dedicated web developer who has learned his skills
            through self-study and practice. As a front-end developer, i have a
            deep understanding of HTML, CSS, and JavaScript. <br />
            I also have experience working with back-end technologies, including
            MySQL and Node.js. Despite not having a formal education in web
            development, my passion for the field has driven me to learn and
            develop my skills on his own. Currently, I´m studying for a degree
            in Systems Analysis, which will give me a solid foundation in
            software development and information technology. <br />
            I´m excited to combine my formal education with his practical
            experience to become an even better web developer. <br /> Overall,
            I´m a junior web developer with a passion for learning and
            developing his skills. With my strong knowledge of HTML, CSS,
            JavaScript, MySQL, Node.js, and his formal education in Systems
            Analysis, I´m well-prepared to take on new challenges and excel in
            his web development career.
          </div>
        </div>
      </Grid>
    </Grid>
  );
};
