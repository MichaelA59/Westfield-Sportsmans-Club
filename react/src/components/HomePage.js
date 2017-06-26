import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';

const HomePage = (props) => {
    return(
      <div>
        <button onClick={browserHistory.goBack}>Go Back</button>
        <h1>HomePage Page</h1>
      </div>
    )
  }

export default HomePage;
