import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

export const Sidebar = () => {
  return (
    <>
      <aside className='sidebar'>
        <ul className='sidebar__menu'>
          <Link to='/video' className='sidebar__link text active'>
            <i className='fas fa-home'></i>Explore
          </Link>
          <Link to='/signin' className='sidebar__link text'>
            <i className='fas fa-play-circle'></i>Playlist
          </Link>
          <Link to='/like' className='sidebar__link text'>
            <i className='fas fa-heart'></i>Liked
          </Link>
          <Link to='/watchlater' className='sidebar__link text'>
            <i className='fas fa-clock'></i>Watch Later
          </Link>
          <Link to='/signin' className='sidebar__link text'>
            <i className='fas fa-history'></i> History
          </Link>
        </ul>
      </aside>
    </>
  );
};
