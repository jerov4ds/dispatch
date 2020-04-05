import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './components/Layout/Navbar'
import SignIn from './components/Auth/SignIn'
import SignUp from './components/Auth/SignUp'
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path='/signIn' component={SignIn} /> 
            <Route path='/signUp' component={SignIn} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;
