import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import './Auth.css';
import { useAuth } from '../../contexts';

export const Signin = () => {
  const { loginHandler } = useAuth();
  const [login, setLogin] = useState({
    email: '',
    password: '',
  });

  return (
    <div className='container'>
      <div className='auth__form'>
        <div className='auth__title'>
          <h2 className='heading text__center'>Sign In</h2>
        </div>
        <div className='input'>
          <label className='label__text'>Email</label>
          <input
            className='input-txt'
            placeholder='abc@gmail.com'
            type='email'
            value={login.email}
            onChange={(e) => setLogin({ ...login, email: e.target.value })}
          />
        </div>
        <div className='input'>
          <label className='label__text'>Password</label>
          <input
            className='input-txt'
            type='password'
            value={login.password}
            placeholder='********'
            onChange={(e) => setLogin({ ...login, password: e.target.value })}
          />
        </div>

        <div className='btn__signup text__center'>
          <button
            onClick={(e) => loginHandler(e, setLogin, login)}
            className='btn btn__primary'
          >
            Sign In
          </button>
          <button
            onClick={(e) => loginHandler(e, setLogin, login)}
            className='btn btn__secondary'
          >
            Sign In as Guest
          </button>
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
