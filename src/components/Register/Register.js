import React from 'react';
import { Link } from 'react-router-dom';
import './Register.css'

const Register = () => {

    return (
        <div className="login-form">

            <div className="my-cart">
                <h2>Please Register</h2>

                <input type="email" placeholder="Enter your email" />
                <br />
                <input type="password" placeholder="Enter password" /><br />
                <input className="login-btn" type="submit" value="Register" /><br />
                <span>I have an account <Link to="/login">Login</Link></span><br />


            </div>
        </div>
    );
};

export default Register;