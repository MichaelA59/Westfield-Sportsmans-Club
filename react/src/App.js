import React, { Component } from 'react';
import { Router, Route, Link, browserHistory } from 'react-router';
import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import RangeInfo from './components/RangeInfo';
import Facilities from './components/Facilities';
import Archery from './components/Archery';
import Events from './components/Events';
import About from './components/About';
import Membership from './components/Membership';
import Fid from './components/Fid';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {}
  }

  render() {
    return(
      <Router history={browserHistory}>
        <Route path='/' component={NavBar} />
        <Route path='/home' component={HomePage} />
        <Route path='/range' component={RangeInfo} />
        <Route path='/facilities' component={Facilities} />
        <Route path='/archery' component={Archery} />
        <Route path='/events' component={Events} />
        <Route path='/about' component={About} />
        <Route path='/membership' component={Membership} />
        <Route path='/fid' component={Fid} />
      </Router>
    )
  }
}

export default App;
