import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';

const HomePage = (props) => {
    return(
      <div>
        <h1 className='text-center'>Westfield Sportsmans Club</h1>
        <h5 className='text-center'>
          The Westfield Sportsmens Club is a member driven organization that
          provides a safe place for its members to enjoy the shooting sports,
          archery, fishing, and good company. We are located on over 375 acres
          of beautiful land that not only includes the ranges, but a wooded
          archery course, and stocked pond.
        </h5>
        <img src="http://www.westfieldsportsmansclub.com/images/20151128_092326.jpg" />
        <button onClick={browserHistory.goBack}>Go Back</button>
      </div>
    )
  }

export default HomePage;
