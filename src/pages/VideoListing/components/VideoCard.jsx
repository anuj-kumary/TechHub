import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth, useData } from '../../../contexts';
import { watchLaterHandler } from '../../../utils';
import {
  addToVideoPlaylist,
  playlistHandler,
  removeVideoFromPlaylist,
} from '../../../utils/playListUtils';
import './VideoCard.css';

export const VideoCard = ({ item, listId, isInPlaylistVideo }) => {
  const navigate = useNavigate();
  const { token } = useAuth();
  const { modal, setModal, modalData, dispatch, setModalData, state } =
    useData();
  const [showModal, setShowModal] = useState();
  const [playlistName, setPlaylistName] = useState('');
  const isInWatchLater = state.watchlater.find(
    (element) => element._id === item._id
  );

  const createHandler = () => {
    playlistName && playlistHandler(dispatch, playlistName, token);
    setPlaylistName('');
  };

  const { _id, img, title, creator, date } = item;

  const singleVideoPage = () => {
    navigate(`/singlevideo/${_id}`);
  };

  const addToPlaylist = () => {
    if (token) {
      setModal(true);
      setModalData(item);
    } else {
      navigate('/signin');
    }
  };

  return (
    <>
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
                isInPlaylistVideo
                  ? removeVideoFromPlaylist(dispatch, listId, item._id, token)
                  : addToPlaylist();
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

      <div className={`modal-wrapper ${modal ? 'modal__show' : 'modal__hide'}`}>
        <div className='playlist__modal'>
          <h4 className='playlist__text'>
            Save To
            <i
              className='playlist__text playlist__close fa fa-times'
              aria-hidden='true'
              onClick={() => setModal(!modal)}
            />
          </h4>

          {state.playlists.length > 0 &&
            state.playlists.map((list) => {
              const inPlaylist = list.videos?.some(
                (list) => list._id === modalData._id
              );
              return (
                <div key={list._id}>
                  <label>
                    <input
                      type='checkbox'
                      checked={inPlaylist}
                      onChange={(e) =>
                        e.target.checked
                          ? addToVideoPlaylist(
                              dispatch,
                              list._id,
                              modalData,
                              token
                            )
                          : removeVideoFromPlaylist(
                              dispatch,
                              list._id,
                              modalData._id,
                              token
                            )
                      }
                    />
                    <span className='playlist__title'>{list.title}</span>
                  </label>
                </div>
              );
            })}
          <div>
            <label className='playlist__text'>
              Name:
              <input
                type='text'
                className='playlist__input'
                value={playlistName}
                onChange={(e) => setPlaylistName(e.target.value)}
              />
            </label>
          </div>
          <div>
            <button className='playlist__btn' onClick={() => createHandler()}>
              Create New Playlist
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
