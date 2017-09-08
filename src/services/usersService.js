import axios from 'axios';

export function getAll() {
  return axios.get('/api/getAll').then(res => {
    return res.data
  })
}