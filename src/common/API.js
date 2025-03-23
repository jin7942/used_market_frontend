import axios from 'axios';
import config from './_config';

const API = axios.create({
    baseURL: config.BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

// 인터셉터로 Authorization 헤더를 요청마다 자동 추가
API.interceptors.request.use((req) => {
    const token = localStorage.getItem('token');
    if (token) {
        req.headers.Authorization = 'Bearer ' + token;
    }
    return req;
});

export default API;
