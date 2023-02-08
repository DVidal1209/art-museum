import React from 'react';
import { useState } from 'react';
import '../Login/login.css'
import { LOGIN_USER } from '../../../utils/mutations'
import Auth from '../../../utils/auth'
import { Form, Button, Alert } from 'react-bootstrap';

import { useMutation, useQuery } from '@apollo/client';




const Login = () => {
  // Initializing loginUser Mutation
  const [loginUser, { error }] = useMutation(LOGIN_USER)

  const [userFormData, setUserFormData] = useState({ email: '', password: '' });
  const [validated] = useState(false);
  const [showAlert, setShowAlert] = useState(false);


  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      console.log(userFormData)
      const data = await loginUser({
        variables: { email: userFormData.email, password: userFormData.password }
      });
      console.log(data)

      const { token, user } = data.data.login;
      Auth.login(token);
    } catch (err) {
      console.error(err);
      setShowAlert(true);
    }

    setUserFormData({
      email: '',
      password: '',
    });
  };



  return (
    <>
      <div className='base-container'>
        <div className='header'>Login</div>
        <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
          <Alert dismissible onClose={() => setShowAlert(false)} className="alert" show={showAlert} variant='danger'>
            Something went wrong with your login credentials!
          </Alert>
          <div className='content'>
            <br />
            <Form.Group className="form-group">
              <Form.Label htmlFor='email'>Email</Form.Label>
              <Form.Control
                type='text'
                placeholder='Your email'
                name='email'
                onChange={handleInputChange}
                value={userFormData.email}
                required
              />
            </Form.Group>
            <Form.Group className="form-group">
              <Form.Label htmlFor='password'>Password</Form.Label>
              <Form.Control
                type='password'
                placeholder='Your Password'
                name='password'
                onChange={handleInputChange}
                value={userFormData.password}
                required
              />
            </Form.Group>
            <div className='login-footer'>
              <h2 className='btn' onClick={handleFormSubmit}>Login</h2>
              <br />
              <h2 className='btn' onClick={() => window.location.href = "/signup"}>
                Signup
              </h2>
            </div>
            <br />
          </div>
        </Form>
      </div>
      <br />
    </>
  )

}

export default Login

// // do npm install node-sass --save-dev