import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Landing from './components/Dashboard/Landing'
import Navbar from './components/Layout/Navbar'
import SignIn from './components/Auth/SignIn'
import SignUp from './components/Auth/SignUp'
import Alert from './components/Layout/Alert'
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          {/* <Navbar /> */}
          <Alert />
          <div className="mt-4"></div>
          <Switch>
            <Route path='/' component={Landing} />
            <Route exact path='/signIn' component={SignIn} /> 
            <Route path='/signUp' component={SignUp} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;
