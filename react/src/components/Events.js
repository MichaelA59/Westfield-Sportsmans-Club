import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';

const Events = (props) => {
  return(
  <div>
    <div className='row'>
      <div className='columns small-12 text-center'>
        <h1> Events </h1>
      </div>
    </div>

    <div className='row'>
      <div className='columns small-12 text-center'>
        <h5> We host events throughout the year </h5>
        <h5> Trap & Skeet | Archery | Fishing | Rimfire Competitions | Long Range High Power Shoots </h5>
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

export default Events;
