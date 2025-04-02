// import { useEffect } from 'react';
// import config from '../common/_config';
// import { toast } from 'react-toastify';
// import { useNavigate } from 'react-router-dom';

// const useSSE = () => {
//     const navigate = useNavigate();

//     useEffect(() => {
//         const token = localStorage.getItem('token');
//         if (token) {
//             const eventSource = new EventSource(`${config.BASE_URL}/notification/sse/connect?token=${token}`);

//             eventSource.addEventListener('connect', () => {
//                 console.log('SSE Connected');
//             });

//             eventSource.addEventListener('notify', (e) => {
//                 console.log(e);
//                 const payload = JSON.parse(e.data);
//                 console.log(payload);

//                 toast.info(
//                     <span>
//                         <h2>Hi</h2>
//                     </span>,
//                     {
//                         onClick: () => navigate(`/item/detail/${payload.itemSeq}`),
//                     }
//                 );
//             });

//             eventSource.onerror = () => {
//                 console.warn('SSE 연결 종료됨');
//                 eventSource.close();
//             };

//             return () => {
//                 eventSource.close(); // 언마운트 시 정리
//             };
//         }
//     }, [navigate]);
// };

// export default useSSE;
