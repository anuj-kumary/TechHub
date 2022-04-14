import React from 'react';
import { Link } from 'react-router-dom';
import './Auth.css';

export const Signup = () => {
  return (
    <div className='container signup__container'>
      <div className='auth__form'>
        <div className='auth__title'>
          <h2 className='heading text__center text'>Sign Up</h2>
        </div>
        <div className='input'>
          <label className='label__text'>First Name</label>
          <input className='input-txt' type='text' placeholder='John' />
        </div>
        <div className='input'>
          <label className='label__text'>Last Name</label>
          <input className='input-txt' type='text' placeholder='Doe' />
        </div>
        <div className='input'>
          <label className='label__text'>Email</label>
          <input
            className='input-txt'
            type='email'
            placeholder='abc@gmail.com'
          />
        </div>
        <div className='input'>
          <label className='label__text'>Password</label>
          <input
            className='input-txt'
            type='password'
            placeholder='*********'
          />
        </div>

        <div className='btn__signup text__center'>
          <button className='btn btn__primary'>Create New Account</button>
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
