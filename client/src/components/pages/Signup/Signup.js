import React from 'react';
import '../Signup/Signup.js'

export default class Signup extends React.Component {

  constructor(props) {
    super(props);
  }
  render() {
    return <div className='base-container'>
      <div className='header'>Sign Up</div>
      <div className='content'>
        <div className='form'>
          <div className='form-group'>
            <label htmlFor='username'>Username</label>
            <input type='text' name='username' placeholder='Username'/>
          </div>
          <div className='form-group'>
            <label htmlFor='email'>Email</label>
            <input type='email' name='email' placeholder='Email'/>
          </div>
          <div className='form-group'>
            <label htmlFor='password'>Password</label>
            <input type='password' name='password' placeholder='Password' />
          </div>
        </div>
      </div>
      <div className='footer'>
        <button type='button' className='btn'>SignUp</button>
      </div>
    </div>
  }
}

//export this somewhere?