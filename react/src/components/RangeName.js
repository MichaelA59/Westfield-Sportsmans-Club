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
      <div className='list-of-ranges' onClick={this.props.handleRangeSelect}>
        {this.props.name}
      </div>
    )
  }
}
export default RangeName;
