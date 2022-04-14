import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

export const Navbar = () => {
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
          <div className='btn btn__primary'>
            <Link className='text' to='/signin'>
              Login
            </Link>
          </div>
        </ul>
      </nav>
    </>
  );
};
