import axios from 'axios';

export function postPhoto(photo){
  return axios.post('http://localhost:3000/photo', photo);
}