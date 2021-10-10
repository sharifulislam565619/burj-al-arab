import React, { useContext } from 'react';
import useAuth from '../../hooks/useAuth';
import './login.css'


const Login = () => {
    const { handleSignInWithGoogle } = useAuth()

    return (
        <div className="login-form">

            <div>
                <h2>Please logIn</h2>

                <input type="email" placeholder="Enter your email" />
                <br />
                <input type="password" placeholder="Enter password" /><br />
                <button onClick={handleSignInWithGoogle}>SignIn With Google</button>
            </div>
        </div>
    );
};

export default Login;