import React, { Component } from 'react'
import {Input} from '../Input'
import { Redirect } from 'react-router-dom'
import { SignInUser } from '../../store/actions/authActions'
import Logo from '../../logo_white.png'
import { connect } from 'react-redux'

class SignIn extends Component  {
    state = {
        email: '',
        password: '',
        errors: {}
    }
    handleChangeEmail = (e) => {
        const value = e.target.value;
        const errors = {...this.state.errors};
        delete errors.email
        this.setState({email: value, errors})
    }
    handleChangePassword = (e) => {
        const value = e.target.value;
        const errors = {...this.state.errors};
        delete errors.password;
        this.setState({password: value, errors})
    }
    validate = () => {
        let emailError = "";
        let passwordError = "";
        const errors = {...this.state.errors};

        if (!this.state.email) {
            emailError = 'Email address is required';
        }
        if(emailError) errors.email = emailError;

        if (!this.state.password) {
            passwordError = 'Password is required';
        } 
        if(passwordError) errors.password = passwordError;

        this.setState({errors});
        
        console.log(Object.keys(errors).length);
        if(Object.keys(errors).length === 0) return true;
        return false;
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const isValid = this.validate();
        if(isValid) this.props.signIn(this.state);
        console.log(isValid);
        console.log(this.state);
    }
    render() {
        const { auth } = this.props;
        if(auth.uid) return <Redirect to="/" />
        return (
            <div className="container register">
            <form method="POST" action="" id="form" onSubmit={this.handleSubmit} acceptCharset="UTF-8">
            <div className="row">
                <div className="col-md-3 register-left">
                    <img src={Logo} alt=""/>
                    <h3>Welcome</h3>
                    <p style={{padding: "8%"}}>You are 30 seconds away from earning your own money!</p>
                    <a href="/signup" className="btn login-link" style={{marginTop: "0"}}>Register</a><br/>
                </div>
                <div className="col-md-9 register-right">
                    <div className="tab-content" id="myTabContent">
                        <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                            <h3 className="register-heading">Sign In</h3>
                            <div className="row register-form">
                                <div className="col-md-6 offset-md-3">
                                    <Input
                                        placeholder="Email Address"
                                        type="email"
                                        id="email"
                                        onChange={this.handleChangeEmail}
                                        hasError={this.state.errors.email && true}
                                        error = {this.state.errors.email}
                                    />
                                    
                                    <Input
                                        placeholder="Password *"
                                        type="password"
                                        id="password"
                                        onChange={this.handleChangePassword}
                                        hasError={this.state.errors.password && true}
                                        error = {this.state.errors.password}
                                    />

                                    <input type="submit" className="btnRegister"  value="Login"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </form>
        </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        authError: state.auth.authError,
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signIn :  (creds) => dispatch(SignInUser(creds))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)