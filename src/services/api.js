import axios from 'axios';

const api = axios.create({
    baseURL: 'https://copybox-backend.herokuapp.com'
});

export default api;