import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom'
import ReactDOM from 'react-dom';
import App from './App';

$(function() {
  ReactDOM.render(
    <App />,
    document.getElementById('app')
  );
});
