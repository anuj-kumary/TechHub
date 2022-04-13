import React from 'react';
import { Sidebar } from '../../components/Sidebar/Sidebar';
import { useData } from '../../contexts/data-context';
import { VideoCard } from './components/VideoCard';
import './VideoListing.css';

export const VideoListing = () => {
  const { state } = useData();

  return (
    <>
      <div className='video__container'>
        <Sidebar />
        <div className='video__list'>
          {state.videos.map((item) => (
            <VideoCard item={item} key={item._id} />
          ))}
        </div>
      </div>
    </>
  );
};
