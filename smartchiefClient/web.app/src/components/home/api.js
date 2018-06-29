import axios from 'axios';

export function postPhoto(photo){
  return axios.post('http://localhost:8000/photo', photo);
}