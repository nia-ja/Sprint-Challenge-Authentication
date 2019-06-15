import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:3300/api/',
})

instance.interceptors.request.use(
    (config) => {
        // will run every time when request is made
        config.headers.authorization = localStorage.getItem('token');
        return config;
    },
    (err) => {
        return Promise.reject(err);
    }
)

export default instance;