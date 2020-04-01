import React from 'react'
import { NavLink } from 'react-router-dom'

const SignInLinks = () => {
    return (
        <ul className="nav navbar-nav navbar-right">
            <li className="nav-item">
                <NavLink to='/create' className="nav-link">Send An Item</NavLink>
            </li>
            <li className="nav-item">
                <NavLink to='/items' className="nav-link">Items Sent</NavLink>
            </li>
            <li className="nav-item">
                <NavLink to='/riders' className="nav-link">Riders</NavLink>
            </li>
            <li className="nav-item">
                <NavLink to='/signOut' className="nav-link">Sign Out</NavLink>
            </li>
            <li className="nav-item">
                <NavLink to='/profile' className="nav-link btn btn-floating pink lighten-1">JO</NavLink>
            </li>
        </ul>
    )
}

export default SignInLinks