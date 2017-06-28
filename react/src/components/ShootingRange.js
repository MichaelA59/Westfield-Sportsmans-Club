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

    if(this.props.images.size) > 1 {
      x = 0
      y = 1
      image[y] = `${this.props.images[x]}`
      x++
      y++
    }




    return(
      <div>
        <p>{this.props.text}</p>
        <img src={`${this.props.images}`}/>
      </div>
    )
  }
}
export default ShootingRange;
