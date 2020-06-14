import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Landing from './components/Dashboard/Landing'
import SendItem from './components/Dashboard/SendItem'
import Profile from './components/Dashboard/Profile'
import SignIn from './components/Auth/SignIn'
import SignUp from './components/Auth/signUp'
import Alert from './components/Layout/Alert'
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Alert />
          <Switch>
            <Route exact path='/' component={Landing} />
            <Route path='/signIn' component={SignIn} /> 
            <Route path='/signUp' component={SignUp} />
            <Route path='/profile' component={Profile} />
            <Route path='/sendItem' component={SendItem} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;
