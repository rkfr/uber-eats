import { ACTION_TYPES } from './actions';

const initialState = {
  restaurantsListData: null,
  isLoading: false,
  error: null,
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.SAVE_RESTAURANTS: {
      const { payload } = action;

      return {
        ...state,
        error: null,
        restaurantsListData: payload,
      };
    }

    case ACTION_TYPES.SET_LOAD_RESTAURANTS_ERROR: {
      const { payload } = action;

      return {
        ...state,
        error: payload,
        restaurantsListData: null,
      };
    }

    case ACTION_TYPES.START_LOADING: {
      return {
        ...state,
        isloading: true,
      };
    }

    case ACTION_TYPES.STOP_LOADING: {
      return {
        ...state,
        isloading: false,
      };
    }

    default:
      return state;
  }
};
