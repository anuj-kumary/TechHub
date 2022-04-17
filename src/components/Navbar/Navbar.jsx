import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth, useTheme } from '../../contexts';
import './Navbar.css';

export const Navbar = () => {
  const { token } = useAuth();
  const { theme, changeTheme } = useTheme();
  const { pathname } = useLocation();
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
            <input className='search__box' type='search' placeholder='Search' />
          </ul>
        )}

        <ul className='navbar__right'>
          {token ? (
            <div title='Profile' className='user__icon'>
              <Link className='text' to='/profile'>
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
            <li className='text'>
              <i
                className={theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon'}
              ></i>
            </li>
          </div>
        </ul>
      </nav>
    </>
  );
};
