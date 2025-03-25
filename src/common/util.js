import API from '../common/api';

const util = {
    hasInvalidChar: (value) => {
        const forbidden = /[<>{}[\]'";()\\]/;
        return forbidden.test(value);
    },

    // 이메일 유효성 검사
    validateEmail: (email) => {
        const regex = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
        return regex.test(email);
    },

    // 비밀번호 유효성 검사 (최소 4자 이상)
    validatePassword: (password) => {
        return password.length >= 4 && password.length <= 100;
    },

    // 비밀번호 확인 일치 여부
    isPasswordMatch: (pw, checkPw) => {
        return pw === checkPw;
    },

    // 닉네임 유효성 검사 (2자 이상, 공백 제거)
    validateNickname: (nickname) => {
        return nickname.trim().length >= 2 && nickname.trim().length <= 10;
    },

    // 모든 필드 값이 비어있지 않은지 검사
    validateRequiredFields: (fields) => {
        return Object.values(fields).every((value) => value && value.trim() !== '');
    },

    // 단일 필드 검사
    validateField: (name, value, formData) => {
        if (util.hasInvalidChar(value)) return '특수문자는 사용할 수 없습니다.';

        switch (name) {
            case 'userEmail':
                return util.validateEmail(value) ? '' : '이메일 형식이 올바르지 않습니다.';

            case 'userPassword':
                return util.validatePassword(value) ? '' : '비밀번호는 4자 이상이어야 합니다.';

            case 'userNickname':
                return util.validateNickname(value) ? '' : '닉네임은 2자 이상, 10자 이하 이어야 합니다.';

            case 'userPasswordCheck':
                return value !== formData.userPassword ? '비밀번호가 일치하지 않습니다.' : '';

            default:
                return '';
        }
    },

    // 로그인 함수
    loginUser: async (userEmail, userPassword) => {
        try {
            // 로그인 요청
            const loginResponse = await API.post('/users/auth/login', {
                userEmail,
                userPassword,
            });

            const { token } = loginResponse.data;
            localStorage.setItem('token', token); // JWT 토큰 저장

            return { success: true, token };
        } catch (err) {
            let errMsg = '로그인에 실패했습니다. 다시 시도해주세요.';

            if (err.response) {
                // 서버 에러 처리
                errMsg = err.response.data.message || errMsg;
            } else if (err.request) {
                // 네트워크 에러 처리
                errMsg = '네트워크 연결 오류입니다. 다시 시도해주세요.';
            }

            return { success: false, err: errMsg };
        }
    },
};

export default util;
