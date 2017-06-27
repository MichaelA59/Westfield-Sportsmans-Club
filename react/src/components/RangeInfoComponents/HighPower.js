import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';

const HighPower = (props) => {
    return(
      <div>
        <h1>HighPower</h1>
        <p>More info on our High Power range will be comiong soon!</p>
        <button onClick={browserHistory.goBack}>Go Back</button>
      </div>
    )
  }

export default HighPower;
