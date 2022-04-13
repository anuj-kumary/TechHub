import React from 'react';
import { useParams } from 'react-router-dom';
import { Sidebar } from '../../components/Sidebar/Sidebar';
import { useData } from '../../contexts/data-context';
import './SingleVideo.css';

export const SingleVideo = () => {
  const { videoID } = useParams();
  const { state } = useData();
  const findVideo = state.videos?.find((element) => element._id === videoID);
  console.log(findVideo);
  return (
    <>
      <div className='videoplayer'>
        <Sidebar />
        <div className='play__container'>
          <iframe
            width='100%'
            height='100%'
            src={findVideo?.src}
            title='YouTube video player'
            frameBorder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen=''
          ></iframe>
          <div className='video__footer'>
            <div className='footer__title'>
              <h2 className='video__heading'>{findVideo?.title}</h2>
              <h5 className='video__author'>{findVideo?.creator}</h5>
              <small className='video__date'>{findVideo?.date}</small>
            </div>
            <div className='footer__btn'>
              <button className='btn btn__icon'>
                <i className='fas fa-thumbs-up'></i> Like
              </button>
              <button className='btn btn__icon'>
                <i className='fas fa-save'></i> Save
              </button>
              <button className='btn btn__icon'>
                <i className='fas fa-clock'></i>Watch Later
              </button>
            </div>
            <div className='video__description'>
              <h4 className='video__heading'>Description:</h4>
              <p className='desc__text'>{findVideo?.description}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
