import Header from '../components/Header';
import Footer from '../components/Footer';

const Signup = () => {
    return (
        <div className='d-flex flex-column min-vh-100'>
            {/* Header */}
            <Header />

            {/*SingUp Form */}
            <main className='container mt-5 flex-grow-1 pt-5 '>
                <div className='row'>
                    <div className='col'></div>
                    <div className='col'>
                        <h2>SignUp</h2>
                        <hr />
                        <form>
                            {/* input for Email */}
                            <label className='form-label text-start d-block mb-3'>Email</label>
                            <input type='text' className='form-control' />

                            {/* input for Password */}
                            <label className='form-label text-start d-block mb-3'>Password</label>
                            <input type='password' className='form-control mb-3' />

                            {/* check Password */}
                            <label className='form-label text-start d-block mb-3'>check your password</label>
                            <input type='password' className='form-control mb-3' />

                            {/* input for Nickname */}
                            <label className='form-label text-start d-block mb-3'>nickName</label>
                            <input type='text' className='form-control mb-3' />

                            {/* checkBox */}
                            <div className='form-check mb-3'>
                                <input className='form-check-input mb-3' type='checkbox' value='' id='flexCheckDefault' />
                                <label className='form-check-label'>개인정보 수집 및 이용에 동의합니다.</label>
                            </div>

                            <button className='form-control d-block btn btn-light mb-3'>SignUp</button>
                        </form>

                        <h3 className='text-center mb-3'>or</h3>
                        <hr />
                        <h4 className='text-center mb-3'>Signup with SNS</h4>

                        {/* SNS Button */}
                        <button className='form-control d-block btn btn-success mb-3'>NAVER</button>
                        <button className='form-control d-block btn btn-secondary mb-3'>GOOGLE</button>
                        <button className='form-control d-block btn btn-warning mb-3'>KAKAO</button>
                        <button className='form-control d-block btn btn-danger mb-3'>INSTAGRAM</button>
                    </div>
                    <div className='col'></div>
                </div>
            </main>

            {/* footer */}
            <Footer />
        </div>
    );
};

export default Signup;
