import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';

const About = (props) => {
  return(
    <div>
      <div className='row'>
        <div className='columns small-12 text-center'>
          <h1> About </h1>
        </div>
      </div>

      <div className='row'>
        <div className='columns small-12 large-5'>
          <h3> Contact Us </h3>
          <p> 413-562-0771 </p>
          <h3> Address </h3>
          <p> P.O Box 56 </p>
          <p> Furrowtown Rd. </p>
          <p> Westfield, MA 01085 </p>
        </div>
        <div className='columns small-12 large-5'>
          <h1> Directions </h1>
          <ul>
            <li> From Mass Pike, Take Exit 3 (Westfield) </li>
            <li> Right onto Rte. 10/202 for .5 miles </li>
            <li> Right on Notre Dame St. continue for .5 miles </li>
            <li> Right onto Montgomery Rd. continue for about a mile </li>
            <li> Left onto Furrowtown Rd. continue straight to Club entrance </li>
          </ul>
        </div>
      </div>

      <div className='row'>
        <div className='columns small-12 text-center'>
          <a href='http://www.westfieldsportsmansclub.com/fliers/WSC%20flier.pdf'>
            Check Out Our Brochure!
          </a>
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

export default About;
