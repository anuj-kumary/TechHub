import React from 'react';
import './Sidebar.css';

export const Sidebar = () => {
  return (
    <>
      <aside className='sidebar'>
        <ul className='sidebar__menu'>
          <li className='sidebar__link text active'>
            <i className='fas fa-home'></i>Home
          </li>
          <li className='sidebar__link text'>
            <i className='fas fa-play-circle'></i>Playlist
          </li>
          <li className='sidebar__link text'>
            <i className='fas fa-heart'></i>Liked
          </li>
          <li className='sidebar__link text'>
            <i className='fas fa-clock'></i>Watch Later
          </li>
          <li className='sidebar__link text'>
            <i className='fas fa-history'></i> History
          </li>
        </ul>
      </aside>
    </>
  );
};
