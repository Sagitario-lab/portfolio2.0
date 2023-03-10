import React from "react";
import { Link } from "react-router-dom";
import { Knowledge } from "../Knowledge/Knowledge";
import { Whoami } from "../Whoami/Whoami";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className='portfolio-cont'>
      <div className='sec-cont'>
        <Link className='portfolio' to="/">Portfolio</Link>

        <nav className='link-cont'>
          <Link className='navegator' to={"/whoami"}>
            Who am I?
          </Link>
         
          <Link className='navegator' to={"/experiences"}>
            Experiences
          </Link>
          <Link className='navegator' to={"/knowledge"}>
            Knowledge
          </Link>
          <Link className='navegator' to={"/contact"}>
            Contact me!
          </Link>
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
    </div>
  );
};

export default Sidebar;
