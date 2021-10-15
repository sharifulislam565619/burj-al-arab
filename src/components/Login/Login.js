import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './login.css'


const Login = () => {
  const { handleSignInWithGoogle } = useAuth()

  return (
    <div className="login-form">

      <div className="my-cart">
        <h2>Please login</h2>

        <input type="email" placeholder="Enter your email" />
        <br />
        <input type="password" placeholder="Enter password" /><br />
        <input className="login-btn" type="submit" value="Login" /><br />
        <Link to="/">Forgot password</Link><br />
        <span>Create a new account <Link to="/register">Register</Link></span><br />
        <p >----- Or login -----</p>
        <button className="online-btn google" onClick={handleSignInWithGoogle}><i class="fab fa-google"></i> Google</button>
        <button className="online-btn facebook" onClick={handleSignInWithGoogle}><i class="fab fa-facebook"></i> Facebook</button>
        <button className="online-btn twitter" onClick={handleSignInWithGoogle}><i class="fab fa-twitter"></i> Twitter</button>
        <button className="online-btn github" onClick={handleSignInWithGoogle}><i class="fab fa-github"></i> Github</button>
      </div>
    </div>
  );
};

export default Login;