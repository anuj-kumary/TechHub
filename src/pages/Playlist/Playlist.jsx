import { Sidebar } from '../../components';
import { useData } from '../../contexts';
import { PlaylistFolder } from './component/PlaylistFolder';
import './Playlist.css';

export const Playlist = () => {
  const { state } = useData();
  const isPlaylistFill = state.playlists.length > 0;

  return (
    <div>
      <div className='video__container'>
        <Sidebar />
        <div className='video__list'>
          <div className='video__card'>
            {isPlaylistFill ? (
              state.playlists.map((element) => (
                <PlaylistFolder key={element._id} element={element} />
              ))
            ) : (
              <h1 className='text text__center heading__text'>
                Looks like you haven't create playlist
              </h1>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
