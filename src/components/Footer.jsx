const Footer = () => {
    return (
        <footer className="bg-dark text-white py-3 mt-auto">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-3">
                        <img
                            src="/img/logo.webp"
                            alt="Company Logo"
                            className="mb-3"
                            style={{ width: '180px', height: 'auto' }}
                        />
                    </div>
                    <div className="col-9 text-center">
                        <p>JINBEOM KIM</p>
                        <p>
                            GitHub: <a href="https://github.com/jin7942">바로가기</a>
                        </p>
                        <p>Email: jinbeom.kim01@gmail.com</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
