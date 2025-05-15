function Footer() {


    return (
        <footer>
            <div className="container1">
                <div className="header">
                    <img
                        src="/assets/images/header-img/logo 512.png"
                        alt="Red square logo with white text A&T SERVICES INC"
                        className="logo"
                        width="60"
                        height="60"
                    />
                    <div className="social-icons" aria-label="Social media links">
                        <a href="#" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
                        <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
                        <a href="#" aria-label="YouTube"><i className="fab fa-youtube"></i></a>
                        <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
                        <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
                    </div>
                </div>

                <hr/>

                <p className="mb-4">
                    <span className="bold">Head Office:</span> E-246/1, Allama Shibli Nomani Road,
                    Abul Fazal Enclave, Shaheen Bagh, Jasola Vihar, New Delhi, Delhi 110025
                </p>

                <p className="mb-4 bold">Branches:</p>

                <div className="flex-row">
                    <div className="column">
                        <p className="mb-4">
                            <span className="bold">Delhi:</span><br />
                            G-167, Ground Floor, Hari Nagar Jail Road Street, 1, Mother Dairy Road,
                            New Delhi, Delhi 110058
                        </p>
                        <p className="mb-4">
                            <span className="bold">Bangalore:</span><br />
                            29 Roshan Nagar 3rd Cross, Near Salmaniya Masjid, Deepanjali Nagar,
                            Bangalore, Karnataka - 560026, India
                        </p>
                        <p className="mb-1"><span className="bold">Phone:</span> +91 87 7992 3972</p>
                        <p><span className="bold">Email:</span> support@antservicesmail.com</p>
                    </div>
                    <div className="column">
                        <p className="mb-4">
                            <span className="bold">Mumbai:</span><br />
                            Plot No. 70, AL-Hudibia Apartment, Opp Bharat Gear, Kausa, Mumbra,
                            Thane, Maharashtra, India – 400612
                        </p>
                        <p>
                            <span className="bold">Hyderabad:</span><br />
                            Plot No. 761, Road No. 39, CBI Colony, Jubilee Hills, Hyderabad,
                            Telangana, India - 500033
                        </p>
                    </div>
                </div>

                <hr />

                <div className="footer-bottom">
                    <p>Copyright © SG Services Inc.</p>
                    <a href="#">Terms &amp; Conditions</a>
                    <span>-</span>
                    <a href="#">Privacy Policy</a>
                    <span>-</span>
                    <a href="#">Blogs</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;