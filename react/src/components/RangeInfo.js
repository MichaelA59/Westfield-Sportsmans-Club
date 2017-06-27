import 'babel-polyfill';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';
import RangesArray from '../constants/RangesArray';
import RangeName from '../components/RangeName';
import ShootingRange from '../components/ShootingRange';

class RangeInfo extends Component {
  constructor(props){
    super(props)
    this.state = {
      RangesArray,
      selectedRange: 0
    }
    this.rangeClick = this.rangeClick.bind(this);
    this.selectedRange = this.selectedRange.bind(this);
  }

  rangeClick(event) {
    debugger
    event.preventDefault()
    this.setState({selectedRange: event.target.id})
  }

  selectedRange() {
    return this.state.RangesArray.find((range) =>
    (range.id === this.state.selectedRange))
  }

  render () {
    // Just the name of the range to click on
    // Will activate the information to be displayed for that range
    // to the right of the links on the left

    let rangeNameLinks = this.state.RangesArray.map(range => {
      return(
        <RangeName
        key={range.id}
        id={range.id}
        name={range.rangeName}
        isSelected={this.state.selectedRange === range.id}
        />
      )
    })

    // Range information that will be dynamically rendered based on
    // User choice (onClick) to the left

    let rangeInformation = RangesArray.map(range => {
      return(
        <ShootingRange
        key={range.id}
        data={range}
        isSelected={this.state.selectedRange === range.id}
        handleClick={this.rangeClick}
        />
      )
    })

    return(
      <div className='row'>
        <div className='columns small-12 medium-3'>
          <h1>Shooting Ranges</h1>
          {rangeNameLinks}
        </div>
        <div className='columsn small-12 medium-9'>
          {rangeInformation}
        </div>
      </div>
    )
  }
}

export default RangeInfo;
