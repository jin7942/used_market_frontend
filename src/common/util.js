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
};

export default util;
