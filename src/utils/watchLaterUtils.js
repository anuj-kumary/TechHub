import {
  removeWatchLaterServices,
  watchLaterServices,
} from '../Services/Services';

export const watchLaterHandler = async (
  video,
  token,
  dispatch,
  isInWatchLater
) => {
  if (isInWatchLater) {
    removeVideoWatchLater(video._id, token, dispatch);
  } else {
    const response = await watchLaterServices(video, token);
    if (response.status === 201) {
      dispatch({
        type: 'ADD_WATCHLATER',
        payload: {
          watchlater: response.data.watchlater,
        },
      });
    }
  }
};

const removeVideoWatchLater = async (videoId, token, dispatch) => {
  const response = await removeWatchLaterServices(videoId, token);
  if (response.status === 200) {
    dispatch({
      type: 'REMOVE_WATCHLATER',
      payload: {
        watchlater: response.data.watchlater,
      },
    });
  }
};
