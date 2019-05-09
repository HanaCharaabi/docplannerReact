import React, { Component } from 'react';
import './header.css';
import logo from '../../Docplanner-files/logo-default-group-en.svg'

class Header extends Component {
  state = {  }
  render() { 
    return ( 
    <div className ="top">
        <div className="top-center">
            <h1>
                    <a href="https://www.docplanner.com/">
                        <img  className="logo-DG" src={logo} alt="logo" />
                    </a>
            </h1>
           

            <nav className="nav-bar">	
               <ul className="menu">
                 <li className="menu-items"> <a href="/about-us" id="is-current">About us</a></li>
                 <li className="menu-items">	<a href="/career">Career</a></li>
                 <li className="menu-items drop">
                        <a>
                        Departments<br/>
                        </a>
                        <ul id="drop-menu">
                            <li> Marketing &amp; PR</li>
                            <li>Customer Success &amp; Sales</li>
                            <li>IT, Product, Design &amp; UX</li>
                            <li>Finance &amp; Administration</li>
                            <li>HR &amp; more</li>
                        </ul>
                  </li>
               </ul>
            </nav>
        </div>
    </div> 
     );
  }
}
 
export default Header;