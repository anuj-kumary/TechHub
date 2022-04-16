import {
  addToHistoryServices,
  clearAllHistoryServices,
  deleteVideoHistoryServices,
} from '../Services/Services';

export const addToHistory = (video, token, dispatch) => {
  try {
    (async () => {
      const response = await addToHistoryServices(video, token);
      if (response.status === 201) {
        dispatch({
          type: 'HISTORY',
          payload: {
            history: response.data.history,
          },
        });
      }
    })();
  } catch (error) {
    console.error(error);
  }
};

export const deleteVideoHistory = async (videoId, encodedToken, dispatch) => {
  try {
    const response = await deleteVideoHistoryServices(videoId, encodedToken);
    if (response.status === 200) {
      dispatch({
        type: 'HISTORY',
        payload: {
          history: response.data.history,
        },
      });
    }
  } catch (error) {
    console.error(error);
  }
};

export const clearAllHistory = async (encodedToken, dispatch) => {
  console.log(encodedToken);
  try {
    const response = await clearAllHistoryServices(encodedToken);
    console.log(response);
    if (response.status === 200) {
      dispatch({
        type: 'HISTORY',
        payload: {
          history: response.data.history,
        },
      });
    }
  } catch (error) {
    console.error(error);
  }
};
