import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';

const Events = (props) => {
    return(
      <div>
        <button onClick={browserHistory.goBack}>Go Back</button>
        <h1>Events Page</h1>
      </div>
    )
  }

export default Events;
