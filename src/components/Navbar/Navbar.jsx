import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../contexts';
import './Navbar.css';

export const Navbar = () => {
  const { token } = useAuth();
  return (
    <>
      <nav className='navigation'>
        <div className='navigation__logo'>
          <Link to='/'>
            <h3 className='navigation__heading'>TechHub</h3>
          </Link>
        </div>
        <ul className='navbar__search'>
          <input className='search__box' type='search' placeholder='Search' />
        </ul>

        <ul className='navbar__right'>
          {token ? (
            <div className='user__icon'>
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
        </ul>
      </nav>
    </>
  );
};
