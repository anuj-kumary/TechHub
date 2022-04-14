import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useAuth } from '../../contexts';
import './Auth.css';

export const Signup = () => {
  const { signupHandler } = useAuth();

  const [signup, setSignup] = useState({
    email: '',
    password: '',
    firstName: '',
    lastName: '',
  });

  return (
    <div className='container signup__container'>
      <div className='auth__form'>
        <div className='auth__title'>
          <h2 className='heading text__center text'>Sign Up</h2>
        </div>
        <div className='input'>
          <label className='label__text'>First Name</label>
          <input
            className='input-txt'
            type='text'
            placeholder='John'
            value={signup.firstName}
            onChange={(e) =>
              setSignup({ ...signup, firstName: e.target.value })
            }
          />
        </div>
        <div className='input'>
          <label className='label__text'>Last Name</label>
          <input
            className='input-txt'
            type='text'
            placeholder='Doe'
            value={signup.lastName}
            onChange={(e) => setSignup({ ...signup, lastName: e.target.value })}
          />
        </div>
        <div className='input'>
          <label className='label__text'>Email</label>
          <input
            className='input-txt'
            type='email'
            placeholder='abc@gmail.com'
            value={signup.email}
            onChange={(e) => setSignup({ ...signup, email: e.target.value })}
          />
        </div>
        <div className='input'>
          <label className='label__text'>Password</label>
          <input
            className='input-txt'
            type='password'
            value={signup.password}
            placeholder='*********'
            onChange={(e) => setSignup({ ...signup, password: e.target.value })}
          />
        </div>

        <div className='btn__signup text__center'>
          <button
            onClick={() =>
              signupHandler(
                signup.email,
                signup.password,
                signup.firstName,
                signup.lastName
              )
            }
            className='btn btn__primary'
          >
            Create New Account
          </button>
        </div>
        <div className='text__center'>
          <p className='login__nav'>
            Alredy a Member?
            <Link to='/signin' className='login___btn--now'>
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};
