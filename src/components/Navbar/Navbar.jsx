import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useAuth, useData } from '../../contexts';
import './Navbar.css';

export const Navbar = () => {
  const { token, logoutHandler } = useAuth();
  const [input, setInput] = useState('');
  const navigate = useNavigate();
  const { dispatch } = useData();
  const searchHandler = (e) => {
    if (e.key === 'Enter' || e.keyCode === 8 || e.target.value === '') {
      dispatch({
        type: 'SEARCH',
        payload: e.target.value,
      });
    }
  };

  return (
    <>
      <nav className='navigation'>
        <div className='navigation__logo'>
          <Link to='/'>
            <h3 className='navigation__heading'>TechHub</h3>
          </Link>
        </div>
        <ul className='navbar__search'>
          <input
            className='search__box'
            value={input}
            onKeyDown={(e) => searchHandler(e)}
            onChange={(e) => setInput(e.target.value)}
            type='search'
            placeholder='Search with name'
          />
        </ul>

        <ul className='navbar__right'>
          <div className='btn btn__primary'>
            {token ? (
              <Link
                onClick={(e) => logoutHandler(e)}
                className='text'
                to='/signin'
              >
                Logout
              </Link>
            ) : (
              <Link className='text' to='/signin'>
                Signin
              </Link>
            )}
          </div>
        </ul>
      </nav>
    </>
  );
};
