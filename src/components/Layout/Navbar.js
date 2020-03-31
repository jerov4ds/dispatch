import React from 'react'
import { Link } from 'react-router-dom'
import SignInLinks from './SignInLinks'
import SignOutLinks from './SignOutLinks'

const Navbar = () => {
    const imageWidth = {
        width: '120px'
    }
    return (
        <nav className="navbar navbar-expand-sm bg-light fixed-top navbar-light ">
            <div className="container">
                {/* <!-- Brand --> */}
                <a className="navbar-brand" href="#">
                    <img src="http://velikorodnov.com/html/autotrader/images/logo.png" alt="Logo" style={imageWidth} />
                </a>
                {/* <!-- Toggler/collapsibe Button --> */}
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                {/* <!-- Navbar links --> */}
                <div className="collapse navbar-collapse" id="collapsibleNavbar">
                    <SignInLinks />
                    {/* <SignOutLinks /> */}
                </div>
            </div>
        </nav>
    )
}

export default Navbar