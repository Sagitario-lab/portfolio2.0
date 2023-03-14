import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Grid,
  Typography,
} from "@mui/material";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Contact } from "./Components/Contact/Contact";
import { Experiences } from "./Components/Experiences/Experiences";
import { Knowledge } from "./Components/Knowledge/Knowledge";
import Media from "./Components/Media/Media";
import Sidebar from "./Components/Sidebar/Sidebar.jsx";
import { Whoami } from "./Components/Whoami/Whoami";

function App() {
  return (
    <div className='App-bg'>
      <div className='App'>
        <Grid container className='desktop'>
          <Grid xs={12} sm={12} md={3}>
            <Sidebar></Sidebar>
          </Grid>
          <Grid sm={6} md={9}>
            <Routes>
              <Route path='/'></Route>
              <Route path='/whoami' element={<Whoami />}></Route>
              <Route path='/experiences' element={<Experiences />}></Route>
              <Route path='/knowledge' element={<Knowledge />}></Route>
              <Route path='/contact' element={<Contact />}></Route>
            </Routes>
          </Grid>
          <Grid></Grid>
        </Grid>

        <div className='mobile-view'>
          <div className='mobile-cont'>
            <div className='accordeon-cont'>
              <div className='accordeon'>
                <Accordion className='navegator'>
                  <AccordionSummary
                    aria-controls='panel1a-content'
                    id='panel1a-header'
                  >
                    <Typography style={{ color: "rgb(114, 234, 248)" }}>
                      Who am I?
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      <Whoami></Whoami>
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion className='navegator'>
                  <AccordionSummary
                    aria-controls='panel1a-content'
                    id='panel1a-header'
                  >
                    <Typography style={{ color: "rgb(114, 234, 248)" }}>
                      Experiences
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      <Experiences></Experiences>
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion className='navegator'>
                  <AccordionSummary
                    aria-controls='panel1a-content'
                    id='panel1a-header'
                  >
                    <Typography style={{ color: "rgb(114, 234, 248)" }}>
                      Knowledge
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      <Knowledge></Knowledge>
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion className='navegator'>
                  <AccordionSummary
                    aria-controls='panel1a-content'
                    id='panel1a-header'
                  >
                    <Typography style={{ color: "rgb(114, 234, 248)" }}>
                      Contact me!
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      <Contact></Contact>
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </div>
            </div>
            <Media></Media>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
