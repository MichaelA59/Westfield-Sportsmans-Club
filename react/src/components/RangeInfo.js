import 'babel-polyfill';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';

class RangeInfo extends Component {
  constructor(props){
    super(props)
    this.state = {
      whichRange: 'default'
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
    this.setState({ whichRange: 'highpower'})
  }

  handleMuzzelChange() {
    this.setState({whichRange: 'muzzleloader'})
  }

  handleOutdoorChange() {
    this.setState({whichRange: 'handgunrimfire'})
  }

  handleTrapChange() {
    this.setState({whichRange: 'trap'})
  }

  handleSkeetChange() {
    this.setState({whichRange: 'skeet'})
  }

  handleIndoorOutdoorChange() {
    this.setState({whichRange: 'indooroutdoor'})
  }

  handlePatternBoardsChange() {
    this.setState({whichRange: 'patternboards'})
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
