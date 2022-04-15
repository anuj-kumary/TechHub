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
          {state.watchlater.map((item) => (
            <VideoCard item={item} key={item._id} />
          ))}
        </div>
      </div>
    </div>
  );
};
