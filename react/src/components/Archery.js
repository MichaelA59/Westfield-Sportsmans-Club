import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';

const Archery = (props) => {
  return(
    <div>
      <div className='row'>
        <div className='columns small-12 text-center'>
          <h1> Archery Range </h1>
        </div>
      </div>

      <div className='row'>
        <div className='columns small-12 large-5'>
          <h5> Features </h5>
          <ul>
            <li>7 Practice Lanes</li>
            <li>20 | 25 | 30 | 35| 40 | 45 | 50</li>
            <li>90 Meter FITA Olympic Range</li>
            <li>3D Target Lane</li>
            <li>14 Target MFAA Feild Archery Range</li>
            <li>30 Target Course for 3D Shoots</li>
          </ul>
        </div>
        <div className='columns small-12 large-5'>
          <img
            src='http://www.westfieldsportsmansclub.com/images/2012-08-27_09-08-18_698.jpg'
            width='500'
            height='500'
          />
          <img
            src='http://www.westfieldsportsmansclub.com/images/2012-08-27_09-08-28_450.jpg'
            width='500'
            height='500'
          />
        </div>
      </div>

      <div className='row'>
        <div className='columns small-12 text-center'>
          <button onClick={browserHistory.goBack} className='back-button'> Go Back </button>
        </div>
      </div>
    </div>
  )
}

export default Archery;
