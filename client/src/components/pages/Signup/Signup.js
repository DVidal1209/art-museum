import React from 'react';
import '../Login/login.css'
import { useState } from 'react';
import Auth from '../../../utils/auth'
import { Form, Button, Alert } from 'react-bootstrap';
import { NEW_USER } from '../../../utils/mutations';

import { useMutation } from '@apollo/client';

const Signup = () => {

  //initialize newUser mutation
  const [newUser, { error }] = useMutation(NEW_USER);

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
      const data = await newUser({
        variables: { ...userFormData }
      });

      const { token, user } = data.data.newUser;
      console.log(data.data.newUser);
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
  return (
    <>
      <div className='base-container'>
        <div className='header'>Login</div>
        <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
          <Alert dismissible onClose={() => setShowAlert(false)} className="alert" show={showAlert} variant='danger'>
            Something went wrong with your signup!
          </Alert>
          <div className='content'>
            <Form.Group className="form-group">
              <Form.Label htmlFor='username'>Username</Form.Label>
              <Form.Control
                type='text'
                placeholder='Your Username'
                name='username'
                onChange={handleInputChange}
                value={userFormData.username}
                required
              />
            </Form.Group>
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

              <h2 className='btn' onClick={handleFormSubmit}>Signup</h2>
            </div>
          </div>
        </Form>
      </div>
      <br />
    </>
  )

}

export default Signup