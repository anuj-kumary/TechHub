import React from 'react';
import { Sidebar } from '../../components';
import { useData } from '../../contexts';
import { VideoCard } from '../VideoListing/components/VideoCard';

export const Like = () => {
  const { state } = useData();
  return (
    <div>
      <div className='video__container'>
        <Sidebar />
        <div className='video__list'>
          <div className='video__card'>
            {state.like.length > 0 ? (
              state.like.map((item) => <VideoCard item={item} key={item._id} />)
            ) : (
              <h1 className='text text__center'>
                Looks like you haven't liked anything yet.
              </h1>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
