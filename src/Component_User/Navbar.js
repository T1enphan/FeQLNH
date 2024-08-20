function Navbar() {
  return (
    <header className="main-header">
      <div className="header-top">
        <div className="auto-container">
          <div className="top-inner clearfix">
            <div className="top-left pull-left">
              <ul className="info clearfix">
                <li>
                  <i className="flaticon-email" />
                  <a href="mailto:support@example.com">support@example.com</a>
                </li>
                <li>
                  <i className="flaticon-global" /> Kleine Pierbard 8-6 2249 KV
                  Vries
                </li>
              </ul>
            </div>
            <div className="top-right pull-right">
              <ul className="social-links clearfix">
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
              <div className="language">
                <div className="lang-btn">
                  <span className="flag">
                    <img
                      src="/assets/images/icons/icon-lang.png"
                      alt
                      title="English"
                    />
                  </span>
                  <span className="txt">English</span>
                  <span className="arrow fa fa-angle-down" />
                </div>
                <div className="lang-dropdown">
                  <ul>
                    <li>
                      <a href="index.html">German</a>
                    </li>
                    <li>
                      <a href="index.html">Italian</a>
                    </li>
                    <li>
                      <a href="index.html">Chinese</a>
                    </li>
                    <li>
                      <a href="index.html">Russian</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="price-box">
                <span>USD</span>
                <ul className="price-list clearfix">
                  <li>
                    <a href="index.html">USD</a>
                  </li>
                  <li>
                    <a href="index.html">UK</a>
                  </li>
                  <li>
                    <a href="index.html">URO</a>
                  </li>
                  <li>
                    <a href="index.html">Spanish</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="header-lower">
        <div className="auto-container">
          <div className="outer-box">
            <figure className="logo-box">
              <a href="index.html">
                <img src="/assets/images/logo.png" alt />
              </a>
            </figure>
            <div className="menu-area">
              {/*Mobile Navigation Toggler*/}
              <div className="mobile-nav-toggler">
                <i className="icon-bar" />
                <i className="icon-bar" />
                <i className="icon-bar" />
              </div>
              <nav className="main-menu navbar-expand-md navbar-light">
                <div
                  className="collapse navbar-collapse show clearfix"
                  id="navbarSupportedContent"
                >
                  <ul className="navigation clearfix">
                    <li className="current dropdown">
                      <a href="index.html">Home</a>
                      <ul>
                        <li>
                          <a href="index.html">Home Page 01</a>
                        </li>
                        <li>
                          <a href="index-2.html">Home Page 02</a>
                        </li>
                        <li>
                          <a href="index-3.html">Home Page 03</a>
                        </li>
                        <li>
                          <a href="index-4.html">Home Page 04</a>
                        </li>
                        <li>
                          <a href="index-5.html">Home Page 05</a>
                        </li>
                        <li>
                          <a href="index-rtl.html">Home RTL</a>
                        </li>
                        <li>
                          <a href="index-onepage.html">Home OnePage</a>
                        </li>
                        <li className="dropdown">
                          <a href="index.html">Header Style</a>
                          <ul>
                            <li>
                              <a href="index.html">Header Style 01</a>
                            </li>
                            <li>
                              <a href="index-2.html">Header Style 02</a>
                            </li>
                            <li>
                              <a href="index-4.html">Header Style 03</a>
                            </li>
                            <li>
                              <a href="index-5.html">Header Style 04</a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li className="dropdown">
                      <a href="index.html">Pages</a>
                      <ul>
                        <li>
                          <a href="about.html">About Us</a>
                        </li>
                        <li>
                          <a href="service.html">Our Service</a>
                        </li>
                        <li>
                          <a href="team.html">Our Team</a>
                        </li>
                        <li>
                          <a href="testimonials.html">Testimonials</a>
                        </li>
                        <li>
                          <a href="error.html">404</a>
                        </li>
                      </ul>
                    </li>
                    <li className="dropdown">
                      <a href="index.html">
                        Shop<span>Hot</span>
                      </a>
                      <div className="megamenu">
                        <div className="row clearfix">
                          <div className="col-lg-4 column">
                            <ul>
                              <li>
                                <h4>Shop Page</h4>
                              </li>
                              <li>
                                <a href="shop.html">Shop Page 01</a>
                              </li>
                              <li>
                                <a href="shop-2.html">Shop Page 02</a>
                              </li>
                              <li>
                                <a href="shop-3.html">Shop Page 03</a>
                              </li>
                              <li>
                                <a href="shop-4.html">Shop Page 04</a>
                              </li>
                              <li>
                                <a href="shop-5.html">Shop Page 05</a>
                              </li>
                              <li>
                                <a href="shop-6.html">Shop Page 06</a>
                              </li>
                            </ul>
                          </div>
                          <div className="col-lg-4 column">
                            <ul>
                              <li>
                                <h4>Product Details Page</h4>
                              </li>
                              <li>
                                <a href="product-details.html">
                                  Product Details 01
                                </a>
                              </li>
                              <li>
                                <a href="product-details-2.html">
                                  Product Details 02
                                </a>
                              </li>
                              <li>
                                <a href="product-details-3.html">
                                  Product Details 03
                                </a>
                              </li>
                              <li>
                                <a href="product-details-4.html">
                                  Product Details 04
                                </a>
                              </li>
                              <li>
                                <a href="product-details-5.html">
                                  Product Details 05
                                </a>
                              </li>
                              <li>
                                <a href="product-details-6.html">
                                  Product Details 06
                                </a>
                              </li>
                              <li>
                                <a href="product-details-7.html">
                                  Product Details 07
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="col-lg-4 column">
                            <ul>
                              <li>
                                <h4>Other Shop Page</h4>
                              </li>
                              <li>
                                <a href="cart.html">Cart Page</a>
                              </li>
                              <li>
                                <a href="checkout.html">Checkout Page</a>
                              </li>
                              <li>
                                <a href="my-account.html">My Account</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="dropdown">
                      <a href="index.html">Elements</a>
                      <div className="megamenu">
                        <div className="row clearfix">
                          <div className="col-lg-6 column">
                            <ul>
                              <li>
                                <h4>Elements 1</h4>
                              </li>
                              <li>
                                <a href="category-element-1.html">
                                  Category 01
                                </a>
                              </li>
                              <li>
                                <a href="category-element-2.html">
                                  Category 02
                                </a>
                              </li>
                              <li>
                                <a href="category-element-3.html">
                                  Category 03
                                </a>
                              </li>
                              <li>
                                <a href="category-element-4.html">
                                  Category 04
                                </a>
                              </li>
                              <li>
                                <a href="shop-element-1.html">Shop 01</a>
                              </li>
                              <li>
                                <a href="shop-element-2.html">Shop 02</a>
                              </li>
                              <li>
                                <a href="shop-element-3.html">Shop 03</a>
                              </li>
                              <li>
                                <a href="shop-element-4.html">Shop 04</a>
                              </li>
                            </ul>
                          </div>
                          <div className="col-lg-6 column">
                            <ul>
                              <li>
                                <h4>Elements 2</h4>
                              </li>
                              <li>
                                <a href="news-element-1.html">News 01</a>
                              </li>
                              <li>
                                <a href="news-element-2.html">News 02</a>
                              </li>
                              <li>
                                <a href="service-element-1.html">Service 01</a>
                              </li>
                              <li>
                                <a href="service-element-2.html">Service 02</a>
                              </li>
                              <li>
                                <a href="team-element-1.html">Team 01</a>
                              </li>
                              <li>
                                <a href="team-element-2.html">Team 02</a>
                              </li>
                              <li>
                                <a href="instagram-element.html">Instagram</a>
                              </li>
                              <li>
                                <a href="clients-element.html">Clients</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="dropdown">
                      <a href="index.html">Blog</a>
                      <ul>
                        <li>
                          <a href="blog.html">Blog 01</a>
                        </li>
                        <li>
                          <a href="blog-2.html">Blog 02</a>
                        </li>
                        <li>
                          <a href="blog-3.html">Blog 03</a>
                        </li>
                        <li>
                          <a href="blog-4.html">Blog 04</a>
                        </li>
                        <li>
                          <a href="blog-5.html">Blog 05</a>
                        </li>
                        <li>
                          <a href="blog-details.html">Blog Details 01</a>
                        </li>
                        <li>
                          <a href="blog-details-2.html">Blog Details 02</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="contact.html">Contact</a>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
            <ul className="menu-right-content clearfix">
              <li>
                <div className="search-btn">
                  <button type="button" className="search-toggler">
                    <i className="flaticon-search" />
                  </button>
                </div>
              </li>
              <li>
                <a href="index.html">
                  <i className="flaticon-like" />
                </a>
              </li>
              <li>
                <a href="index.html">
                  <i className="flaticon-user" />
                </a>
              </li>
              <li className="shop-cart">
                <a href="shop.html">
                  <i className="flaticon-shopping-cart-1" />
                  <span>3</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/*sticky Header*/}
      <div className="sticky-header">
        <div className="auto-container">
          <div className="outer-box clearfix">
            <div className="logo-box pull-left">
              <figure className="logo">
                <a href="index.html">
                  <img src="/assets/images/small-logo.png" alt />
                </a>
              </figure>
            </div>
            <div className="menu-area pull-right">
              <nav className="main-menu clearfix">
                {/*Keep This Empty / Menu will come through Javascript*/}
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
export default Navbar;
