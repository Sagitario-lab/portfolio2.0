import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className='portfolio-cont'>
      <h1 className='portfolio'>Portfolio</h1>

      <div className='link-cont'>
        <Link className='navegator'>Who am I?</Link>
        <Link className='navegator'>Experiences</Link>
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
      </div>
    </div>
  );
};

export default Sidebar;
