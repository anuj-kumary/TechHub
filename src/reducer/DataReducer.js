import { ACTION_TYPE } from '../utils/ActionType';

export const InitialState = {
  videos: [],
};

export const DataReducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPE.INITIAL_DATA: {
      return {
        ...state,
        videos: action.payload,
      };
    }

    default:
      return state;
  }
};
