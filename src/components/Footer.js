function Footer() {


    return (
        <footer>
            <div className="container1">
                <div className="header">
                    <img
                        src="/assets/images/header-img/logo 512.png"
                        alt="Red square logo with white text A&T SERVICES INC"
                        className="flogo"
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

                <hr />

                <p className="mb-4">
                    <span className="bold">Head Office Rome:</span><br />
                    351 Via del Quadraro, 00174 Roma, Lazio, Italy
                </p>

                <p className="mb-4 bold">Branches:</p>

                <div className="flex-row">
                    <div className="column">
                        <p className="mb-4">
                            <span className="bold">Rome:</span><br />
                            351 Via del Quadraro, 00174 Roma, Lazio, Italy
                        </p>
                        <p className="mb-4">
                            <span className="bold">Milan:</span><br />
                            39 Via privata Tarvisio, 20125 Milano, Lombardia, Italy
                        </p>
                        <p className="mb-1"><span className="bold">Phone:</span> +39 02 12345678</p>
                        <p><span className="bold">Email:</span> support@xyz.com</p>
                    </div>
                    <div className="column">
                        <p className="mb-4">
                            <span className="bold">Florence:</span><br />
                            24 Quartiere Aurelia, 20051 Cassina de' Pecchi, Milano, Lombardia, Italy
                        </p>
                        <p>
                            <span className="bold">Naples:</span><br />
                            22 Strada della Trinità, 10032 Torino, Piemonte, Italy
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