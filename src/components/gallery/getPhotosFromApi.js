import axios from 'axios';

/**
 * Returns a Promise of an Array of Objects from an API
 * @param {*} limit = limit of how many items should be retrieved from api, integer
 */
export default function getPhotoArrayFromApiWithLimit(limit) {
  return axios
    .get('https://jsonplaceholder.typicode.com/photos/?_limit=' + limit)
    .then(res => {
      return res.data;
    });
}
