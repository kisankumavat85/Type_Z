import React from 'react'
import { Link } from "react-router-dom";

import "../styles/MobileMenu.css"
import MobileSearch from './MobileSearch';

const MobileMenu = ({ setMenuClicked }) => {

  const handleMenuClose = () => {
    setMenuClicked(false)
  }

  return (

    <div className="mobile-menu-container">
      <div className="menu-close">
        <button onClick={handleMenuClose}>
          <i class="fas fa-times"></i>
        </button>
      </div>

      <MobileSearch setMenuClicked={setMenuClicked} />

      <ul className="mobile-menu">
        <Link to="/mobile" onClick={handleMenuClose}>
          <li>MOBILE</li>
        </Link>
        <Link to="/computer" onClick={handleMenuClose}>
          <li>COMPUTERS</li>
        </Link>
        <Link to="/science" onClick={handleMenuClose}>
          <li>SCIENCE</li>
        </Link>
        <Link to="/login" onClick={handleMenuClose}>
          <li>LOGIN</li>
        </Link>
      </ul>
    </div>
  )
}

export default MobileMenu
