import React from 'react';
import '../Login/login.css';
// import '../Signup/Signup.js';

export default class Login extends React.Component {

  constructor(props) {
    super(props);
  }
  render() {
    return <div className='base-container'>
      <div className='header'>Login</div>
      <div className='content'>
        <div className='form'>
          <div className='container'>
          <div className='form-group'>
            <label htmlFor='email'>Email</label>
            <input type='email' name='email' placeholder='Email' />
          </div>
          <div className='form-group'>
            <label htmlFor='password'>Password</label>
            <input type='password' name='password' placeholder='Password' />
          </div>
        </div>
      </div>
      <div className='footer'>
        <button type='button' className='login-btn'>Login</button>
      </div>
      </div>
      <div className='signup'>
        <label id='signup' htmlFor='signup'>Don't have an account? Sign up here</label>
        <div></div>
        <button type='button' className='signup-btn'>Sign Up</button>
      </div>
    </div>
  }
}

// do npm install node-sass --save-dev