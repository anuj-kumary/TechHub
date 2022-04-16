import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth, useData } from '../../contexts';
import { deleteVideoHistory } from '../../utils/historyUtils';

export const HistoryCard = ({ item }) => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState();
  const { dispatch } = useData();
  const { token } = useAuth();

  const { _id, title, img, date, creator } = item;

  const singleVideoPage = () => {
    navigate(`/singlevideo/${_id}`);
  };

  return (
    <div>
      <div className='card'>
        <div className='card__imgs' onClick={() => singleVideoPage()}>
          <img className='img-res' src={img} alt='banner' />
        </div>

        <header className='card__heading'>{title}</header>
        <div className='ellipse'>
          <i
            onClick={() => setShowModal(!showModal)}
            className='icon fas fa-ellipsis-v'
          ></i>
          <div className={`modal ${showModal ? 'modal__show' : 'modal__hide'}`}>
            <p
              onClick={() => deleteVideoHistory(_id, token, dispatch)}
              className='modal__text'
            >
              <i className='fas fa-trash'></i>
              Remove from History
            </p>
          </div>
        </div>

        <p className='card__author'>
          {creator} <span className='card__date'>{date}</span>
        </p>
      </div>
    </div>
  );
};
