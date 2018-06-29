import { SET_FOOD_LIST } from 'components/home/actionTypes';
import { UPLOAD_PHOTO } from './actionTypes';

export function setFoodList(list) {
  return {
    type: SET_FOOD_LIST,
    list,
  }
}

export function uploadPhoto(photo) {
  return {
    type: UPLOAD_PHOTO,
    photo,
  }
}