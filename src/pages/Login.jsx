// 로그인 모달
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
import util from '../common/util';
import { useState } from 'react';

const Login = ({ isOpen, onClose, setIsLoggedIn }) => {
    const [formData, setFormData] = useState({
        userEmail: '',
        userPassword: '',
    });

    if (!isOpen) return null;

    const onChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleLogin = async (e) => {
        e.preventDefault();

        // 유효성 검사
        const err1 = util.validateField('userEmail', formData.userEmail, formData);
        const err2 = util.validateField('userPassword', formData.userPassword, formData);

        if (err1 || err2) {
            alert(err1 || err2);
            return;
        }

        // 정상값이면 로그인 요청
        const res = await util.loginUser(formData.userEmail, formData.userPassword);
        if (res.success === true) {
            onClose();
            setIsLoggedIn(true);
        } else {
            alert(res.err);
            setFormData({ userEmail: '', userPassword: '' });
        }
    };

    return (
        <div className={`modal fade ${isOpen ? 'show d-block' : 'd-none'}`} tabIndex='-1' role='dialog' aria-modal='true'>
            <div className='modal-overlay '>
                <div className='modal-dialog  mt-5'>
                    <div className='modal-content'>
                        <div className='modal-header'>
                            <h5 className='modal-title'>
                                <strong>LOGIN</strong>
                            </h5>
                            <button type='button' className='btn-close' onClick={onClose}></button>
                        </div>

                        {/* login form */}
                        <div className='modal-body'>
                            <form>
                                {/* input for Email */}
                                <label className='form-label text-start d-block mb-3'>Email</label>
                                <input type='text' className='form-control' name='userEmail' value={formData.userEmail} onChange={onChange} />

                                {/* input for Password */}
                                <label className='form-label text-start d-block mb-3'>Password</label>
                                <input
                                    type='password'
                                    className='form-control mb-3'
                                    name='userPassword'
                                    value={formData.userPassword}
                                    onChange={onChange}
                                    onKeyDown={(e) => {
                                        if (e.key === 'Enter') {
                                            handleLogin(e);
                                        }
                                    }}
                                />

                                <hr />
                                <button className='form-control d-block btn btn-success mb-3'>NAVER</button>
                                <button className='form-control d-block btn btn-secondary mb-3'>GOOGLE</button>
                                <button className='form-control d-block btn btn-warning mb-3'>KAKAO</button>
                                <button className='form-control d-block btn btn-danger mb-3'>INSTAGRAM</button>
                            </form>
                            <h3>or</h3>
                            <Link to='/signup' className='link'>
                                <h5>회원가입하기</h5>
                            </Link>
                        </div>
                        <div className='modal-footer'>
                            <button type='button' className='btn btn-secondary' onClick={onClose}>
                                Close
                            </button>
                            <button type='button' className='btn btn-success' onClick={handleLogin}>
                                Login
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

Login.PropTypes = {
    isOpen: propTypes.bool.isRequired,
    onClose: propTypes.func.isRequired,
};

export default Login;
