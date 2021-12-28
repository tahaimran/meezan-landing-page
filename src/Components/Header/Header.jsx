import React from 'react';
import './Header.css'
import Logo from '../Images/logo.png'
function Header(){
    return(
        <>
      <nav className="navbar">
        <div className="container-fluid ">
          <img className="navbar-brand img-fluid" src={Logo} />
          <div className="nav d-flex justify-space-around" id="navbarSupportedContent">
            <ul className="nav mb-2 p-2 mb-lg-0">
              <li className="nav-item">
                <p className="nav-link ">Feature</p>
              </li>
              <li className="nav-item">
                <p className="nav-link">Team</p>
              </li>
              <li className="nav-item">
                <p className="nav-link ">Why Us</p>
              </li>
            </ul>
          </div>
        </div>
      </nav>

    </>
    )
}
export default Header;