import React from 'react';
import { Link } from 'react-router-dom';
import './Auth.css';

export const Signin = () => {
  return (
    <div className='container'>
      <div className='auth__form'>
        <div className='auth__title'>
          <h2 className='heading text__center text'>Sign In</h2>
        </div>
        <div className='input'>
          <label className='label__text'>Email</label>
          <input
            className='input-txt'
            placeholder='abc@gmail.com'
            type='email'
          />
        </div>
        <div className='input'>
          <label className='label__text'>Password</label>
          <input className='input-txt' type='password' placeholder='********' />
        </div>

        <div className='btn__signup text__center'>
          <button className='btn btn__primary'>Sign In</button>
          <button className='btn btn__secondary'>Sign In as Guest</button>
        </div>
        <div className='text__center'>
          <p className='login__nav'>
            Don't have an Account?
            <Link to='/signup' className='login___btn--now'>
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};
