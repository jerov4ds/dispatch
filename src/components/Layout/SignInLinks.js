import React from 'react'
import { NavLink } from 'react-router-dom'
import { SignOut } from '../../store/actions/authActions'
import { connect } from 'react-redux'

const SignInLinks = (props) => {
    return (
        <ul className="nav navbar-nav navbar-right">
            <li className="nav-item">
                <NavLink to='/sendItem' className="nav-link">Send An Item</NavLink>
            </li>
            <li className="nav-item">
                <NavLink to='/items' className="nav-link">Items Sent</NavLink>
            </li>
            <li className="nav-item">
                <NavLink to='/riders' className="nav-link">Riders</NavLink>
            </li>
            <li className="nav-item"><NavLink to="#" className="nav-link" onClick={props.signOut}>Log Out</NavLink></li>
            <li className="nav-item">
                <NavLink to='/profile' className="nav-link btn btn-floating pink lighten-1">Welcome {props.profile.last}</NavLink>
            </li>
        </ul>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(SignOut())
    }
}

export default connect(null, mapDispatchToProps)(SignInLinks)