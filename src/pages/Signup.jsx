import Header from '../components/Header';
import Footer from '../components/Footer';
import useFormValidation from '../hooks/useFormValidation';

/**
 * Signup 컴포넌트
 * - 회원가입 폼 렌더링
 * - useFormValidation 훅으로 유효성 검사 처리
 * - 가입 버튼 클릭 시 전체 유효성 검사 후 API 요청 준비
 */
const Signup = () => {
    // useFormValidation 훅으로 폼 상태와 유효성 로직 관리
    const { formData, errors, isFormValid, agreed, handleChange, handleCheckbox, validateAll } = useFormValidation({
        userEmail: '',
        userPassword: '',
        userPasswordCheck: '',
        userNickname: '',
    });

    /**
     * 회원가입 버튼 클릭 시 실행되는 함수
     * - 전체 유효성 검사 실행
     * - 유효하지 않으면 첫 에러 항목에 focus
     * - 유효하면 서버로 전송할 준비
     * @param {React.MouseEvent} e - 버튼 클릭 이벤트 객체
     */
    const handleSignUp = (e) => {
        e.preventDefault();

        const valid = validateAll();
        if (!valid) {
            const firstErrorField = Object.keys(errors).find((key) => errors[key]);
            if (firstErrorField) {
                document.getElementsByName(firstErrorField)[0]?.focus();
            }
            alert('입력값을 확인해주세요.');
            return;
        }

        console.log('회원가입 요청 데이터:', formData);
        // TODO: axios.post('/api/auth/register', formData) 로직 추가 예정
        // TODO: 중복체크 구현
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
                        {/* 회원가입 폼 */}
                        <form>
                            {/* 이메일 입력 */}
                            <label className='form-label text-start d-block mb-3'>Email</label>
                            <input
                                type='text'
                                name='userEmail'
                                className={`form-control ${errors.userEmail ? 'is-invalid' : ''}`}
                                onChange={handleChange}
                                onBlur={handleChange}
                            />
                            {errors.userEmail && <p className='text-danger'>{errors.userEmail}</p>}

                            {/* 비밀번호 입력 */}
                            <label className='form-label text-start d-block mb-3'>Password</label>
                            <input
                                type='password'
                                name='userPassword'
                                className={`form-control mb-3 ${errors.userPassword ? 'is-invalid' : ''}`}
                                onChange={(e) => {
                                    handleChange(e);
                                    // 비밀번호 변경 시 비밀번호 확인도 재검증
                                    const event = { target: { name: 'userPasswordCheck', value: formData.userPasswordCheck } };
                                    handleChange(event);
                                }}
                                onBlur={handleChange}
                            />
                            {errors.userPassword && <p className='text-danger'>{errors.userPassword}</p>}

                            {/* 비밀번호 확인 입력 */}
                            <label className='form-label text-start d-block mb-3'>Check your password</label>
                            <input
                                type='password'
                                name='userPasswordCheck'
                                className={`form-control ${errors.userPasswordCheck ? 'is-invalid' : ''}`}
                                onChange={handleChange}
                                onBlur={handleChange}
                            />
                            {errors.userPasswordCheck && <p className='text-danger'>{errors.userPasswordCheck}</p>}

                            {/* 닉네임 입력 */}
                            <label className='form-label text-start d-block mb-3'>NickName</label>
                            <input
                                type='text'
                                name='userNickname'
                                className={`form-control mb-3 ${errors.userNickname ? 'is-invalid' : ''}`}
                                onChange={handleChange}
                                onBlur={handleChange}
                            />
                            {errors.userNickname && <p className='text-danger'>{errors.userNickname}</p>}

                            {/* 개인정보 동의 체크박스 */}
                            <div className='form-check mb-3 mt-3'>
                                <input className='form-check-input' type='checkbox' checked={agreed} onChange={handleCheckbox} id='agree' />
                                <label className='form-check-label' htmlFor='agree'>
                                    개인정보 수집 및 이용에 동의합니다.
                                </label>
                            </div>

                            {/* 회원가입 버튼 */}
                            <button
                                type='button'
                                onClick={handleSignUp}
                                disabled={!isFormValid}
                                className={`form-control d-block btn ${isFormValid ? 'btn-primary' : 'btn-secondary'} mb-3`}
                            >
                                SignUp
                            </button>
                        </form>

                        {/* SNS 가입 섹션 (미구현) */}
                        <h3 className='text-center mb-3'>or</h3>
                        <hr />
                        <h4 className='text-center mb-3'>Signup with SNS</h4>
                        <button className='form-control d-block btn btn-success mb-3' disabled>
                            NAVER (준비 중)
                        </button>
                        <button className='form-control d-block btn btn-secondary mb-3' disabled>
                            GOOGLE (준비 중)
                        </button>
                        <button className='form-control d-block btn btn-warning mb-3' disabled>
                            KAKAO (준비 중)
                        </button>
                        <button className='form-control d-block btn btn-danger mb-3' disabled>
                            INSTAGRAM (준비 중)
                        </button>
                    </div>
                    <div className='col'></div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Signup;
