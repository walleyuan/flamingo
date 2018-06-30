import { takeLatest, all, put, call } from 'redux-saga/effects';
import { UPLOAD_PHOTO } from 'components/home/actionTypes';
import { setFoodList } from 'components/home/actions';
import { postPhoto} from 'components/home/api';

export function* uploadPhoto(photo) {
  let response = yield call(postPhoto, photo);
  yield put(setFoodList(response.data.foodList));
}

export default function* homeSaga() {
  yield all([
    takeLatest(UPLOAD_PHOTO, uploadPhoto),
  ]);
}
