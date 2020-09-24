import React from "react";

const Footer = () => {
  return (
    <footer className="container">
      <div className="row footer_area">
        <div className="col-xl-3 col-lg-3 col-md-5 col-sm-6">
          <div className="footer-logo">
            <a href="index.html">
              <img src="assets/img/logo/logo2_footer.png" alt="" />
            </a>
          </div>
          <div className="footer-title">
            <div className="footer-pera">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do
                eiusmod tempor incididunt ut labore.
              </p>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-5 footer_item">
          <div className="footer-title">
            <h4>Quick Links</h4>
            <ul>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#"> Offers & Discounts</a>
              </li>
              <li>
                <a href="#"> Get Coupon</a>
              </li>
              <li>
                <a href="#"> Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-xl-3 col-lg-3 col-md-4 col-sm-7 footer_item">
          <div className="single-footer-caption mb-50">
            <div className="footer-title">
              <h4>New Products</h4>
              <ul>
                <li>
                  <a href="#">Woman Cloth</a>
                </li>
                <li>
                  <a href="#">Fashion Accessories</a>
                </li>
                <li>
                  <a href="#"> Man Accessories</a>
                </li>
                <li>
                  <a href="#"> Rubber made Toys</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-lg-3 col-md-5 col-sm-7 footer_item">
          <div className="footer-title">
            <h4>Support</h4>
            <ul>
              <li>
                <a href="#">Frequently Asked Questions</a>
              </li>
              <li>
                <a href="#">Terms & Conditions</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Report a Payment Issue</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
