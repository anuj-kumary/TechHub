import React from 'react';
import { useParams } from 'react-router-dom';
import { Sidebar } from '../../components';
import { useAuth, useData } from '../../contexts';
import { likedHandler, watchLaterHandler } from '../../utils';
import './SingleVideo.css';

export const SingleVideo = () => {
  const { videoID } = useParams();
  const { state, dispatch } = useData();
  const { token } = useAuth();
  const video = state.videos?.find((element) => element._id === videoID);
  const isLiked = state.like.find((element) => element._id === video._id);
  const isInWatchLater = state.watchlater.find(
    (element) => element._id === video._id
  );

  return (
    <>
      <div className='videoplayer'>
        <Sidebar />
        <div className='play__container'>
          <iframe
            width='100%'
            height='100%'
            src={video?.src}
            title='YouTube video player'
            frameBorder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen=''
          ></iframe>
          <div className='video__footer'>
            <div className='footer__title'>
              <h2 className='video__heading'>{video?.title}</h2>
              <h5 className='video__author'>{video?.creator}</h5>
              <small className='video__date'>{video?.date}</small>
            </div>
            <div className='footer__btn'>
              <button
                onClick={() => likedHandler(video, token, dispatch, isLiked)}
                className={
                  isLiked
                    ? 'btn btn__action is__liked'
                    : 'btn btn__action btn__icon'
                }
              >
                <i className='fas fa-thumbs-up'></i>
                {isLiked ? 'Liked' : 'Like'}
              </button>
              <button
                onClick={() =>
                  watchLaterHandler(video, token, dispatch, isInWatchLater)
                }
                className={
                  isInWatchLater
                    ? 'btn btn__action isin__watchlater  '
                    : 'btn btn__action btn__icon'
                }
              >
                <i className='fas fa-clock'></i>Watch Later
              </button>
              <button className='btn btn__icon btn__action'>
                <i className='fas fa-save'></i> Save
              </button>
            </div>
            <div className='video__description'>
              <h4 className='video__heading'>Description:</h4>
              <p className='desc__text'>{video?.description}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
