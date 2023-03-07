import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className='portfolio-cont'>
      <h1 className='portfolio'>Portfolio</h1>

      <nav className='link-cont'>
        <Link className='navegator' to={"/whoami"}>Who am I?</Link>
        <Link className='navegator' to="/experiences">Experiences</Link>
        <Link className='navegator'>Knowledge</Link>
        <Link className='navegator'>Contact me!</Link>
        <div className='git-linkedin-cont'>
          <a
            href='https://github.com/Sagitario-lab'
            target='_blank'
            rel='noreferrer'
          >
            <i className='pi pi-github git-linkedin'></i>
          </a>
          <a
            href='linkedin.com/in/ignacio-ulman-49b997240'
            target='_blank'
            rel='noreferrer'
          >
            <i className='pi pi-linkedin git-linkedin'></i>
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
