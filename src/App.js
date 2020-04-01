import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/Layout/Navbar'
import SignIn from './components/Auth/SignIn'
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path='/signIn' Component={SignIn} /> 
            <Route path='/signUp' Component={SignUp} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
