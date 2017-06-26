import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';

const NavBar = (props) => {
    return (
      <div>
        <div className='navbar navbar-default'>
          <div className='container'>
            <div className='navbar-header pull-left'>

              <ul className='nav navbar-nav'>
                <li className='active'>
                  <Link to='/home'>Home</Link>
                </li>
              </ul>

              <div className='navbar-header'>
                <ul className='nav navbar-nav'>
                  <li>
                    <Link to='/range'>Range Info</Link>
                  </li>
                </ul>
              </div>

              <div className='navbar-header'>
                <ul className='nav navbar-nav'>
                  <li>
                    <Link to='/facilities'>Facilities</Link>
                  </li>
                </ul>
              </div>

              <div className='navbar-header'>
                <ul className='nav navbar-nav'>
                  <li>
                    <Link to='/archery'>Archery</Link>
                  </li>
                </ul>
              </div>

              <div className='navbar-header'>
                <ul className='nav navbar-nav'>
                  <li>
                    <Link to='/events'>Events</Link>
                  </li>
                </ul>
              </div>

              <div className='navbar-header'>
                <ul className='nav navbar-nav'>
                  <li>
                    <Link to='/about'>About</Link>
                  </li>
                </ul>
              </div>

              <div className='navbar-header'>
                <ul className='nav navbar-nav'>
                  <li>
                    <Link to='/membership'>Membership</Link>
                  </li>
                </ul>
              </div>

              <div className='navbar-header'>
                <ul className='nav navbar-nav'>
                  <li>
                    <Link to='/fid'>Fid</Link>
                  </li>
                </ul>
              </div>
              
            </div>
          </div>
        </div>
      </div>
      )
    }

export default NavBar;
