import React from 'react';
import '../Landing-Page/LandingPage.css';

export const LandingPage = () => {
  return (
    <>
      <div className='hero'>
        <h1 className='hero__logo'>TechHub</h1>
        <img src='./img/bg.jpg' alt='background' />
        <div className='hero__content'>
          <h1 className='hero__heading'>Welcome to TechHub</h1>
          <h2 className='sub__heading'>Watch anywhere anytime.</h2>
          <div className='hero__btn'>
            <a className='btn btn__warn' href='/'>
              Explore
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
