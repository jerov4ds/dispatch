import React, { Component } from 'react'
import { connect } from 'react-redux'

class Alert extends Component {
    render(){
        const { authError, message } = this.props;

        if(authError){
            return (
                <div className="alert alert-danger alert-dismissable popup">
                    <button type="button" className="close" data-dismiss="alert" aria-hidden="true">×</button>
                    <strong>Error!</strong> {authError}
                </div>
            )
        }else if(message) {
            return (
                <div className="alert alert-success alert-dismissable">
                    <button type="button" className="close" data-dismiss="alert" aria-hidden="true">×</button>
                    <strong>Success!</strong> {message}
                </div>
            )
        }else {return null;}
    }
}

const mapStateToProps = (state) => {
    return {
        authError: state.auth.authError,
        message: state.auth.message
    }
}

export default connect(mapStateToProps)(Alert)