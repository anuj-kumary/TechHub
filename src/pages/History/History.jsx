import React from 'react';
import { Sidebar } from '../../components';
import { useData } from '../../contexts';
import { VideoCard } from '../VideoListing/components/VideoCard';
export const History = () => {
  const { state } = useData();
  return (
    <div>
      <div className='video__container'>
        <Sidebar />
        <div className='video__list'>
          {state.history.length > 0 ? (
            state.history.map((item) => (
              <VideoCard item={item} key={item._id} />
            ))
          ) : (
            <h1 className='text text__center'>
              Looks like you haven't watch anything yet.
            </h1>
          )}
        </div>
      </div>
    </div>
  );
};
