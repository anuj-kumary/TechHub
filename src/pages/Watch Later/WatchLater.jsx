import React from 'react';
import { Sidebar } from '../../components';
import { useData } from '../../contexts';
import { VideoCard } from '../VideoListing/components/VideoCard';

export const Watchlater = () => {
  const { state } = useData();
  return (
    <div>
      <div className='video__container'>
        <Sidebar />
        <div className='video__list'>
          <div className='video__card'>
            {state.watchlater.length > 0 ? (
              state.watchlater.map((item) => (
                <VideoCard item={item} key={item._id} />
              ))
            ) : (
              <h1 className='text text__center'>
                There is no watch later video currently
              </h1>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
