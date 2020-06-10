import React from 'react'
import { NavLink } from 'react-router-dom'
import SignInLinks from './SignInLinks'
import SignOutLinks from './SignOutLinks'
import Logo from '../../logo.png'
import { connect } from 'react-redux'

const Navbar = (props) => {
    const imageWidth = {
        width: '120px'
    }
    const { auth, profile } = props;
    const links = auth.uid ? <SignInLinks profile={profile} /> : <SignOutLinks />;
    return (
        <nav className="navbar navbar-expand-sm bg-light fixed-top navbar-light ">
            <div className="container">
                {/* <!-- Brand --> */}
                <NavLink className="navbar-brand" to="/">
                    <img src={Logo} alt="Logo" style={imageWidth} />
                </NavLink>
                {/* <!-- Toggler/collapsibe Button --> */}
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                {/* <!-- Navbar links --> */}
                <div className="collapse navbar-collapse justify-content-end" id="collapsibleNavbar">
                    {links}
                </div>
            </div>
        </nav>
    )
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        profile: state.firebase.profile
    }
}

export default connect(mapStateToProps)(Navbar)