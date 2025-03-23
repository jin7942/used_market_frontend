import Header from '../components/Header';
import Footer from '../components/Footer';
import { useState, useEffect } from 'react';
import util from '../common/util';

const Signup = () => {
    const [formData, setFormData] = useState({
        userEmail: '',
        userPassword: '',
        userNickname: '',
    });

    const [errors, setErrors] = useState({
        userEmail: '',
        userPassword: '',
        userNickname: '',
    });

    const [agreed, setAgreed] = useState(false);
    const [isFormValid, setIsFormValid] = useState(false);

    useEffect(() => {
        const allValid =
            !errors.userEmail &&
            !errors.userPassword &&
            !errors.userPasswordCheck &&
            !errors.userNickname &&
            formData.userEmail &&
            formData.userPassword &&
            formData.userPasswordCheck &&
            formData.userNickname &&
            formData.userPassword === formData.userPasswordCheck &&
            agreed;

        setIsFormValid(allValid);
    }, [errors, formData, agreed]);

    // 단일 필드 유효성 검사
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

    // 전체 유효성 검사
    const validateAll = () => {
        const newErrors = {};
        let isValid = true;

        Object.entries(formData).forEach(([key, value]) => {
            const errorMsg = validateField(key, value);
            newErrors[key] = errorMsg;
            if (errorMsg) isValid = false;
        });

        setErrors(newErrors);
        return isValid;
    };
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));

        const errorMsg = validateField(name, value);
        setErrors((prev) => ({ ...prev, [name]: errorMsg }));
    };

    const handleCheckbox = (e) => {
        setAgreed(e.target.checked);
    };

    const handleSignUp = async (e) => {
        e.preventDefault();
        const valid = validateAll();
        if (!valid) {
            alert('입력값을 확인해주세요.');
            return;
        }

        console.log('회원가입 요청 데이터:', formData);
        // 요청 로직 여기에 추가
    };

    return (
        <div className='d-flex flex-column min-vh-100'>
            <Header />
            <main className='container mt-5 flex-grow-1 pt-5'>
                <div className='row'>
                    <div className='col'></div>
                    <div className='col'>
                        <h2>SignUp</h2>
                        <hr />
                        {/* 회원 가입 폼 */}
                        <form>
                            {/* 이메일 */}
                            <label className='form-label text-start d-block mb-3'>Email</label>
                            <input type='text' name='userEmail' className={`form-control ${errors.userEmail ? 'is-invalid' : ''}`} onChange={handleChange} />
                            {errors.userEmail && <p className='text-danger'>{errors.userEmail}</p>}

                            {/* 비밀번호 */}
                            <label className='form-label text-start d-block mb-3'>Password</label>
                            <input
                                type='password'
                                name='userPassword'
                                className={`form-control mb-3 ${errors.userPassword ? 'is-invalid' : ''}`}
                                onChange={handleChange}
                            />
                            {errors.userPassword && <p className='text-danger'>{errors.userPassword}</p>}

                            {/* 비밀번호 확인 */}
                            <label className='form-label text-start d-block mb-3'>check your password</label>
                            <input
                                type='password'
                                name='userPasswordCheck'
                                className={`form-control ${errors.userPasswordCheck ? 'is-invalid' : ''}`}
                                onChange={handleChange}
                            />
                            {errors.userPasswordCheck && <p className='text-danger'>{errors.userPasswordCheck}</p>}

                            {/* 닉네임 */}
                            <label className='form-label text-start d-block mb-3'>nickName</label>
                            <input
                                type='text'
                                name='userNickname'
                                className={`form-control mb-3 ${errors.userNickname ? 'is-invalid' : ''}`}
                                onChange={handleChange}
                            />
                            {errors.userNickname && <p className='text-danger'>{errors.userNickname}</p>}

                            {/* 체크박스 */}
                            <div className='form-check mb-3 mt-3'>
                                <input className='form-check-input' type='checkbox' checked={agreed} onChange={handleCheckbox} id='agree' />
                                <label className='form-check-label' htmlFor='agree'>
                                    개인정보 수집 및 이용에 동의합니다.
                                </label>
                            </div>

                            {/* 가입버튼 */}
                            <button
                                onClick={handleSignUp}
                                disabled={!isFormValid}
                                className={`form-control d-block btn ${isFormValid ? 'btn-primary' : 'btn-secondary'} mb-3`}
                            >
                                SignUp
                            </button>
                        </form>
                        <h3 className='text-center mb-3'>or</h3>
                        <hr />
                        <h4 className='text-center mb-3'>Signup with SNS</h4>
                        {/* SNS 회원가입 */}
                        <button className='form-control d-block btn btn-success mb-3'>NAVER</button>
                        <button className='form-control d-block btn btn-secondary mb-3'>GOOGLE</button>
                        <button className='form-control d-block btn btn-warning mb-3'>KAKAO</button>
                        <button className='form-control d-block btn btn-danger mb-3'>INSTAGRAM</button>
                    </div>
                    <div className='col'></div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Signup;
