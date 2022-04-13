import axios from 'axios';

export const getAllVideosServices = async () => await axios.get(`/api/videos`);
