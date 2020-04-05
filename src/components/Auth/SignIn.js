import React, { Component } from 'react'

class SignIn extends Component  {
    render() {
        return (
        <div className="container">
            <div className="row">
                <div className="span4 offset4 well">
                    <legend>Please Sign In</legend>
                    <div className="alert alert-error">
                        {/* <a className="close" data-dismiss="alert" href="#">×</a>Incorrect Username or Password! */}
                    </div>
                    <form method="POST" action="" acceptCharset="UTF-8">
                        <input type="text" id="username" className="span4" name="username" placeholder="Username" />
                        <input type="password" id="password" className="span4" name="password" placeholder="Password" />
                        <label className="checkbox">
                            <input type="checkbox" name="remember" value="1" /> Remember Me
                        </label>
                        <button type="submit" name="submit" className="btn btn-info btn-block">Sign in</button>
                    </form>    
                </div>
            </div>
        </div>
        )
    }
}

export default SignIn