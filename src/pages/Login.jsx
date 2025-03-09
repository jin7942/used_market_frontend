// 로그인 모달
import PropTypes from 'prop-types';

const Login = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className={`modal fade ${isOpen ? 'show d-block' : 'd-none'}`} tabIndex='-1'>
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
                                <input type='text' className='form-control' />

                                {/* input for Password */}
                                <label className='form-label text-start d-block mb-3'>Password</label>
                                <input type='password' className='form-control mb-3' />

                                <hr />
                                <button className='form-control d-block btn btn-success mb-3'>NAVER</button>
                                <button className='form-control d-block btn btn-secondary mb-3'>GOOGLE</button>
                                <button className='form-control d-block btn btn-warning mb-3'>KAKAO</button>
                                <button className='form-control d-block btn btn-danger mb-3'>INSTAGRAM</button>
                            </form>
                            <h3>or</h3>
                            <h5 className='link'>회원가입하기</h5>
                        </div>
                        <div className='modal-footer'>
                            <button type='button' className='btn btn-secondary' onClick={onClose}>
                                Close
                            </button>
                            <button type='button' className='btn btn-success'>
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
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.bool.isRequired,
};

export default Login;
