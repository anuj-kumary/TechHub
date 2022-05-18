import {
  removeWatchLaterServices,
  watchLaterServices,
} from '../Services/Services';
import { ToastHandler } from './toastfunction';

export const watchLaterHandler = async (
  video,
  token,
  dispatch,
  isInWatchLater
) => {
  if (isInWatchLater) {
    removeVideoWatchLater(video._id, token, dispatch);
  } else {
    try {
      const response = await watchLaterServices(video, token);
      if (response.status === 201) {
        dispatch({
          type: 'ADD_WATCHLATER',
          payload: {
            watchlater: response.data.watchlater,
          },
        });
        ToastHandler('success', 'Video Added In Watch Later');
      }
    } catch (error) {
      ToastHandler('warn', 'Please LoggedIn');
    }
  }
};

const removeVideoWatchLater = async (videoId, token, dispatch) => {
  try {
    const response = await removeWatchLaterServices(videoId, token);
    if (response.status === 200) {
      dispatch({
        type: 'REMOVE_WATCHLATER',
        payload: {
          watchlater: response.data.watchlater,
        },
      });
      ToastHandler('success', 'Video Removed from Watch Later');
    }
  } catch (error) {
    console.error(error);
  }
};
