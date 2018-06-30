import { UPLOAD_PHOTO, SET_FOOD_LIST, SHOW_SPINNER } from './actionTypes';

export function setFoodList(list) {
  return {
    type: SET_FOOD_LIST,
    list,
    loading: false
  }
}

export function showSpinner() {
  return {
    type: SHOW_SPINNER,
  }
}

export function uploadPhoto(photo) {
  return {
    type: UPLOAD_PHOTO,
    // photo: ['Apple', 'Milk']
    photo,
  }
}