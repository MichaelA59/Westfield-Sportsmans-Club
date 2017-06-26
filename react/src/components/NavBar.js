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
                    <Link to='/RangeInfo'>Range Info</Link>
                  </li>
                </ul>
              </div>

              <div className='navbar-header'>
                <ul className='nav navbar-nav'>
                  <li>
                    <Link to='/Facilities'>Facilities</Link>
                  </li>
                </ul>
              </div>

              <div className='navbar-header'>
                <ul className='nav navbar-nav'>
                  <li>
                    <Link to='/Archery'>Archery</Link>
                  </li>
                </ul>
              </div>

              <div className='navbar-header'>
                <ul className='nav navbar-nav'>
                  <li>
                    <Link to='/Events'>Events</Link>
                  </li>
                </ul>
              </div>

              <div className='navbar-header'>
                <ul className='nav navbar-nav'>
                  <li>
                    <Link to='/About'>About</Link>
                  </li>
                </ul>
              </div>

              <div className='navbar-header'>
                <ul className='nav navbar-nav'>
                  <li>
                    <Link to='/Membership'>Membership</Link>
                  </li>
                </ul>
              </div>

              <div className='navbar-header'>
                <ul className='nav navbar-nav'>
                  <li>
                    <Link to='/Fid'>Fid</Link>
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
