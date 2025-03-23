import { useEffect, useState } from 'react';
import util from '../common/util';

const useFormValidation = (initialState) => {
    const [formData, setFormData] = useState(initialState);
    const [errors, setErrors] = useState({});
    const [agreed, setAgreed] = useState(false);
    const [isFormValid, setIsFormValid] = useState(false);

    // 단일 필드 검사
    const validateField = (name, value) => {
        if (util.hasInvalidChar(value)) return '특수문자는 사용할 수 없습니다.';

        switch (name) {
            case 'userEmail':
                return util.validateEmail(value) ? '' : '이메일 형식이 올바르지 않습니다.';
            case 'userPassword':
                return util.validatePassword(value) ? '' : '비밀번호는 4자 이상이어야 합니다.';
            case 'userNickname':
                return util.validateNickname(value) ? '' : '닉네임은 2자 이상이어야 합니다.';
            case 'userPasswordCheck':
                return value !== formData.userPassword ? '비밀번호가 일치하지 않습니다.' : '';
            default:
                return '';
        }
    };

    // 모든 필드 검사
    const validateAll = () => {
        const newErrors = {};
        let isValid = true;

        Object.entries(formData).forEach(([key, value]) => {
            const errorMsg = validateField(key, value);
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

        const errorMsg = validateField(name, value);
        setErrors((prev) => ({ ...prev, [name]: errorMsg }));
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
            Object.values(errors).every((v) => !v) && Object.values(formData).every((v) => v) && formData.userPassword === formData.userPasswordCheck && agreed;

        setIsFormValid(valid);
    }, [formData, errors, agreed]);

    return {
        formData,
        errors,
        isFormValid,
        agreed,
        handleChange,
        handleCheckbox,
        validateAll,
    };
};

export default useFormValidation;
