import React from 'react'
import { NavLink } from 'react-router-dom'

const SignOutLinks = () => {
    return (
        <ul className="nav navbar-nav navbar-right">
            <li className="nav-item">
                <NavLink to='/signUp' className="nav-link">Sign Up</NavLink>
            </li>
            <li className="nav-item">
                <NavLink to='/signIn' className="nav-link">Sign In</NavLink>
            </li>
        </ul>
    )
}

export default SignOutLinks