import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';

class ShootingRange extends React.Component {
  constructor(props){
    super(props)
    this.state = {

    }
  }

  render(){
    let images = this.props.data.images.map(image => {
      return image
    })

    return(
      <div>
        <h3>{this.props.data.RangeName}</h3>
        <p>{this.props.data.header}</p>
        <img src={`${this.props.data.images}`}/>
      </div>
    )
  }
}
export default ShootingRange;


<img src="http://www.westfieldsportsmansclub.com/images/20151128_092326.jpg" />
