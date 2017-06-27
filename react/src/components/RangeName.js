import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';

class RangeName extends React.Component {
  constructor(props){
    super(props)
    this.state = {}
  }

  render(){
    return(
      <div>
        <ul>
          <li onClick={this.props.handleClick}>{this.props.name}</li>
        </ul>
      </div>
    )
  }
}
export default RangeName;
