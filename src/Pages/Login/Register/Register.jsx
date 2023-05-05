import React, { useContext, useState } from 'react';
import { Container, Form } from 'react-bootstrap';
import Button from "react-bootstrap/Button";

import { Link } from "react-router-dom";
import { AuthContext } from '../../../providers/AuthProvider';
import './register.css';
import Header from '../../Shared/Header/Header';
import Footer from '../../Shared/Footer/Footer';
import { updateProfile, signOut } from 'firebase/auth';


const Register = () => {

  const [error, setError] = useState('');
    
  const [photo, setPhoto] = useState('');

  const [name, setName] = useState('');

  const { createUser } = useContext(AuthContext);

  const handleRegister = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
  
    if (email.trim() === '' || password.trim() === '') {
      setError('Email and password fields cannot be empty.');
      return;
    }
    else if (password.length < 6) {
      setError('Password must be at least 6 characters long.');
      return;
    }
  
    console.log(name, photo, email, password);
  
    createUser(email, password)
      .then(result => {
        const createdUser = result.user;
        console.log(createdUser);
        setError('');
        event.target.reset();
        updateUserData(createdUser, photo, name); 
        // Sign out the current user after successful registration
        signOut(createdUser.auth)
          .then(() => {
            console.log('User signed out successfully');
          })
          .catch(error => {
            console.log(error);
          });
        // Redirect the user to the login page after successful registration
        window.location.href = '/login';
      })
      .catch(error => {
        console.log(error);
        setError(error.message);
      });
  };
  
  const updateUserData = (user, photo, name) => {
    updateProfile(user, {
        photoURL: photo,
        displayName: name 
    })
    .then(() => {
        setPhoto(photo); 
        setName(name); 
    })
    .catch(error => {
        setError(error.message);
    });
  }
      
      
    

    
    return (
        <>
        <Header photo={photo} name={name}/>
        <Container className="w-25 mx-auto">
      <h3>Please Register</h3>
      <Form onSubmit={handleRegister}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            placeholder="Your Name"
            
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Photo URL</Form.Label>
          <Form.Control
            type="text"
            name="photo" id='photo'
            placeholder="Your Photo URL"
            
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter email"
            
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
            
          />
        </Form.Group>

        

        <Button variant="primary" type="submit">
          Register
        </Button>
        <br />
        <Form.Text className="text-secondary"> Already Have an Account? <Link to="/login">Login</Link> </Form.Text>
        <Form.Text className="text-success"></Form.Text>
        <p className='text-danger'>{error}</p>
      </Form>
    </Container>
    <Footer/></>
    );
};

export default Register;
