import { ACTION_TYPE } from '../utils';

export const InitialState = {
  videos: [],
  categories: [],
  like: [],
  watchlater: [],
  history: [],
  playlists: [],
  search: '',
  sortBy: '',
};

export const DataReducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPE.INITIAL_DATA: {
      return {
        ...state,
        videos: action.payload,
      };
    }

    case ACTION_TYPE.CATEGORIES: {
      return {
        ...state,
        categories: [
          ...action.payload.map((cat) => ({
            ...cat,
            isActive: cat.categotyName === 'ALL' ? true : false,
          })),
        ],
      };
    }

    case ACTION_TYPE.SORT_BY: {
      return {
        ...state,
        sortBy: action.payload,
        categories: state.categories.map((cat) =>
          cat.categoryName === action.payload
            ? {
                ...cat,
                isActive: true,
              }
            : {
                ...cat,
                isActive: false,
              }
        ),
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
    case ACTION_TYPE.PLAYLIST: {
      return {
        ...state,
        playlists: action.payload.playlists,
      };
    }
    case ACTION_TYPE.VIDEO_PLAYLIST: {
      return {
        ...state,
        playlists: state.playlists.map((list) =>
          list._id === action.payload.playlists._id
            ? action.payload.playlists
            : list
        ),
      };
    }

    case ACTION_TYPE.HISTORY: {
      return {
        ...state,
        history: action.payload.history,
      };
    }
    case ACTION_TYPE.SEARCH: {
      return {
        ...state,
        search: action.payload,
      };
    }

    default:
      return state;
  }
};
