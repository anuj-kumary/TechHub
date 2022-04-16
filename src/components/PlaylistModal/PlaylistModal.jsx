import { useState } from 'react';
import { useAuth, useData } from '../../contexts';

export const PlaylistModal = () => {
  const { modal, setModal, modalData, dispatch, state } = useData();
  const { token } = useAuth();
  const { showInput, setShowInput } = useState(false);
  const { playlistName, setPlaylistName } = useState('');

  const addToVideoPlaylist = () => {};
  const removeVideoFromPlaylist = () => {};
  const createHandler = () => {};
  return (
    <div className={`modal-wrapper ${modal ? 'modal__show' : 'modal__hide'}`}>
      <div className='playlist__modal'>
        <h4>Save To</h4>
        <i
          className='fa fa-times'
          aria-hidden='true'
          onClick={() => setModal(!modal)}
        />
        {state.playlist.length > 0 &&
          state.playlist.map((list) => {
            const inPlaylist = list.videos?.some(
              (list) => list._id === modalData._id
            );
            return (
              <div key={list._id}>
                <label>
                  <input
                    type='checkbox'
                    checked={inPlaylist}
                    onChange={(e) =>
                      e.target.checked
                        ? addToVideoPlaylist(
                            dispatch,
                            list._id,
                            modalData._id,
                            token
                          )
                        : removeVideoFromPlaylist(
                            dispatch,
                            list._id,
                            modalData._id,
                            token
                          )
                    }
                  />
                  <span>{list.title}</span>
                </label>
              </div>
            );
          })}
        <div>
          <label>
            <input
              type='text'
              value={playlistName}
              onChange={(e) => setPlaylistName(e.target.value)}
            />
          </label>
        </div>
        <div>
          <button onClick={() => createHandler()}>Create New Playlistt</button>
        </div>
      </div>
    </div>
  );
};
