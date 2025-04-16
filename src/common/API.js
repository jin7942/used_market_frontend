import axios from 'axios';
import config from './_config';

// test test
// 인증없이 접근 가능
const publicRoutes = [
    '/users/auth/register', // 회원가입 API
    '/users/auth/login', // 로그인 API
    '/users/auth/check-email', // 이메일 중복 체크 API
    '/users/auth/check-nickname', // 닉네임 중복 체크 API
    '/items/list', // 메인 페이지 API
];

const API = axios.create({
    baseURL: config.BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

// 인터셉터로 Authorization 헤더를 요청마다 자동 추가
API.interceptors.request.use((req) => {
    const token = localStorage.getItem('token');
    // 요청 경로 전체 (baseURL 제외한 상대 경로)
    const requestPath = req.url;

    // 공개 경로 여부 확인
    const isPublic = publicRoutes.some((route) => requestPath === route || requestPath.startsWith(route));

    if (token && !isPublic) {
        req.headers.Authorization = 'Bearer ' + token;
    }

    return req;
});

// 응답 인터셉터
API.interceptors.response.use(
    (res) => res, // 성공적인 응답은 그대로 리턴
    (error) => {
        const originalUrl = error.config?.url;

        const isAuthApi = ['/users/auth/login', '/users/auth/register'].some((url) => originalUrl.includes(url));

        if (error.response && error.response.status === 401 && !isAuthApi) {
            // 401 에러가 발생하면 로그인 페이지로 리다이렉트 또는 로그인 요청
            alert('로그인이 필요한 페이지 입니다.');
            localStorage.clear();
            window.location.href = '/';
        }
        return Promise.reject(error); // 에러가 발생하면 rejected 상태로 처리
    }
);

export default API;
