const Footer = () => {
    return (
        <footer className='bg-dark text-white py-3 mt-auto'>
            <div className='container'>
                <div className='row align-items-center'>
                    <div className='col-3'>
                        <img src='../../public/img/logo.webp' alt='Company Logo' className='mb-3' style={{ width: '180px', height: 'auto' }} />
                    </div>
                    <div className='col-9 text-center'>
                        <p>© 2025 Your Company Name. All rights reserved.</p>
                        <p>1234 Main St, Anytown, USA</p>
                        <p>Email: info@yourcompany.com | Phone: (123) 456-7890</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
