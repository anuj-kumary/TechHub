import { likedServices, removeLikedVideoService } from '../Services/Services';
import { ToastHandler } from './toastfunction';

export const likedHandler = async (video, token, dispatch, isLiked) => {
  if (isLiked) {
    removeLikeVideoHandler(video._id, token, dispatch);
  } else {
    const response = await likedServices(video, token);
    if (response.status === 201) {
      dispatch({
        type: 'ADD_LIKED',
        payload: {
          like: response.data.likes,
        },
      });
      ToastHandler('success', 'Video Added In Your Liked Page');
    }
  }
};

const removeLikeVideoHandler = async (videoId, token, dispatch) => {
  const response = await removeLikedVideoService(videoId, token);
  if (response.status === 200) {
    dispatch({
      type: 'REMOVE_LIKE_VIDEO',
      payload: {
        like: response.data.likes,
      },
    });
  }
};
