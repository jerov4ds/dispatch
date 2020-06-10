import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome'
import '../../css/profile.css';
import { Redirect } from 'react-router-dom';
import Navbar from '../Layout/Navbar';
import { connect } from 'react-redux';
import {Input, Textarea, Select} from '../Input'
import { UpdateProfile } from '../../store/actions/authActions';

class Profile extends Component {
    state = {
        first: this.props.profile.first,
        last: this.props.profile.last,
        phone: this.props.profile.phone,
        gender: this.props.profile.gender,
        image: this.props.profile.image,
        errors: {},
        address: this.props.profile.address
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
        this.setState({gender: value});
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

    handleChangeAddress = (e) => {
        const value = e.target.value;
        const errors = {...this.state.errors};
        delete errors.address
        this.setState({address: value, errors})
    }

    validate = () => {
        let firstError = "";
        let lastError = "";
        let phoneError = "";
        let imageError = "";
        let file = this.state.image;
        const errors = {...this.state.errors};

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
        
        if(Object.keys(errors).length === 0) return true;
        return false;
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const isValid = this.validate();
        if(isValid) {
            this.props.updateProfile(this.state);
            document.getElementById('exampleModal').classList.remove('show');
            document.getElementById('exampleModal').classList.remove('modal-open');
            document.getElementById('exampleModal').classList.add('fade');
            // var name = React.findDOMNode(this.refs.profile);
            // name.modal('hide');
        }
        console.log(isValid);
        console.log(this.state);
    }

    render(){
        const { profile, auth } = this.props;
        if(!profile || profile.isLoaded == false) return <Redirect to="/" />
        return (
            <div>
                <Navbar />
                <div className="container pt-6">
                    <div className="row">
                        <div className="col-xs-12 col-sm-8 col-md-8 offset-md-2 offset-sm-2">
                            <div className="card card-sm">
                                <div className="row">
                                    <div className="col-sm-6 col-md-4">
                                        <img src="http://placehold.it/380x500" alt="" className="img-rounded img-responsive" />
                                    </div>
                                    <div className="col-sm-6 col-md-8">
                                        {/* <div className="card-header"></div> */}
                                        <h4 style={{ paddingTop: "10px"}}>{profile.first} {profile.last}</h4>
                                        <p>
                                            <FontAwesome name="envelope" /> {auth.email}
                                            <br />
                                            <FontAwesome name="phone" /> {profile.phone}
                                            <br />
                                            <FontAwesome name="address-card" /> {profile.gender}
                                            <br />
                                            <FontAwesome name="map-marker" /> {profile.address}
                                            <br />
                                            <FontAwesome name="gift" /> June 02, 1988
                                        </p>
                                        {/* <!-- Split button --> */}
                                        <div className="dropdown show">
                                            <a className="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                Action
                                            </a>

                                            <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                                <a className="dropdown-item" href="#" data-toggle="modal" data-target="#exampleModal"><FontAwesome name="user" /> Edit Profile</a>
                                                <a className="dropdown-item" href="#" data-toggle="modal" data-target="#exampleModal"><FontAwesome name="cog" /> Edit Login details</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" ref="profile">
                    <div className="modal-dialog modal-lg" role="document">
                        <div className="modal-content">
                        <form method="POST" action="" id="form" onSubmit={this.handleSubmit} acceptCharset="UTF-8">
                            <div className="modal-header">
                                <h4 className="modal-title" id="exampleModalLabel">Edit Profile</h4>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button> 
                            </div>
                            <div className="modal-body">
                                <div className="row">
                                    <Input 
                                        placeholder="First Name *"
                                        label="First Name *"
                                        col="col-sm-6"
                                        id="first"
                                        value= {this.state.first}
                                        onChange = {this.handleChangeFirst}
                                        hasError={this.state.errors.first && true}
                                        error = {this.state.errors.first}
                                    />
                                    <Input 
                                        placeholder="Last Name *"
                                        label="Last Name *"
                                        col="col-sm-6"
                                        id="last"
                                        value= {this.state.last}
                                        onChange = {this.handleChangeLast}
                                        hasError={this.state.errors.last && true}
                                        error = {this.state.errors.last}
                                    />
                                    <Input 
                                        placeholder="Phone Number *"
                                        label="Phone Number *"
                                        col="col-sm-6"
                                        id="phone"
                                        value= {this.state.phone}
                                        onChange = {this.handleChangePhone}
                                        hasError={this.state.errors.phone && true}
                                        error = {this.state.errors.phone}
                                    />
                                    <Select
                                        placeholder="Gender"
                                        label="Gender"
                                        col="col-sm-6"
                                        id="gender"
                                        options={[
                                            {value: 'male', option: 'male'},
                                            {value: 'female', option: 'female'}
                                        ]}
                                        selected = {this.state.gender}

                                    />
                                    <Textarea 
                                        placeholder="Address"
                                        label="Address"
                                        col="col-sm-12"
                                        id="address"
                                        onChange = {this.handleChangeAddress}
                                        value= {this.state.address}
                                    />
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                                <button type="submit" className="btn btn-primary">Edit Profile</button>
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
    return {
        profile: state.firebase.profile,
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateProfile :  (creds) => dispatch(UpdateProfile(creds))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);