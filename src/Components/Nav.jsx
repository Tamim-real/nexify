import React from 'react';
import Logo from '../assets/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { Link, NavLink } from 'react-router';



const Nav = () => {
    return (
        <div className="navbar bg-base-100 shadow-sm inter">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow font-semibold">
        <NavLink to='/'>Home</NavLink>
        <li>
          <NavLink to='/apps'>Apps</NavLink>
          
        </li>
        <li><a>Installation</a></li>
      </ul>
    </div>
    
    <a className="btn btn-ghost text-2xl bg-gradient-to-l from-[#9F62F2] to-[#632EE3] bg-clip-text text-transparent"><img src={Logo} className='w-11' alt="" />HERO.IO</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><NavLink to='/'>Home</NavLink></li>
      <li>
        
          <summary><NavLink to='/apps'>Apps</NavLink></summary>
          
        
      </li>
      <li><NavLink to='/installed-apps'>Installation</NavLink></li>
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn bg-gradient-to-l from-[#9F62F2] to-[#632EE3] text-white"><FontAwesomeIcon icon={faGithub} className='text-2xl' />Contribute</a>
  </div>
</div>
    );
};

export default Nav;