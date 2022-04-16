import { addToHistoryServices } from '../Services/Services';

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
