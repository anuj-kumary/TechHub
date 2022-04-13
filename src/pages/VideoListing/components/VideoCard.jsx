import React from 'react';
import './VideoCard.css';

export const VideoCard = ({ item }) => {
  const { img, title, creator, date } = item;
  return (
    <>
      <div className='card'>
        <div className='card__imgs'>
          <img className='img-res' src={img} alt='banner' />
        </div>

        <header className='card__heading'>{title}</header>
        <div>
          <i className='icon fas fa-ellipsis-v'></i>
        </div>
        <p className='card__author'>
          {creator} <span className='card__date'>{date}</span>
        </p>
      </div>
    </>
  );
};
