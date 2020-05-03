import axios from 'axios';

const axiosConfig = () => {
  const token = localStorage.getItem('user')
  axios.defaults.baseURL = 'https://company-courses-api.herokuapp.com';
  if (token) { axios.defaults.headers.common.Authorization = `Bearer ${token}`; }
  axios.defaults.headers.post['Content-Type'] = 'application/json';
}
export default axiosConfig;
