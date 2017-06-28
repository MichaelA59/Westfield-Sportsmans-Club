import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';

const Membership = (props) => {
  return(
    <div>
      <div className='row'>
        <div className='columns small-12 text-center'>
          <h1> Membership Information </h1>
        </div>
      </div>

      <div className='row'>
        <div className='columns small-12 large-5'>
          <h3> Membership Fees </h3>
          <ul>
            <li>Family Member - $75 </li>
            <li>Senior(65+) - $45 </li>
            <li>Disabled - $45 </li>
            <li>Associate - $35 </li>
          </ul>
          <h4> CASH OR CHECK ONLY </h4>
        </div>
        <div className='columns small-12 large-5'>
          <h3> Notice </h3>
          <p> All Memberships expire 09/30 regardless of purchase date </p>
          <p> Signups are available at the following times </p>
          <p> Mon-Fri 9am-Noon | Sat & Sun 9am - 2pm </p>
        </div>
      </div>

      <div className='row'>
        <div className='columns small-12 large-5'>
          <h1> Requirements </h1>
          <ul>
            <li>Valid Pistol Permit (A or B), FID or Class C </li>
            <li>Membership is restricted based on license </li>
            <li>People without FID or Pistol Permit are restricted to the following </li>
            <li>Black Powder | Archery | Airguns | Use of Pond </li>
            <li>Youth Memberships available for ages 12-18 with valid FID & accompanied gardian at all times </li>
          </ul>
        </div>
        <div className='columns small-12 large-5'>
          <h1> Range Rules </h1>
          <ul>
            <li><a href='http://www.westfieldsportsmansclub.com/forms/pg1.JPG'>Part 1</a></li>
            <li><a href='http://www.westfieldsportsmansclub.com/forms/pg2.JPG'>Part 2</a></li>
            <li><a href='http://www.westfieldsportsmansclub.com/forms/pg3.JPG'>Part 3</a></li>
          </ul>
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

export default Membership;
