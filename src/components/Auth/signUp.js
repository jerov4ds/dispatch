import React, { Component } from 'react'
import {Input, Select, Textarea} from '../Input'
import { connect } from 'react-redux'
import {signUp} from '../../store/actions/authActions'

class SignUp extends Component  {
    state = {
        first: '',
        last: '',
        email: '',
        phone: '',
        gender: 'Male',
        role: 'rider',
        image: '',
        confirm_password: '',
        errors: {},
        password: '',
        address: ''
    }

    handleChangeFirst = (e) => {
        const value = e.target.value;
        const errors = {...this.state.errors};
        delete errors.first;
        this.setState({first: value, errors});
    }

    handleChangeLast = (e) => {
        const value = e.target.value;
        const errors = {...this.state.errors};
        delete errors.last
        this.setState({last: value, errors})
    }

    handleChangeEmail = (e) => {
        const value = e.target.value;
        const errors = {...this.state.errors};
        delete errors.email
        this.setState({email: value, errors})
    }

    handleChangePhone = (e) => {
        const value = e.target.value;
        const errors = {...this.state.errors};
        delete errors.phone
        this.setState({phone: value, errors})
    }

    handleChangeGender = (e) => {
        const value = e.target.value;
        const errors = {...this.state.errors};
        delete errors.gender;
        this.setState({gender: value, errors});
        console.log(value);
    }

    handleChangeRole = (e) => {
        const value = e.target.value;
        const errors = {...this.state.errors};
        delete errors.role
        this.setState({role: value, errors})
    }

    handleChangeImage = (e) => {
        const value = e.target.value;
        const errors = {...this.state.errors};
        delete errors.image
        this.setState({image: value, errors})
    }

    handleChangeAddress = (e) => {
        const value = e.target.value;
        const errors = {...this.state.errors};
        delete errors.address
        this.setState({address: value, errors})
    }

    handleChangePassword = (e) => {
        const value = e.target.value;
        const passwordConfirmed = this.state.confirm_password === value;
        const errors = {...this.state.errors};
        delete errors.password;
        errors.confirm_password = passwordConfirmed ? '' : 'Passwords do not match';
        this.setState({password: value, passwordConfirmed, errors})
    }

    handleChangeConfirmPassword = (e) => {
        const value = e.target.value;
        const passwordConfirmed = this.state.password === value;
        const errors = {...this.state.errors};
        delete errors.confirm_password;
        errors.confirm_password = passwordConfirmed ? '': 'Passwords do not match';
        this.setState({confirm_password: value, passwordConfirmed, errors})
    }

    handleSubmit = (e) => {
        e.preventDefault();
        // console.log(this.props);
        console.log(this.state);
        this.props.signUp(this.state);
    }

    render() {
        return (
        <div className="container py-5">
            <div className="row">
                <div className="span4 card ">
                    <div  className="card-header">
                        <legend>Please Sign In</legend>
                    </div>
                    <div  className="card-body">
                        <form method="POST" action="" onSubmit={this.handleSubmit} acceptCharset="UTF-8">
                            <div className="form-row">
                                <Input 
                                    label = "First Name"
                                    placeholder="First name"
                                    id="first"
                                    onChange = {this.handleChangeFirst}
                                    hasError = {this.state.errors.first && true}
                                    error = {this.state.errors.first}
                                    
                                />
                                <Input 
                                    label = "Last Name"
                                    placeholder="Last Name"
                                    id="last"
                                    onChange = {this.handleChangeLast}
                                    hasError = {this.state.errors.last && true}
                                    error = {this.state.errors.last}
                                    
                                />
                                <Input
                                    label="Email Address"
                                    placeholder="Enter Email Address"
                                    type="email"
                                    col="col-sm-4"
                                    id="email"
                                    onChange={this.handleChangeEmail}
                                    hasError={this.state.errors.email && true}
                                    error = {this.state.errors.email}
                                />
                                <Input
                                    label="Phone"
                                    placeholder="Enter Phone Number"
                                    type="tel"
                                    col="col-sm-4"
                                    id="phone"
                                    onChange={this.handleChangePhone}
                                    hasError={this.state.errors.phone && true}
                                    error = {this.state.errors.phone}
                                />
                                <Select 
                                    label="Gender"
                                    onChange={this.handleChangeGender}
                                    col="col-sm-4"
                                    options={[
                                        {value : 'Male', option: 'Male'}, 
                                        {value: 'Female', option: 'Female'}
                                    ]}
                                />
                                <Input
                                    label="Picture"
                                    type="file"
                                    id="image"
                                    onChange={this.handleChangeImage}
                                    hasError={this.state.errors.image && true}
                                    error = {this.state.errors.image}
                                />
                                <Input
                                    label="Password"
                                    placeholder="Enter Your preferred password"
                                    type="password"
                                    id="password"
                                    onChange={this.handleChangePassword}
                                    hasError={this.state.errors.password && true}
                                    error = {this.state.errors.password}
                                />
                                <Input
                                    label="Confirm Password"
                                    placeholder="repeat password"
                                    type="password"
                                    id="confirm_password"
                                    onChange={this.handleChangeConfirmPassword}
                                    hasError={this.state.errors.confirmPassword && true}
                                    error = {this.state.errors.confirmPassword}
                                />
                                <Select 
                                    label="I am registering to?"
                                    onChange={this.handleChangeRole}
                                    options={[
                                        {value : 'rider', option: 'Be a dispatch rider'}, 
                                        {value: 'sender', option: 'Send or receive an Item'}
                                    ]}
                                />
                                <Textarea
                                    label="Address"
                                    col="col-md-12 mb-2"
                                    onChange={this.handleChangeAddress}
                                />
                                {/* <div className="form-group col-md-6 mb-2">
                                    <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="invalidCheck" required />
                                    <label className="form-check-label" htmlFor="invalidCheck">
                                        Agree to terms and conditions
                                    </label>
                                    <div className="invalid-feedback">
                                        You must agree before submitting.
                                    </div>
                                    </div>
                                </div> */}
                                <button type="submit" name="submit" className="btn btn-info btn-block">Sign in</button>
                            </div>
                        </form>    
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

const mapStateToProps = (state) => {
    // return {
    //     authError: state.auth.authError,
    //     auth: state.firebase.auth
    // }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signUp : (newUser) => dispatch(signUp(newUser))
    }
}

export default connect(null, mapDispatchToProps)(SignUp)