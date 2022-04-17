import React from 'react';
import { useParams } from 'react-router-dom';
import { Sidebar } from '../../../components';
import { useData } from '../../../contexts';
import PlaylistCard from './PlaylistCard';

export const PlaylistVideo = () => {
  const { playlistId } = useParams();
  const { state } = useData();
  const isInPlaylistVideo = state.playlists.find(
    (element) => element._id === playlistId
  );
  const { videos } = isInPlaylistVideo;

  return (
    <div>
      <div className='video__container'>
        <Sidebar />

        <div className='video__list'>
          <div className='video__card'>
            {videos.length > 0 ? (
              videos.map((item) => (
                <PlaylistCard
                  item={item}
                  listId={playlistId}
                  isInPlaylistVideo={isInPlaylistVideo}
                  key={item._id}
                />
              ))
            ) : (
              <h1 className='text text__center'>
                Looks like you haven't Added anything yet.
              </h1>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
