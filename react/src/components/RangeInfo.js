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
      selectedRangeId: 0,
      selectedRangeInfo: {}
    }
    this.handleRangeSelect = this.handleRangeSelect.bind(this);
  }

  handleRangeSelect(id) {
    let newId = id
    let rangeInfo = this.state.RangesArray[newId - 1]
    this.setState({
      selectedRangeId: newId,
      selectedRangeInfo: rangeInfo
    })
  }

  render () {
    // Just the name of the range to click on
    // Will activate the information to be displayed for that range
    // to the right of the links on the left

    let ranges = this.state.RangesArray.map(range => {
      // Styling className for User selected Range
      let className = '';
      if(this.state.selectedRangeId === range.id) {
        className="selected";
      }
      // Change state of selected Range ID
      let handleRangeSelect = () => {
        this.handleRangeSelect(range.id)
      }

      return(
        <RangeName
          key={range.id}
          id={range.id}
          name={range.rangeName}
          className={className}
          handleRangeSelect={handleRangeSelect}
        />
      )
    })

    return(
      <div className='row'>
        <div className='columns small-12 medium-4'>
          <h1 className='text-center'>Shooting Ranges</h1>
          {ranges}
        </div>
        <div className='columns small-12 medium-8'>
          <h1 className='text-center'>{this.state.selectedRangeInfo.rangeName}</h1>
          <ShootingRange
            key={this.state.selectedRangeInfo.id}
            id={this.state.selectedRangeInfo.id}
            text={this.state.selectedRangeInfo.header}
            images={this.state.selectedRangeInfo.images}
          />
        </div>
      </div>
    )
  }
}

export default RangeInfo;
