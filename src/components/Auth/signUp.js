import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import {Input, Textarea} from '../Input'
import { connect } from 'react-redux'
import {SignUpUser} from '../../store/actions/authActions'
import Logo from '../../logo_white.png'

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

    handleChangeRole = value => () => {
        document.getElementById("form").reset();
        this.setState({
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
        });
        this.setState({role: value});
    }

    getBase64(file, cb) {
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function () {
            cb(reader.result)
        };
        reader.onerror = function (error) {
            console.log('Error: ', error);
        };
    }

    handleChangeImage = (e) => {
        const value = e.target.files[0];
        const errors = {...this.state.errors};
        delete errors.image
        this.setState({image: value, errors});
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
        if(!passwordConfirmed) errors.confirm_password = 'Passwords do not match';
        this.setState({password: value, passwordConfirmed, errors})
    }

    handleChangeConfirmPassword = (e) => {
        const value = e.target.value;
        const passwordConfirmed = this.state.password === value;
        const errors = {...this.state.errors};
        delete errors.confirm_password;
        if(!passwordConfirmed) errors.confirm_password = 'Passwords do not match';
        this.setState({confirm_password: value, passwordConfirmed, errors})
    }

    validate = () => {
        let firstError = "";
        let lastError = "";
        let emailError = "";
        let phoneError = "";
        let passwordError = "";
        let imageError = '';
        let file = this.state.image;
        const errors = {...this.state.errors};
        const re = new RegExp("^(?=.*)(?=.*[a-z])(?=.*[A-Z]).{6,32}$");

        if(file.name) {
            if (!file.name.match(/\.(jpg|jpeg|png|gif)$/)) {
                imageError = 'Please select valid image.';
            } else if (file.size > 1048576) {
                imageError = 'Image must not be greater than 1MB.';
            }
        }
        if(imageError && imageError.length > 0){
            errors.image = imageError;
        } else if(file.name) {
            this.getBase64(file, (result) => {
                this.setState({image: result});
            });
        }

        if (!this.state.email) {
            emailError = 'Email address is required';
        } else if (!/\S+@\S+\.\S+/.test(this.state.email)) {
            emailError = 'Email address is invalid';
        }
        if(emailError) errors.email = emailError;

        if (!this.state.password) {
            passwordError = 'Password is required';
        } else if (this.state.password.length < 6) {
            passwordError = 'Password must be more than 6 characters';
        } else if (!re.test(this.state.password)) {
            passwordError = 'Password is too weak';
        }
        if(passwordError) errors.password = passwordError;

        if(this.state.password !== this.state.confirmPassword) errors.confirm_password = 'Passwords do not match';

        if(!this.state.first) {
            firstError = 'First name is required';
        } else if(this.state.first.length < 3){
            firstError = 'First name must be more than 3 characters';
        }
        if(firstError) errors.first = firstError;

        if(!this.state.last) {
            lastError = 'Last name is required';
        } else if(this.state.last.length < 3){
            lastError = 'Last name must be more than 3 characters';
        }
        if(lastError) errors.last = lastError;

        if(!this.state.phone) phoneError = 'Phone number cannot be empty';
        else if(this.state.phone.match(/\d/g).length !== 11) phoneError = 'Phone number must be 11 digits';
        if(phoneError) errors.phone = phoneError;

        this.setState({errors});
        
        if(Object.keys(errors).length === 1) return true;
        return false;
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const isValid = this.validate();
        if(isValid) this.props.signUp(this.state);
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
                        <p>You are 30 seconds away from earning your own money!</p>
                        <a href="/signin" className="btn login-link" value="Login">Login</a><br/>
                    </div>
                    <div className="col-md-9 register-right">
                        <ul className="nav nav-tabs nav-justified" id="myTab" role="tablist">
                            <li className="nav-item">
                                <a className="nav-link active" onClick={this.handleChangeRole('rider')} id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Rider</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" onClick={this.handleChangeRole('user')} id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">User</a>
                            </li>
                        </ul>
                        <div className="tab-content" id="myTabContent">
                            <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                <h3 className="register-heading">I am a dispatch rider</h3>
                                <div className="row register-form">
                                    <div className="col-md-6">
                                        <Input 
                                            placeholder="First name *"
                                            id="first"
                                            onChange = {this.handleChangeFirst}
                                            hasError = {this.state.errors.first && true}
                                            error = {this.state.errors.first}
                                        />
                                        <Input 
                                            placeholder="Last Name *"
                                            id="last"
                                            onChange = {this.handleChangeLast}
                                            hasError = {this.state.errors.last && true}
                                            error = {this.state.errors.last}
                                            
                                        />
                                        <Input
                                            placeholder="Password *"
                                            type="password"
                                            id="password"
                                            onChange={this.handleChangePassword}
                                            hasError={this.state.errors.password && true}
                                            error = {this.state.errors.password}
                                        />
                                        <Input
                                            placeholder="Confirm Password *"
                                            type="password"
                                            id="confirm_password"
                                            onChange={this.handleChangeConfirmPassword}
                                            hasError={this.state.errors.confirmPassword && true}
                                            error = {this.state.errors.confirmPassword}
                                        />
                                        <div className="form-group">
                                            <div className="maxl">
                                                <label className="radio inline"> 
                                                    <input type="radio" name="gender" onChange={this.handleChangeGender} value="male" checked />
                                                    <span> Male </span> 
                                                </label>
                                                <label className="radio inline"> 
                                                    <input type="radio" name="gender" onChange={this.handleChangeGender} value="female" />
                                                    <span>Female </span> 
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <Input
                                            placeholder="Email Address"
                                            type="email"
                                            id="email"
                                            onChange={this.handleChangeEmail}
                                            hasError={this.state.errors.email && true}
                                            error = {this.state.errors.email}
                                        />
                                        <Input
                                            placeholder="Phone Number"
                                            type="tel"
                                            id="phone"
                                            onChange={this.handleChangePhone}
                                            hasError={this.state.errors.phone && true}
                                            error = {this.state.errors.phone}
                                        />
                                        <Input
                                            type="file"
                                            id="image"
                                            onChange={this.handleChangeImage}
                                            hasError={this.state.errors.image && true}
                                            error = {this.state.errors.image}
                                        />
                                        <Textarea
                                            placeholder="Address"
                                            onChange={this.handleChangeAddress}
                                        />
                                        <input type="submit" className="btnRegister"  value="Register"/>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade show" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                <h3 className="register-heading">I want to send an Item</h3>
                                <div className="row register-form">
                                    <div className="col-md-6">
                                        <Input 
                                            placeholder="First name *"
                                            id="first"
                                            onChange = {this.handleChangeFirst}
                                            hasError = {this.state.errors.first && true}
                                            error = {this.state.errors.first}
                                        />
                                        <Input 
                                            placeholder="Last Name *"
                                            id="last"
                                            onChange = {this.handleChangeLast}
                                            hasError = {this.state.errors.last && true}
                                            error = {this.state.errors.last}
                                            
                                        />
                                        <Input
                                            placeholder="Password *"
                                            type="password"
                                            id="password"
                                            onChange={this.handleChangePassword}
                                            hasError={this.state.errors.password && true}
                                            error = {this.state.errors.password}
                                        />
                                        <Input
                                            placeholder="Confirm Password *"
                                            type="password"
                                            id="confirm_password"
                                            onChange={this.handleChangeConfirmPassword}
                                            hasError={this.state.errors.confirmPassword && true}
                                            error = {this.state.errors.confirmPassword}
                                        />
                                        <div className="form-group">
                                            <div className="maxl">
                                                <label className="radio inline"> 
                                                    <input type="radio" name="gender1" onChange={this.handleChangeGender} value="male" checked />
                                                    <span> Male </span> 
                                                </label>
                                                <label className="radio inline"> 
                                                    <input type="radio" name="gender1" onChange={this.handleChangeGender} value="female" />
                                                    <span>Female </span> 
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <Input
                                            placeholder="Email Address"
                                            type="email"
                                            id="email"
                                            onChange={this.handleChangeEmail}
                                            hasError={this.state.errors.email && true}
                                            error = {this.state.errors.email}
                                        />
                                        <Input
                                            placeholder="Phone Number"
                                            type="tel"
                                            id="phone"
                                            onChange={this.handleChangePhone}
                                            hasError={this.state.errors.phone && true}
                                            error = {this.state.errors.phone}
                                        />
                                        <Input
                                            type="file"
                                            id="image"
                                            onChange={this.handleChangeImage}
                                            hasError={this.state.errors.image && true}
                                            error = {this.state.errors.image}
                                        />
                                        <Textarea
                                            placeholder="Address"
                                            onChange={this.handleChangeAddress}
                                        />
                                        <input type="submit" className="btnRegister"  value="Register" />
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
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signUp : (newUser) => dispatch(SignUpUser(newUser))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)