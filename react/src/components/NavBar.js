import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';

const NavBar = (props) => {
    return (
      <div>
        <div className='top-bar'>
          <div className='top-bar-left'>
            <ul className='logo'>
              <li className='logo-text'><Link to='/'>Westfield Sportsmans Club</Link></li>
            </ul>
          </div>

          <div className='top-bar-right'>
            <ul className='nav navbar-nav'>
              <li><Link to='/range'>Range Information</Link></li>
              <li><Link to='/facilities'>Facilities</Link></li>
              <li><Link to='/archery'>Archery</Link></li>
              <li><Link to='/events'>Events</Link></li>
              <li><Link to='/about'>About</Link></li>
              <li><Link to='/membership'>Membership</Link></li>
              <li><Link to='/fid'>Fid</Link></li>
            </ul>
          </div>
        </div>
      </div>
    )
  }

export default NavBar;
