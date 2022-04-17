import {
  createNewPlaylistService,
  addVideoPlaylistServices,
  removeVideoPlaylistServices,
  removePlaylistServices,
} from '../Services/Services';
import { ToastHandler } from './toastfunction';

export const playlistHandler = async (dispatch, name, token) => {
  try {
    const response = await createNewPlaylistService(token, name);
    if (response.status === 201) {
      dispatch({
        type: 'PLAYLIST',
        payload: {
          playlists: response.data.playlists,
        },
      });
    }
  } catch (error) {
    console.error(error);
  }
};

export const addToVideoPlaylist = async (dispatch, id, video, token) => {
  try {
    const response = await addVideoPlaylistServices(id, video, token);
    dispatch({
      type: 'VIDEO_PLAYLIST',
      payload: {
        playlists: response.data.playlist,
      },
    });
  } catch (error) {
    console.error(error);
  }
};

export const removeVideoFromPlaylist = async (dispatch, id, videoId, token) => {
  try {
    const response = await removeVideoPlaylistServices(id, videoId, token);
    dispatch({
      type: 'VIDEO_PLAYLIST',
      payload: {
        playlists: response.data.playlist,
      },
    });
    ToastHandler('success', 'Video removed from Your Playlist');
  } catch (error) {
    console.error(error);
  }
};

export const removePlaylist = async (id, token, dispatch) => {
  try {
    const response = await removePlaylistServices(id, token);
    if (response.status === 200) {
      dispatch({
        type: 'PLAYLIST',
        payload: {
          playlists: response.data.playlists,
        },
      });
      ToastHandler('success', 'Playlist Deleted succesfully');
    }
  } catch (error) {
    console.error(error);
  }
};
