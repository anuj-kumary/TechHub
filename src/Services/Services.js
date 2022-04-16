import axios from 'axios';

export const getAllVideosServices = async () => await axios.get(`/api/videos`);

export const loginServices = async (email, password) =>
  await axios.post('/api/auth/login', {
    email,
    password,
  });

export const signupSevices = async (email, password, firstName, lastName) =>
  await axios.post('/api/auth/signup', {
    email,
    password,
    firstName,
    lastName,
  });

export const likedServices = async (video, encodedToken) =>
  await axios.post(
    '/api/user/likes',
    { video },
    {
      headers: {
        authorization: encodedToken,
      },
    }
  );

export const removeLikedVideoService = async (videoId, encodedToken) =>
  await axios.delete(`/api/user/likes/${videoId}`, {
    headers: {
      authorization: encodedToken,
    },
  });

export const watchLaterServices = async (video, encodedToken) =>
  await axios.post(
    '/api/user/watchlater',
    { video },
    {
      headers: {
        authorization: encodedToken,
      },
    }
  );

export const removeWatchLaterServices = async (videoId, encodedToken) =>
  await axios.delete(`/api/user/watchlater/${videoId}`, {
    headers: {
      authorization: encodedToken,
    },
  });

export const createNewPlaylistService = async (encodedToken, name) =>
  await axios.post(
    '/api/user/playlists',
    {
      playlist: {
        title: name,
        description: '',
      },
    },
    {
      headers: {
        authorization: encodedToken,
      },
    }
  );

export const addVideoPlaylistServices = async (id, video, encodedToken) =>
  await axios.post(
    `/api/user/playlists/${id}`,
    { video },
    {
      headers: {
        authorization: encodedToken,
      },
    }
  );

export const removeVideoPlaylistServices = async (
  id,
  videoId,
  encodedToken
) => {
  return await axios.delete(`/api/user/playlists/${videoId}/${id}`, {
    headers: {
      authorization: encodedToken,
    },
  });
};

export const removePlaylistServices = async (id, encodedToken) => {
  return await axios.delete(`/api/user/playlists/${id}`, {
    headers: {
      authorization: encodedToken,
    },
  });
};

export const addToHistoryServices = async (video, encodedToken) =>
  await axios.post(
    '/api/user/history',
    { video },
    {
      headers: {
        authorization: encodedToken,
      },
    }
  );

export const deleteVideoHistoryServices = async (videoId, encodedToken) =>
  await axios.delete(`/api/user/history/${videoId}`, {
    headers: {
      authorization: encodedToken,
    },
  });

export const clearAllHistoryServices = async (encodedToken) =>
  await axios.delete('/api/user/history/all', {
    headers: {
      authorization: encodedToken,
    },
  });
