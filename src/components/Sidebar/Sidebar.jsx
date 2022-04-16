import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';

export const Sidebar = () => {
  return (
    <>
      <aside className='sidebar'>
        <ul className='sidebar__menu'>
          <NavLink
            to='/video'
            activeClassName='active'
            className='sidebar__link text'
          >
            <i className='fas fa-home'></i>Explore
          </NavLink>
          <NavLink
            to='/playlist'
            activeClassName='active'
            className='sidebar__link text'
          >
            <i className='fas fa-play-circle'></i>Playlist
          </NavLink>
          <NavLink
            to='/like'
            activeClassName='active'
            className='sidebar__link text'
          >
            <i className='fas fa-heart'></i>Liked
          </NavLink>
          <NavLink
            to='/watchlater'
            activeClassName='active'
            className='sidebar__link text'
          >
            <i className='fas fa-clock'></i>Watch Later
          </NavLink>
          <NavLink
            to='/signin'
            activeClassName='active'
            className='sidebar__link text'
          >
            <i className='fas fa-history'></i> History
          </NavLink>
        </ul>
      </aside>
    </>
  );
};
