import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { useAuth, useData, useTheme } from '../../contexts';
import './Navbar.css';
import { ACTION_TYPE } from '../../utils';

export const Navbar = () => {
  const { token } = useAuth();
  const { hamburgerClickHandler, dispatch } = useData();
  const { theme, changeTheme } = useTheme();
  const [input, setInput] = useState('');
  const { pathname } = useLocation();

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

        {pathname === '/video' && (
          <ul className='navbar__search'>
            <input
              onKeyDown={(e) => searchHandler(e)}
              onChange={(e) => setInput(e.target.value)}
              className='search__box'
              type='search'
              placeholder='Search with name'
            />
            <i
              onClick={(e) => {
                dispatch({
                  type: 'SEARCH',
                  payload: input,
                });
              }}
              className='search__icon fas fa-search'
            ></i>
          </ul>
        )}

        <ul className='navbar__right'>
          {token ? (
            <div title='Profile' className='user__icon'>
              <Link className='text user__icon' to='/profile'>
                <i className='fas fa-user-circle'></i>
              </Link>
            </div>
          ) : (
            <div className='btn btn__primary'>
              <Link className='text' to='/signin'>
                Signin
              </Link>
            </div>
          )}
          <div
            title={theme === 'dark' ? 'Enable Light Mode' : 'Enable Dark Mode'}
            onClick={changeTheme}
            className='user__icon'
          >
            <li className='user__icon'>
              <i
                className={theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon'}
              ></i>
            </li>
          </div>
          <div className='user__icon hamburger__icon'>
            <li onClick={hamburgerClickHandler} className='user__icon'>
              <i className='fas fa-bars'></i>
            </li>
          </div>
        </ul>
      </nav>
    </>
  );
};
