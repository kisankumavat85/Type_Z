import React, { useState } from "react"
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux'

import MobileMenu from "../Components/MobileMenu"
import "../styles/Nav.css"
import Search from "./Search";


const Nav = () => {

  const isLoggedIn = useSelector(state => state.idFor.isLoggedIn)
  const [menuClicked, setMenuClicked] = useState(false)

  if (menuClicked) {
    return <MobileMenu setMenuClicked={setMenuClicked} />
  }

  return (
    <div className="nav-container">
      <div className="menu-bars">
        <button onClick={() => setMenuClicked(true)}>
          <i class="fas fa-bars"></i>
        </button>
      </div>
      <div className="logo-div" >
        <Link to="/">
          <span>TYPE Z</span>
        </Link>
      </div>
      <ul className="menu">
        <Link to="/mobile" style={{ TextDecoration: "none" }}>
          <li>MOBILE</li>
        </Link>
        <Link to="/computer">
          <li>COMPUTER</li>
        </Link>
        <Link to="/science">
          <li>SCIENCE</li>
        </Link>
        {
          isLoggedIn ? <Link to="/login"><li>DASHBOARD</li></Link> : <Link to="/login"><li>LOGIN</li></Link>
        }
      </ul>

      <Search />

      <div className="mobile-search">
        <button onClick={() => setMenuClicked(true)}>
          <i class="fas fa-search"></i>
        </button>
      </div>

    </div>
  )
}

export default Nav;