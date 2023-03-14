import React from "react";
import { Link } from "react-router-dom";
import './PortfolioTtl.css'

const PortfolioTtl = () => {
  return (
    <Link className='portfolio' to='/'>
      Portfolio
    </Link>
  );
};

export default PortfolioTtl;
