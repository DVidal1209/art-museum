import React from 'react';
//fix this path?
import '../Login/login.css'

export default class Login extends React.Component {

  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className='base-container'>
        <div className='header'>Login</div>
        <div className='content'>
          <div className='form'>
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

        <div className='login-footer'>
          <h2 className='btn'>Login</h2>
        </div>
      </div>
    )
  }
}

// do npm install node-sass --save-dev