import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';

const Fid = (props) => {
  return(
    <div>
      <div className='row'>
        <div className='columns small-12 text-center'>
          <h1> FID & LTC Inquiries </h1>
        </div>
      </div>

      <div className='row'>
        <div className='columns small-12 large-5'>
          <h4>License Application Status Request </h4>
          <p>Department of Criminal Justice Services - (617)660-4722</p>
          <p>Monday-Friday 8am-6pm</p>
        </div>
        <div className='columns small-12 large-5'>
          <h4>Required Information</h4>
          <p>Name | Date of Birth | Active LTC, FID license number | Drivers License </p>
        </div>
      </div>

      <div className='row'>
        <div className='columns small-12 text-center'>
          <p>For all other license status questions, call the Firearms Record Burearu at (617)660-4782</p>
        </div>
      </div>

      <div className='row'>
        <div className='columns small-12 text-center'>
          <button onClick={browserHistory.goBack} className='back-button'>Go Back</button>
        </div>
      </div>
    </div>
  )
}

export default Fid;
