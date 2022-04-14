import React from 'react';
import { useNavigate } from 'react-router-dom';
import './VideoCard.css';

export const VideoCard = ({ item }) => {
  const navigate = useNavigate();
  const { _id, img, title, creator, date } = item;

  const singleVideoPage = () => {
    navigate(`/singlevideo/${_id}`);
  };

  return (
    <>
      <div className='card'>
        <div className='card__imgs' onClick={() => singleVideoPage()}>
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
