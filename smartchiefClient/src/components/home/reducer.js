import initialState from 'components/home/initialState';
import * as actionTypes from 'components/home/actionTypes';

export default function homeReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.SET_FOOD_LIST:
      foodList = [
        ...state.foodList,
        action.payload,
      ];
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
