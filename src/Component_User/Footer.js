function Footer() {
  return (
    <footer className="main-footer">
      <div className="footer-top">
        <div className="auto-container">
          <div className="row clearfix">
            <div className="col-lg-6 col-md-12 col-sm-12 big-column">
              <div className="row clearfix">
                <div className="col-lg-4 col-md-4 col-sm-12 footer-column">
                  <div className="footer-widget logo-widget">
                    <figure className="footer-logo">
                      <a href="index.html">
                        <img src="/assets/images/footer-logo.png" alt />
                      </a>
                    </figure>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12 footer-column">
                  <div className="footer-widget links-widget">
                    <div className="widget-title">
                      <h3>Category</h3>
                    </div>
                    <div className="widget-content">
                      <ul className="links-list clearfix">
                        <li>
                          <a href="index.html">Men</a>
                        </li>
                        <li>
                          <a href="index.html">Women</a>
                        </li>
                        <li>
                          <a href="index.html">Kids</a>
                        </li>
                        <li>
                          <a href="index.html">Accessories</a>
                        </li>
                        <li>
                          <a href="index.html">Shoe</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12 footer-column">
                  <div className="footer-widget links-widget">
                    <div className="widget-title">
                      <h3>Useful Link</h3>
                    </div>
                    <div className="widget-content">
                      <ul className="links-list clearfix">
                        <li>
                          <a href="index.html">News &amp; Tips</a>
                        </li>
                        <li>
                          <a href="index.html">About Us</a>
                        </li>
                        <li>
                          <a href="index.html">Terms &amp; Conditions</a>
                        </li>
                        <li>
                          <a href="index.html">Our Shop</a>
                        </li>
                        <li>
                          <a href="index.html">Contact Us</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 big-column">
              <div className="row clearfix">
                <div className="col-lg-6 col-md-6 col-sm-12 footer-column">
                  <div className="footer-widget contact-widget">
                    <div className="widget-title">
                      <h3>Contact</h3>
                    </div>
                    <ul className="info-list clearfix">
                      <li>
                        4708 Ruecker Wall, <br />
                        Kassandratown, HI
                      </li>
                      <li>
                        <a href="tel:23055873407">+2(305) 587-3407</a>
                      </li>
                      <li>
                        <a href="mailto:info@example.com">info@example.com</a>
                      </li>
                    </ul>
                    <ul className="footer-social clearfix">
                      <li>
                        <a href="index.html">
                          <i className="fab fa-facebook-f" />
                        </a>
                      </li>
                      <li>
                        <a href="index.html">
                          <i className="fab fa-twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="index.html">
                          <i className="fab fa-vimeo-v" />
                        </a>
                      </li>
                      <li>
                        <a href="index.html">
                          <i className="fab fa-google-plus-g" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 footer-column">
                  <div className="footer-widget newsletter-widget">
                    <div className="widget-title">
                      <h3>Newsletter</h3>
                    </div>
                    <div className="widget-content">
                      <p>4708 Ruecker Wall, Kassandratown, HI 97729</p>
                      <form
                        action="contact.html"
                        method="post"
                        className="newsletter-form"
                      >
                        <div className="form-group">
                          <input
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            required
                          />
                          <button type="submit" className="theme-btn-two">
                            Subscribe
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="auto-container clearfix">
          <ul className="cart-list pull-left clearfix">
            <li>
              <a href="index.html">
                <img src="/assets/images/resource/card-1.png" alt />
              </a>
            </li>
            <li>
              <a href="index.html">
                <img src="/assets/images/resource/card-2.png" alt />
              </a>
            </li>
            <li>
              <a href="index.html">
                <img src="/assets/images/resource/card-3.png" alt />
              </a>
            </li>
            <li>
              <a href="index.html">
                <img src="/assets/images/resource/card-4.png" alt />
              </a>
            </li>
          </ul>
          <div className="copyright pull-right">
            <p>
              <a href="index.html">Castro</a> © 2020 All Right Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
