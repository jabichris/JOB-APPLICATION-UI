import axios from 'axios';

console.log(process.env)

const token = localStorage.getItem('token');
export default axios.create({
  baseURL: `${process.env.API_URL}`,
  headers: {
    authorization: token || localStorage.token || ''
  }
});