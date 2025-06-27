# 1. 빌드 스테이지 (Node.js 기반)
FROM node:22-alpine AS builder

WORKDIR /app

# 2. 의존성 설치
COPY package.json package-lock.json ./
RUN npm install

# 3. 리액트 앱 소스 복사 및 빌드
COPY . .
COPY .env .
RUN npm run build

# 4. 프로덕션 스테이지 (nginx 사용)
FROM nginx:stable-alpine

# 5. 빌드된 리액트 앱을 nginx의 html 폴더로 복사
COPY --from=builder /app/dist /usr/share/nginx/html
# 빌드 후 nginx.conf를 복사
COPY nginx.conf /etc/nginx/conf.d/default.conf


# 6. 3000 포트 노출
EXPOSE 3000

# 7. nginx 실행
CMD ["nginx", "-g", "daemon off;"]
