import { useEffect, useState, useRef } from 'react';
import util from '../common/util';
import API from '../common/api';

const useFormValidation = (initialState) => {
    const [formData, setFormData] = useState(initialState);
    const [errors, setErrors] = useState({});
    const [agreed, setAgreed] = useState(false);
    const [isFormValid, setIsFormValid] = useState(false);
    const [emailAvailable, setEmailAvailable] = useState(null);
    const [nicknameAvailable, setNicknameAvailable] = useState(null);

    const debounceTimer = useRef({
        userEmail: null,
        userNickname: null,
    });

    // 중복체크
    const checkDuplicate = (field, value) => {
        // 상태 초기화
        if (field === 'userEmail') setEmailAvailable(null);
        if (field === 'userNickname') setNicknameAvailable(null);

        clearTimeout(debounceTimer.current[field]);

        debounceTimer.current[field] = setTimeout(() => {
            const url = field === 'userEmail' ? '/users/auth/check-email' : '/users/auth/check-nickname';

            const data = field === 'userEmail' ? { userEmail: value } : { userNickname: value };

            // 서버에 요청
            API.post(url, data)
                .then((res) => {
                    if (field === 'userEmail') setEmailAvailable(res.data.data);
                    else setNicknameAvailable(res.data.data);
                })
                .catch((err) => console.error(err));
        }, 500);
    };

    // 모든 필드 검사
    const validateAll = () => {
        const newErrors = {};
        let isValid = true;

        Object.entries(formData).forEach(([key, value]) => {
            const errorMsg = util.validateField(key, value, formData);
            newErrors[key] = errorMsg;
            if (errorMsg) isValid = false;
        });

        if (!agreed) isValid = false;

        setErrors(newErrors);
        return isValid;
    };

    // 입력 변경 시 호출
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));

        const errorMsg = util.validateField(name, value, formData);
        setErrors((prev) => ({ ...prev, [name]: errorMsg }));

        // 형식이 유효할 경우에만 중복 체크 요청
        if (name === 'userEmail' && util.validateEmail(value)) {
            checkDuplicate('userEmail', value);
        }
        if (name === 'userNickname' && util.validateNickname(value)) {
            checkDuplicate('userNickname', value);
        }
    };

    // 체크박스 처리
    const handleCheckbox = (e) => {
        setAgreed(e.target.checked);
    };

    // 유효성 변화 감지
    useEffect(() => {
        const isErrorChecked = Object.keys(errors).length === Object.keys(formData).length;
        if (!isErrorChecked) return;

        const valid =
            Object.values(errors).every((v) => !v) &&
            Object.values(formData).every((v) => v) &&
            formData.userPassword === formData.userPasswordCheck &&
            agreed &&
            emailAvailable === true &&
            nicknameAvailable === true;

        setIsFormValid(valid);
    }, [formData, errors, agreed, emailAvailable, nicknameAvailable]);

    return {
        formData,
        errors,
        isFormValid,
        agreed,
        emailAvailable,
        nicknameAvailable,
        handleChange,
        handleCheckbox,
        validateAll,
    };
};

export default useFormValidation;
