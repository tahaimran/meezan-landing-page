import React from 'react';
import './Header.css'
import Logo from '../Images/logo.png';
import {Link} from 'react-scroll';
import {animateScroll as Scroll} from 'react-scroll'
function Header(){
    return(
        <>
      <nav className="navbar">
        <div className="container-fluid ">
          <img className="navbar-brand img-fluid " onClick={()=> Scroll.scrollToTop()}  src={Logo} />
          <div className="nav d-flex justify-space-around" id="navbarSupportedContent">
            <ul className="nav mb-2 p-2 mb-lg-0">
              <li className="nav-item">
                <p className="nav-link ">
                <Link to='Features' smooth={true} duration={1000}>Feature</Link>  
                  </p>
              </li>
              <li className="nav-item">
                <p className="nav-link ">
                <Link to='Mission' smooth={true} duration={1000}>Mission</Link>
                </p>
              </li>
              <li className="nav-item">
                <p className="nav-link">
                <Link to='Team' smooth={true} duration={1000}>Team</Link> 
                </p>
              </li>
              <li className="nav-item">
                <p className="nav-link ">
                <Link to='About' smooth={true} duration={1000}>About Us</Link>
                </p>
              </li>
              <li className="nav-item">
                <p className="nav-link ">
                <Link to='Contact' smooth={true} duration={1000}>Contact Us</Link>
                </p>
              </li>
            </ul>
          </div>
        </div>
      </nav>

    </>
    )
}
export default Header;