import { useNavigate } from 'react-router-dom';
import { useAuth, useData } from '../../../contexts';
import { removePlaylist } from '../../../utils/playListUtils';

export const PlaylistFolder = ({ element }) => {
  const navigate = useNavigate();
  const { _id, title, videos } = element;
  const { dispatch } = useData();
  const { token } = useAuth();

  const playlistVideoHandler = () => {
    navigate(`/playlist/${_id}`);
  };

  return (
    <>
      <div className='card playlist__card'>
        <div onClick={() => playlistVideoHandler()} className='card__imgs'>
          <img className='img-res' src={videos[0]?.img} alt='banner' />
          <div className='playlist__card--number'>
            <p>{videos.length}</p>
          </div>
        </div>
        <header className='card__heading playlist__heading'>
          {title}
          <i
            onClick={() => removePlaylist(_id, token, dispatch)}
            className='playlist__delete--icon fas fa-trash-alt'
          ></i>
        </header>
      </div>
    </>
  );
};
