import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';

const Facilities = (props) => {
    return(
      <div>
        <div className='row'>
          <div className='row'>
            <div className='columns small-12 text-center'>
              <h1>Our Facilities</h1>
            </div>
          </div>
          <div className='columns small-12 medium-5'>
            <h5>What we offer</h5>
            <ul>
              <li>Clubhouse</li>
              <li>Modern Facilities</li>
              <li>Key Card Access</li>
              <li>Handicap Accessible</li>
            </ul>
            <p>Notice: Meetings are held the 3rd Monday of the month at 7:30pm</p>
          </div>
          <div className='columns small-12 medium-5'>
            <img
              src="http://www.westfieldsportsmansclub.com/images/2012-06-07_08-33-32_47.jpg"
              width='400'
              height='400'
            />
            <img
              src="http://www.westfieldsportsmansclub.com/images/2012-06-07_08-44-52_482.jpg"
              width='400'
              height='400'
            />
          </div>
        </div>

        <div className='row'>
          <div className='columns small-12 text-center'>
            <button onClick={browserHistory.goBack}>Go Back</button>
          </div>
        </div>
      </div>
    )
  }

export default Facilities;
