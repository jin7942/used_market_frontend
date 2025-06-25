# NextUse - Frontend

NextUse는 React 기반 SPA와 SpringBoot로 제작된 사용자 인증, 상품 등록 및 조회 기능등을 포함한 중고 거래 플랫폼의 핵심 기능을 구현한 데모 프로젝트 입니다.

본 문서는 프론트엔드 리파지토리 입니다.

## 주요 기능

-   JWT 기반 로그인/회원가입
-   상품 등록/수정/조회/삭제
-   마이페이지 내 카테고리별 토글뷰
-   상품 찜하기, 구매하기 기능
-   SSE 기반 실시간 알림 수신 및 토스트 출력
-   로그인/회원가입 모달

## 기술 스택

| 분류       | 기술                                                       |
| ---------- | ---------------------------------------------------------- |
| 프레임워크 | [React](https://reactjs.org/), [Vite](https://vitejs.dev/) |
| 상태관리   | React Hooks (`useState`, `useEffect`, 등)                  |
| 스타일링   | Bootstrap5                                                 |
| 라우팅     | React Router DOM                                           |
| 알림       | Server-Sent Events (SSE) + react-toastify                  |
| HTTP 통신  | Axios                                                      |

## 프로젝트 구조

```
src/
├── assets/                # 이미지 리소스 등
├── common/                # API 설정, 공통 config
│   ├── API.js             # axios 인터페이스
│   └── _config.js         # 서버 주소 설정
├── components/            # Header 등 재사용 컴포넌트
├── hooks/                 # 커스텀 훅 (useSSE 등)
├── pages/                 # 라우팅 페이지 구성
│   ├── Home.jsx
│   ├── MyPage.jsx
│   ├── Signup.jsx
│   ├── Login.jsx
│   ├── ItemDetail.jsx
│   ├── ItemForm.jsx
│   └── Order.jsx
├── util/                  # 날짜, 가격 포맷 유틸 함수
├── App.jsx                # 라우팅 및 알림 SSE 초기화
├── main.jsx               # 엔트리 포인트
└── index.html             # Vite 템플릿
```

## 실행 방법

```bash
# 1. 저장소 클론
git clone https://github.com/jin7942/used_market_frontend.git
cd used_market_frontend

# 2. 의존성 설치
npm install

# 3. 개발 서버 실행
npm run dev
```

## 관련 저장소

-   **백엔드**: [used_market](https://github.com/jin7942/used_market)
-   **이미지 업로드 서버**: [uploadServer](https://github.com/jin7942/uploadServer)
