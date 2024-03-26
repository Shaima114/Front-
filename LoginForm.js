import React from 'react'
import './LoinForm.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../LoginForm/Image/imag.jpeg';
import Imag from '../LoginForm/Image/logo.jpg';

const LoginForm = () => {
    return (
        < div className='image'>
            <img src={logo} alt='Login img' />
            <div className='header'>
                <div className='pp'>
            <img src={Imag} alt='Login img' />
                <h1>UI Unicorn</h1>
            </div>
            < div className='header2'>
                <p>
                    <h2>Nice to see you again</h2>
                </p>
            </div>
            <div className="input-box">
                <label htmlFor=" text">Login</label>
                <input type="text" placeholder='Email or phone number ' className='form-control rounded-0' required />
            </div>
            <div className="input-box">
                <label htmlFor=" password">  Password</label>
                <input type="password" placeholder='Enter Password ' className='form-control rounded-0' required />
            
                
            </div>
            <div>
                <a href="/">Forgot password?</a>
            </div>
            <button className='sign'>
                Sign in</button>
            <div className="register-link">
                <p>Dont have an account? <a href="/" >Sign up now</a></p>
            </div>
        </div>
        </div >
    );
};
export default LoginForm