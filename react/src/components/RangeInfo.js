import 'babel-polyfill';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';
import RangesArray from '../constants/RangesArray';

class RangeInfo extends Component {
  constructor(props){
    super(props)
    this.state = {
      RangesArray,
      selectedRange: RangesArray[0].id
    }
    this.handleHighPowerChange = this.handleHighPowerChange.bind(this);
    this.handleMuzzelChange = this.handleMuzzelChange.bind(this);
    this.handleOutdoorChange = this.handleOutdoorChange.bind(this);
    this.handleTrapChange = this.handleTrapChange.bind(this);
    this.handleSkeetChange = this.handleSkeetChange.bind(this);
    this.handleIndoorOutdoorChange = this.handleIndoorOutdoorChange.bind(this);
    this.handlePatternBoardsChange = this.handlePatternBoardsChange.bind(this);
  }

  handleHighPowerChange() {
    <HighPower />
  }

  handleMuzzelChange() {
    this.setState({whichRange: 'MuzzleLoader'})
  }

  handleOutdoorChange() {
    this.setState({whichRange: 'HandgunRimfire'})
  }

  handleTrapChange() {
    this.setState({whichRange: 'Trap'})
  }

  handleSkeetChange() {
    this.setState({whichRange: 'Skeet'})
  }

  handleIndoorOutdoorChange() {
    this.setState({whichRange: 'IndoorOutdoor'})
  }

  handlePatternBoardsChange() {
    this.setState({whichRange: 'PatternBoards'})
  }

  render () {
    return(
      <div className='different-ranges'>
        <ul>
          <li onClick={this.handleHighPowerChange}>High Power</li>
          <li onClick={this.handleMuzzelChange}>Muzzel Loader and Shotgun</li>
          <li onClick={this.handleOutdoorChange}>Outdoor Handgun and Rimfire Rifles</li>
          <li onClick={this.handleTrapChange}>Trap</li>
          <li onClick={this.handleSkeetChange}>Skeet</li>
          <li onClick={this.handleIndoorOutdoorChange}>Indoor/Outdoor</li>
          <li onClick={this.handlePatternBoardsChange}>PatternBoards</li>
        </ul>

        <button onClick={browserHistory.goBack}>Go Back</button>
      </div>
    )
  }
}

export default RangeInfo;
