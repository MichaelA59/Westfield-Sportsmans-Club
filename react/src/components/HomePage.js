import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';

const HomePage = (props) => {
    return(
      <div className='row'>

        <div className='row'>
          <div className='columns small-12 text-center'>
            <h1>Westfield Sportsmans Club</h1>
          </div>
        </div>

        <div className='row'>
          <div className='columns small-12 text-center'>
            <p>
            The Westfield Sportsmens Club is a member driven organization that
            provides a safe place for its members to enjoy the shooting sports,
            archery, fishing, and good company. We are located on over 375 acres
            of beautiful land that not only includes the ranges, but a wooded
            archery course, and stocked pond.
            </p>
          </div>
        </div>

        <div className='row'>
          <div className='columns small-12'>
            <img
              className='text-center'
              src="http://www.westfieldsportsmansclub.com/images/20151128_092326.jpg"
              width='1280'
              height='720'
            />
          </div>
        </div>
      </div>
    )
  }

export default HomePage;
