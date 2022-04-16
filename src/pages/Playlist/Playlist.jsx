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
          {isPlaylistFill ? (
            state.playlists.map((element) => (
              <PlaylistFolder key={element._id} element={element} />
            ))
          ) : (
            <h3 className='text text__center'>
              Looks like you haven't create playlist
            </h3>
          )}
        </div>
      </div>
    </div>
  );
};
