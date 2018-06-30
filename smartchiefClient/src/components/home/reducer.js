import initialState from 'components/home/initialState';
import * as actionTypes from 'components/home/actionTypes';

export default function homeReducer(state = initialState.home, action) {
  switch (action.type) {
    case actionTypes.SET_FOOD_LIST:
      const foodList = action.list;
      const loading = action.loading;
      return {
        ...state,
        foodList,
        loading
      };

    case actionTypes.SHOW_SPINNER:
      return {
        ...state,
        loading: true
      };

    default:
      return state;
  }
}
