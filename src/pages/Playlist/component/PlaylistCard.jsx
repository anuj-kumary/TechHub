import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth, useData } from '../../../contexts';
import { watchLaterHandler } from '../../../utils';
import { removeVideoFromPlaylist } from '../../../utils/playListUtils';

export default function PlaylistCard({ item, isInPlaylistVideo, listId }) {
  const { token } = useAuth();
  const { dispatch, state } = useData();
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState();
  const isInWatchLater = state.watchlater.find(
    (element) => element._id === item._id
  );
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
              onClick={() => {
                removeVideoFromPlaylist(dispatch, _id, listId, token);
              }}
              className='modal__text'
            >
              <i className='fas fa-save'></i>
              {isInPlaylistVideo ? 'Remove from Playlist' : 'Save To Playlist'}
            </p>

            <p
              onClick={() =>
                watchLaterHandler(item, token, dispatch, isInWatchLater)
              }
              className='modal__text'
            >
              <i className='fas fa-clock'></i>
              {isInWatchLater
                ? 'Remove from Watch Later'
                : 'Add To Watch Later'}
            </p>
          </div>
        </div>

        <p className='card__author'>
          {creator} <span className='card__date'>{date}</span>
        </p>
      </div>
    </div>
  );
}
