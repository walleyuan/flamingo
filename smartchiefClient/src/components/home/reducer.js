import initialState from 'components/home/initialState';
import * as actionTypes from 'components/home/actionTypes';

export default function homeReducer(state = initialState.home, action) {
  switch (action.type) {
    case actionTypes.SET_FOOD_LIST:
      const foodList = action.list;
      return {
        ...state,
        foodList,
      };

    case actionTypes.RESET_FOOD_LIST:
      return {
        ...state,
        foodList: [],
      };

    default:
      return state;
  }
}
