import React from 'react';
//fix this path?
import { useState } from 'react';
import '../Login/login.css'
import { LOGIN_USER } from '../../../utils/mutations'
import Auth from '../../../utils/auth'
import { Form, Button, Alert } from 'react-bootstrap';

import { useMutation, useQuery } from '@apollo/client';




const Login = () => {

  const [userFormData, setUserFormData] = useState({ email: '', password: '' });
  const [loginUser, { error }] = useMutation(LOGIN_USER)
  const [validated] = useState(false);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    // check if form has everything (as per react-bootstrap docs)
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    try {
      // Attempt to sign in 
      console.log(userFormData)
      const data = await loginUser({
        variables: { email: userFormData.email, password: userFormData.password }
      });

      const { token, user } = data.data.login;
      console.log(data.data.login);
      console.log(token,user)
      Auth.login(token);
    } catch (err) {
      console.error(err);
      setShowAlert(true);
    }

    setUserFormData({
      username: '',
      email: '',
      password: '',
    });
  };

  return(
    <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
      <Alert dismissible onClose={() => setShowAlert(false)} show={showAlert} variant='danger'>
          Something went wrong with your login credentials!
        </Alert>
      <div className='base-container'>
        <div className='header'>Login</div>
        <div className='content'>
          <div className='form'>
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
          <button type='button' className='btn'>Login</button>
        </div>
      </div>
    </Form>
  )
  
}

export default  Login
// extends React.Component {
  
//   constructor(props) {
//     super(props);
//   }


//   render() {
//     return <div className='base-container'>
//       <div className='header'>Login</div>
//       <div className='content'>
//         <div className='form'>
//           <div className='form-group'>
//             <label htmlFor='email'>Email</label>
//             <input type='email' name='email' placeholder='Email'/>
//           </div>
//           <div className='form-group'>
//             <label htmlFor='password'>Password</label>
//             <input type='password' name='password' placeholder='Password' />
//           </div>
//         </div>
//       </div>
//       <div className='footer'>
//         <button type='button' className='btn'>Login</button>
//       </div>
//     </div>
//   }
// }

// // do npm install node-sass --save-dev