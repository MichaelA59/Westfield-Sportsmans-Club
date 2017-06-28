import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';

class ShootingRange extends React.Component {
  constructor(props){
    super(props)
    this.state = {}
  }

  render(){
    return(
      <div className='text-center'>
        <p>{this.props.text}</p>
        <img
          src={`${this.props.images}`}
          width='500'
          height='300'
        />
      </div>
    )
  }
}
export default ShootingRange;
