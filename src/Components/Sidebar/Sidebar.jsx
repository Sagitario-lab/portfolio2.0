import React from "react";
import { Link } from "react-router-dom";
import Media from "../Media/Media";
import PortfolioTtl from "../PortfolioTtl/PortfolioTtl";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className='portfolio-cont'>
      <div className='sec-cont'>
        <PortfolioTtl/>
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
          <Media />
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
