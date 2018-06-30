import axios from 'axios';

export function postPhoto(photo){
  const photoUrl = 'https://previews.123rf.com/images/kert/kert1102/kert110200003/8856730-fruit-and-vegetables-in-the-fridge.jpg';
  return axios.get('http://localhost:3000', {
    params: {
      img: photoUrl,
    }
  });
}