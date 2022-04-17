import React from 'react';
import { Sidebar } from '../../components';
import { useAuth } from '../../contexts';
import './Profile.css';

export const Profile = () => {
  const { user, logoutHandler } = useAuth();
  const { firstName, lastName, email } = user || {};
  return (
    <>
      <div className='video__container'>
        <Sidebar />
        <div className='video__list profile__card'>
          <div className='card card--text user__card'>
            <header className='card__heading line'>Profile Details</header>
            <p className='profile__text'>
              Full Name
              <span className='profile__name'>
                {firstName} {lastName}
              </span>
            </p>
            <p className='profile__text'>
              Email <span className='profile__email'>{email}</span>
            </p>
            <header className='card__heading line'>Profile Settings</header>
            <button
              onClick={(e) => logoutHandler(e)}
              className='btn btn__primary profile__btn'
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
