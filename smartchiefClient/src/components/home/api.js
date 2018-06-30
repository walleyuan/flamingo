import axios from 'axios';

export function postPhoto(photo){
  const photoUrl = 'https://s3-ap-southeast-2.amazonaws.com/smartchef/11.jpg';
  return axios.get('http://localhost:3000', {
    params: {
      img: photoUrl,
    }
  });
}