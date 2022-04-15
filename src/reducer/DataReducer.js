import { ACTION_TYPE } from '../utils';

export const InitialState = {
  videos: [],
  like: [],
  watchlater: [],
};

export const DataReducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPE.INITIAL_DATA: {
      return {
        ...state,
        videos: action.payload,
      };
    }

    case ACTION_TYPE.ADD_LIKED: {
      return {
        ...state,
        like: action.payload.like,
      };
    }

    case ACTION_TYPE.REMOVE_LIKE_VIDEO: {
      return {
        ...state,
        like: action.payload.like,
      };
    }

    case ACTION_TYPE.ADD_WATCHLATER: {
      return {
        ...state,
        watchlater: action.payload.watchlater,
      };
    }
    case ACTION_TYPE.REMOVE_WATCHLATER: {
      return {
        ...state,
        watchlater: action.payload.watchlater,
      };
    }

    default:
      return state;
  }
};
