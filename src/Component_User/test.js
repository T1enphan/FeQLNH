function Test1() {
  return (
    <>
      <div>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        />
        <title>Castro - HTML 5 Template Preview</title>
        {/* Fav Icon */}
        <link rel="icon" href="assets/images/favicon.ico" type="image/x-icon" />
        <link
          href="https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
        {/* Stylesheets */}
        <link href="assets/css/font-awesome-all.css" rel="stylesheet" />
        <link href="assets/css/flaticon.css" rel="stylesheet" />
        <link href="assets/css/owl.css" rel="stylesheet" />
        <link href="assets/css/bootstrap.css" rel="stylesheet" />
        <link href="assets/css/jquery.fancybox.min.css" rel="stylesheet" />
        <link href="assets/css/animate.css" rel="stylesheet" />
        <link href="assets/css/color.css" rel="stylesheet" />
        <link href="assets/css/style.css" rel="stylesheet" />
        <link href="assets/css/responsive.css" rel="stylesheet" />
        {/* page wrapper */}
        <div className="boxed_wrapper">
          {/* Preloader */}
          {/* <div className="loader-wrap">
            <div className="preloader">
              <div className="preloader-close">Preloader Close</div>
            </div>
            <div className="layer layer-one">
              <span className="overlay" />
            </div>
            <div className="layer layer-two">
              <span className="overlay" />
            </div>
            <div className="layer layer-three">
              <span className="overlay" />
            </div>
          </div> */}
          {/* search-popup */}
          <div id="search-popup" className="search-popup">
            <div className="close-search">
              <i className="flaticon-close" />
            </div>
            <div className="popup-inner">
              <div className="overlay-layer" />
              <div className="search-form">
                <form method="post" action="index.html">
                  <div className="form-group">
                    <fieldset>
                      <input
                        type="search"
                        className="form-control"
                        name="search-input"
                        defaultValue
                        placeholder="Search Here"
                        required
                      />
                      <input
                        type="submit"
                        defaultValue="Search Now!"
                        className="theme-btn style-four"
                      />
                    </fieldset>
                  </div>
                </form>
                <h3>Recent Search Keywords</h3>
                <ul className="recent-searches">
                  <li>
                    <a href="index.html">Finance</a>
                  </li>
                  <li>
                    <a href="index.html">Idea</a>
                  </li>
                  <li>
                    <a href="index.html">Service</a>
                  </li>
                  <li>
                    <a href="index.html">Growth</a>
                  </li>
                  <li>
                    <a href="index.html">Plan</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* search-popup end */}
          {/* main header */}
          <header className="main-header">
            <div className="header-top">
              <div className="auto-container">
                <div className="top-inner clearfix">
                  <div className="top-left pull-left">
                    <ul className="info clearfix">
                      <li>
                        <i className="flaticon-email" />
                        <a href="mailto:support@example.com">
                          support@example.com
                        </a>
                      </li>
                      <li>
                        <i className="flaticon-global" /> Kleine Pierbard 8-6
                        2249 KV Vries
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
                                      <a href="service-element-1.html">
                                        Service 01
                                      </a>
                                    </li>
                                    <li>
                                      <a href="service-element-2.html">
                                        Service 02
                                      </a>
                                    </li>
                                    <li>
                                      <a href="team-element-1.html">Team 01</a>
                                    </li>
                                    <li>
                                      <a href="team-element-2.html">Team 02</a>
                                    </li>
                                    <li>
                                      <a href="instagram-element.html">
                                        Instagram
                                      </a>
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
                                <a href="blog-details-2.html">
                                  Blog Details 02
                                </a>
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
          {/* main-header end */}
          {/* Mobile Menu  */}
          <div className="mobile-menu">
            <div className="menu-backdrop" />
            <div className="close-btn">
              <i className="fas fa-times" />
            </div>
            <nav className="menu-box">
              <div className="nav-logo">
                <a href="index.html">
                  <img src="/assets/images/logo-2.png" alt title />
                </a>
              </div>
              <div className="menu-outer">
                {/*Here Menu Will Come Automatically Via Javascript / Same Menu as in Header*/}
              </div>
              <div className="contact-info">
                <h4>Contact Info</h4>
                <ul>
                  <li>Chicago 12, Melborne City, USA</li>
                  <li>
                    <a href="tel:+8801682648101">+88 01682648101</a>
                  </li>
                  <li>
                    <a href="mailto:info@example.com">info@example.com</a>
                  </li>
                </ul>
              </div>
              <div className="social-links">
                <ul className="clearfix">
                  <li>
                    <a href="index.html">
                      <span className="fab fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="index.html">
                      <span className="fab fa-facebook-square" />
                    </a>
                  </li>
                  <li>
                    <a href="index.html">
                      <span className="fab fa-pinterest-p" />
                    </a>
                  </li>
                  <li>
                    <a href="index.html">
                      <span className="fab fa-instagram" />
                    </a>
                  </li>
                  <li>
                    <a href="index.html">
                      <span className="fab fa-youtube" />
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
          {/* End Mobile Menu */}
          {/* banner-section */}
          {/* <section className="banner-style-one">
            <div
              className="pattern-layer"
              style={{
                backgroundImage: "url(/assets/images/shape/shape-1.png)",
              }}
            />
            <div className="banner-carousel owl-theme owl-carousel">
              <div className="slide-item">
                <div className="auto-container">
                  <div className="content-inner">
                    <div className="content-box">
                      <h1>
                        Up To <br />
                        <span>50%</span> Discount
                      </h1>
                      <h3>Summer Lookbook - 2020</h3>
                      <p>
                        New Modern Stylist Fashionable Men's Wear Jeans Shirt.
                      </p>
                      <div className="btn-box">
                        <a href="index.html" className="theme-btn-one">
                          Explore Now
                          <i className="flaticon-right-1" />
                        </a>
                      </div>
                    </div>
                    <figure className="image-box image-1">
                      <img src="/assets/images/banner/banner-image-1.png" alt />
                    </figure>
                  </div>
                </div>
              </div>
              <div className="slide-item">
                <div className="auto-container">
                  <div className="content-inner">
                    <div className="content-box">
                      <h1>
                        Up To <br />
                        <span>50%</span> Discount
                      </h1>
                      <h3>Summer Lookbook - 2020</h3>
                      <p>
                        New Modern Stylist Fashionable Men's Wear Jeans Shirt.
                      </p>
                      <div className="btn-box">
                        <a href="index.html" className="theme-btn-one">
                          Explore Now
                          <i className="flaticon-right-1" />
                        </a>
                      </div>
                    </div>
                    <figure className="image-box image-2">
                      <img src="/assets/images/banner/banner-image-2.png" alt />
                    </figure>
                  </div>
                </div>
              </div>
              <div className="slide-item">
                <div className="auto-container">
                  <div className="content-inner">
                    <div className="content-box">
                      <h1>
                        Up To <br />
                        <span>50%</span> Discount
                      </h1>
                      <h3>Summer Lookbook - 2020</h3>
                      <p>
                        New Modern Stylist Fashionable Men's Wear Jeans Shirt.
                      </p>
                      <div className="btn-box">
                        <a href="index.html" className="theme-btn-one">
                          Explore Now
                          <i className="flaticon-right-1" />
                        </a>
                      </div>
                    </div>
                    <figure className="image-box imgae-3">
                      <img src="/assets/images/banner/banner-image-3.png" alt />
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </section> */}
          {/* banner-section end */}
          {/* topcategory-section */}
          <section className="topcategory-section centred">
            <div className="auto-container">
              <div className="sec-title">
                <h2>Top Category</h2>
                <p>
                  Follow the most popular trends and get exclusive items from
                  castro shop
                </p>
                <span
                  className="separator"
                  style={{
                    backgroundImage: "url(assets/images/icons/separator-1.png)",
                  }}
                />
              </div>
              <div className="row clearfix">
                <div className="col-lg-3 col-md-6 col-sm-12 category-block">
                  <div
                    className="category-block-one wow fadeInUp animated animated"
                    data-wow-delay="00ms"
                    data-wow-duration="1500ms"
                  >
                    <figure className="image-box">
                      <img src="/assets/images/resource/category-1.png" alt />
                    </figure>
                    <h5>
                      <a href="index.html">Women Collections</a>
                    </h5>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 category-block">
                  <div
                    className="category-block-one wow fadeInUp animated animated"
                    data-wow-delay="200ms"
                    data-wow-duration="1500ms"
                  >
                    <figure className="image-box">
                      <img src="/assets/images/resource/category-2.png" alt />
                    </figure>
                    <h5>
                      <a href="index.html">Kids Collections</a>
                    </h5>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 category-block">
                  <div
                    className="category-block-one wow fadeInUp animated animated"
                    data-wow-delay="400ms"
                    data-wow-duration="1500ms"
                  >
                    <figure className="image-box">
                      <img src="/assets/images/resource/category-3.png" alt />
                    </figure>
                    <h5>
                      <a href="index.html">Summer Collections</a>
                    </h5>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 category-block">
                  <div
                    className="category-block-one wow fadeInUp animated animated"
                    data-wow-delay="600ms"
                    data-wow-duration="1500ms"
                  >
                    <figure className="image-box">
                      <img src="/assets/images/resource/category-4.png" alt />
                    </figure>
                    <h5>
                      <a href="index.html">Gents Collections</a>
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* topcategory-section end */}
          {/* shop-section */}
          <section className="shop-section">
            <div className="auto-container">
              <div className="sec-title">
                <h2>Our Top Collection</h2>
                <p>
                  There are some product that we featured for choose your best
                </p>
                <span
                  className="separator"
                  style={{
                    backgroundImage: "url(assets/images/icons/separator-1.png)",
                  }}
                />
              </div>
              <div className="sortable-masonry">
                <div className="filters">
                  <ul className="filter-tabs filter-btns centred clearfix">
                    <li
                      className="active filter"
                      data-role="button"
                      data-filter=".best_seller"
                    >
                      Best Seller
                    </li>
                    <li
                      className="filter"
                      data-role="button"
                      data-filter=".new_arraivals"
                    >
                      New Arraivals
                    </li>
                    <li
                      className="filter"
                      data-role="button"
                      data-filter=".top_rate"
                    >
                      Top Rate
                    </li>
                  </ul>
                </div>
                <div className="items-container row clearfix">
                  <div className="col-lg-3 col-md-6 col-sm-12 shop-block masonry-item small-column best_seller new_arraivals top_rate">
                    <div className="shop-block-one">
                      <div className="inner-box">
                        <figure className="image-box">
                          <img
                            src="/assets/images/resource/shop/shop-1.jpg"
                            alt
                          />
                          <ul className="info-list clearfix">
                            <li>
                              <a href="index.html">
                                <i className="flaticon-heart" />
                              </a>
                            </li>
                            <li>
                              <a href="product-details.html">Add to cart</a>
                            </li>
                            <li>
                              <a
                                src="/assets/images/resource/shop/shop-1.jpg"
                                className="lightbox-image"
                                data-fancybox="gallery"
                              >
                                <i className="flaticon-search" />
                              </a>
                            </li>
                          </ul>
                        </figure>
                        <div className="lower-content">
                          <a href="product-details.html">
                            Cold Crewneck Sweater 111
                          </a>
                          <span className="price">$70.30</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-12 shop-block masonry-item small-column best_seller">
                    <div className="shop-block-one">
                      <div className="inner-box">
                        <figure className="image-box">
                          <img
                            src="/assets/images/resource/shop/shop-2.jpg"
                            alt
                          />
                          <span className="category green-bg">New</span>
                          <ul className="info-list clearfix">
                            <li>
                              <a href="index.html">
                                <i className="flaticon-heart" />
                              </a>
                            </li>
                            <li>
                              <a href="product-details.html">Add to cart</a>
                            </li>
                            <li>
                              <a
                                href="/assets/images/resource/shop/shop-2.jpg"
                                className="lightbox-image"
                                data-fancybox="gallery"
                              >
                                <i className="flaticon-search" />
                              </a>
                            </li>
                          </ul>
                        </figure>
                        <div className="lower-content">
                          <a href="product-details.html">
                            Multi-Way Ultra Crop Top
                          </a>
                          <span className="price">$50.00</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-12 shop-block masonry-item small-column best_seller top_rate">
                    <div className="shop-block-one">
                      <div className="inner-box">
                        <figure className="image-box">
                          <img
                            src="/assets/images/resource/shop/shop-3.jpg"
                            alt
                          />
                          <ul className="info-list clearfix">
                            <li>
                              <a href="index.html">
                                <i className="flaticon-heart" />
                              </a>
                            </li>
                            <li>
                              <a href="product-details.html">Add to cart</a>
                            </li>
                            <li>
                              <a
                                href="assets/images/resource/shop/shop-3.jpg"
                                className="lightbox-image"
                                data-fancybox="gallery"
                              >
                                <i className="flaticon-search" />
                              </a>
                            </li>
                          </ul>
                        </figure>
                        <div className="lower-content">
                          <a href="product-details.html">Side-Tie Tank</a>
                          <span className="price">$40.00</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-12 shop-block masonry-item small-column best_seller new_arraivals">
                    <div className="shop-block-one">
                      <div className="inner-box">
                        <figure className="image-box">
                          <img
                            src="/assets/images/resource/shop/shop-4.jpg"
                            alt
                          />
                          <ul className="info-list clearfix">
                            <li>
                              <a href="index.html">
                                <i className="flaticon-heart" />
                              </a>
                            </li>
                            <li>
                              <a href="product-details.html">Add to cart</a>
                            </li>
                            <li>
                              <a
                                href="assets/images/resource/shop/shop-4.jpg"
                                className="lightbox-image"
                                data-fancybox="gallery"
                              >
                                <i className="flaticon-search" />
                              </a>
                            </li>
                          </ul>
                        </figure>
                        <div className="lower-content">
                          <a href="product-details.html">
                            Cold Crewneck Sweater
                          </a>
                          <span className="price">$60.30</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-12 shop-block masonry-item small-column best_seller top_rate">
                    <div className="shop-block-one">
                      <div className="inner-box">
                        <figure className="image-box">
                          <img
                            src="/assets/images/resource/shop/shop-5.jpg"
                            alt
                          />
                          <ul className="info-list clearfix">
                            <li>
                              <a href="index.html">
                                <i className="flaticon-heart" />
                              </a>
                            </li>
                            <li>
                              <a href="product-details.html">Add to cart</a>
                            </li>
                            <li>
                              <a
                                href="assets/images/resource/shop/shop-5.jpg"
                                className="lightbox-image"
                                data-fancybox="gallery"
                              >
                                <i className="flaticon-search" />
                              </a>
                            </li>
                          </ul>
                        </figure>
                        <div className="lower-content">
                          <a href="product-details.html">Side-Tie Tank</a>
                          <span className="price">$35.30</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-12 shop-block masonry-item small-column best_seller new_arraivals">
                    <div className="shop-block-one">
                      <div className="inner-box">
                        <figure className="image-box">
                          <img
                            src="/assets/images/resource/shop/shop-6.jpg"
                            alt
                          />
                          <ul className="info-list clearfix">
                            <li>
                              <a href="index.html">
                                <i className="flaticon-heart" />
                              </a>
                            </li>
                            <li>
                              <a href="product-details.html">Add to cart</a>
                            </li>
                            <li>
                              <a
                                href="assets/images/resource/shop/shop-6.jpg"
                                className="lightbox-image"
                                data-fancybox="gallery"
                              >
                                <i className="flaticon-search" />
                              </a>
                            </li>
                          </ul>
                        </figure>
                        <div className="lower-content">
                          <a href="product-details.html">Must-Have Easy Tank</a>
                          <span className="price">$25.30</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-12 shop-block masonry-item small-column best_seller new_arraivals top_rate">
                    <div className="shop-block-one">
                      <div className="inner-box">
                        <figure className="image-box">
                          <img
                            src="/assets/images/resource/shop/shop-7.jpg"
                            alt
                          />
                          <span className="category red-bg">Hot</span>
                          <ul className="info-list clearfix">
                            <li>
                              <a href="index.html">
                                <i className="flaticon-heart" />
                              </a>
                            </li>
                            <li>
                              <a href="product-details.html">Add to cart</a>
                            </li>
                            <li>
                              <a
                                href="assets/images/resource/shop/shop-7.jpg"
                                className="lightbox-image"
                                data-fancybox="gallery"
                              >
                                <i className="flaticon-search" />
                              </a>
                            </li>
                          </ul>
                        </figure>
                        <div className="lower-content">
                          <a href="product-details.html">Woven Crop Cami</a>
                          <span className="price">$90.30</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-12 shop-block masonry-item small-column best_seller new_arraivals">
                    <div className="shop-block-one">
                      <div className="inner-box">
                        <figure className="image-box">
                          <img
                            src="/assets/images/resource/shop/shop-8.jpg"
                            alt
                          />
                          <ul className="info-list clearfix">
                            <li>
                              <a href="index.html">
                                <i className="flaticon-heart" />
                              </a>
                            </li>
                            <li>
                              <a href="product-details.html">Add to cart</a>
                            </li>
                            <li>
                              <a
                                href="assets/images/resource/shop/shop-8.jpg"
                                className="lightbox-image"
                                data-fancybox="gallery"
                              >
                                <i className="flaticon-search" />
                              </a>
                            </li>
                          </ul>
                        </figure>
                        <div className="lower-content">
                          <a href="product-details.html">Must-Have Easy Tank</a>
                          <span className="price">$20.30</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="more-btn centred">
                <a href="shop.html" className="theme-btn-one">
                  View All Products
                  <i className="flaticon-right-1" />
                </a>
              </div>
            </div>
          </section>
          {/* shop-section end */}
          {/* cta-section */}
          <section className="cta-section">
            <div
              className="image-layer"
              style={{
                backgroundImage: "url(assets/images/background/cta-bg-1.jpg)",
              }}
            />
            <div className="auto-container">
              <div className="cta-inner centred">
                <div className="pattern-layer">
                  <div
                    className="pattern-1"
                    style={{
                      backgroundImage: "url(assets/images/shape/shape-2.png)",
                    }}
                  />
                  <div
                    className="pattern-2"
                    style={{
                      backgroundImage: "url(assets/images/shape/shape-3.png)",
                    }}
                  />
                </div>
                <h2>End of Season Clearance Sale upto 50%</h2>
                <p>
                  Welcome to the new range of shaving products from master
                  barber. We have over three decades of experience in the male
                  grooming industry
                </p>
                <a href="shop.html" className="theme-btn-one">
                  Shop Now
                  <i className="flaticon-right-1" />
                </a>
              </div>
            </div>
          </section>
          {/* cta-section end */}
          {/* news-section */}
          <section className="news-section">
            <div className="auto-container">
              <div className="sec-title">
                <h2>Castro News</h2>
                <p>Excepteur sint occaecat cupidatat non proident sunt</p>
                <span
                  className="separator"
                  style={{
                    backgroundImage: "url(assets/images/icons/separator-1.png)",
                  }}
                />
              </div>
              <div className="row clearfix">
                <div className="col-lg-4 col-md-6 col-sm-12 news-block">
                  <div
                    className="news-block-one wow fadeInUp animated animated"
                    data-wow-delay="00ms"
                    data-wow-duration="1500ms"
                  >
                    <div className="inner-box">
                      <figure className="image-box">
                        <a href="blog-details.html">
                          <img src="/assets/images/news/news-1.jpg" alt />
                        </a>
                      </figure>
                      <div className="lower-content">
                        <span className="post-date">May 05, 2020</span>
                        <h3>
                          <a href="blog-details.html">
                            Why is a ticket to lagos so expensive?
                          </a>
                        </h3>
                        <ul className="post-info clearfix">
                          <li>
                            <a href="index.html">by admin</a>
                          </li>
                          <li>
                            <a href="index.html">03 Comments</a>
                          </li>
                        </ul>
                        <p>
                          Tempor incididunt labore dolore magna aliqua. enim
                          minim veniam quis nostrud exercitation laboris.
                        </p>
                        <div className="link">
                          <a href="blog-details.html">
                            Read More
                            <i className="flaticon-right-1" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 news-block">
                  <div
                    className="news-block-one wow fadeInUp animated animated"
                    data-wow-delay="300ms"
                    data-wow-duration="1500ms"
                  >
                    <div className="inner-box">
                      <figure className="image-box">
                        <a href="blog-details.html">
                          <img src="/assets/images/news/news-2.jpg" alt />
                        </a>
                      </figure>
                      <div className="lower-content">
                        <span className="post-date">May 04, 2020</span>
                        <h3>
                          <a href="blog-details.html">
                            But i must explain to you how all this mistaken
                            idea.
                          </a>
                        </h3>
                        <ul className="post-info clearfix">
                          <li>
                            <a href="index.html">by admin</a>
                          </li>
                          <li>
                            <a href="index.html">07 Comments</a>
                          </li>
                        </ul>
                        <p>
                          Tempor incididunt labore dolore magna aliqua. enim
                          minim veniam quis nostrud exercitation laboris.
                        </p>
                        <div className="link">
                          <a href="blog-details.html">
                            Read More
                            <i className="flaticon-right-1" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 news-block">
                  <div
                    className="news-block-one wow fadeInUp animated animated"
                    data-wow-delay="600ms"
                    data-wow-duration="1500ms"
                  >
                    <div className="inner-box">
                      <figure className="image-box">
                        <a href="blog-details.html">
                          <img src="/assets/images/news/news-3.jpg" alt />
                        </a>
                      </figure>
                      <div className="lower-content">
                        <span className="post-date">May 03, 2020</span>
                        <h3>
                          <a href="blog-details.html">
                            The Biebers Just Switched Up Their Couple Style
                          </a>
                        </h3>
                        <ul className="post-info clearfix">
                          <li>
                            <a href="index.html">by admin</a>
                          </li>
                          <li>
                            <a href="index.html">05 Comments</a>
                          </li>
                        </ul>
                        <p>
                          Tempor incididunt labore dolore magna aliqua. enim
                          minim veniam quis nostrud exercitation laboris.
                        </p>
                        <div className="link">
                          <a href="blog-details.html">
                            Read More
                            <i className="flaticon-right-1" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* news-section end */}
          {/* service-section */}
          <section className="service-section">
            <div className="auto-container">
              <div className="inner-container">
                <div className="row clearfix">
                  <div className="col-lg-3 col-md-6 col-sm-12 service-block">
                    <div className="service-block-one">
                      <div className="inner-box">
                        <div className="icon-box">
                          <i className="flaticon-truck" />
                        </div>
                        <h3>
                          <a href="index.html">Free Shipping</a>
                        </h3>
                        <p>Free shipping on oder over $100</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-12 service-block">
                    <div className="service-block-one">
                      <div className="inner-box">
                        <div className="icon-box">
                          <i className="flaticon-credit-card" />
                        </div>
                        <h3>
                          <a href="index.html">Secure Payment</a>
                        </h3>
                        <p>We ensure secure payment with PEV</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-12 service-block">
                    <div className="service-block-one">
                      <div className="inner-box">
                        <div className="icon-box">
                          <i className="flaticon-24-7" />
                        </div>
                        <h3>
                          <a href="index.html">Support 24/7</a>
                        </h3>
                        <p>Contact us 24 hours a day, 7 days a week</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-12 service-block">
                    <div className="service-block-one">
                      <div className="inner-box">
                        <div className="icon-box">
                          <i className="flaticon-undo" />
                        </div>
                        <h3>
                          <a href="index.html">30 Days Return</a>
                        </h3>
                        <p>Simply return it within 30 days for an exchange.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* service-section end */}
          {/* instagram-section */}
          <section className="instagram-section">
            <div className="outer-container">
              <div className="sec-title">
                <h2>Follow Us On Instagram</h2>
                <p>Excepteur sint occaecat cupidatat</p>
                <span
                  className="separator"
                  style={{
                    backgroundImage: "url(assets/images/icons/separator-1.png)",
                  }}
                />
              </div>
              <div className="six-item-carousel owl-carousel owl-theme owl-dots-none owl-nav-none">
                <figure className="image-box">
                  <img src="/assets/images/resource/instagram-1.jpg" alt />
                  <ul className="info-list clearfix">
                    <li>
                      <a href="index-2.html">
                        <i className="flaticon-heart" />
                        450
                      </a>
                    </li>
                    <li>
                      <a href="index-2.html">
                        <i className="flaticon-commentary" />
                        320
                      </a>
                    </li>
                  </ul>
                </figure>
                <figure className="image-box">
                  <img src="/assets/images/resource/instagram-2.jpg" alt />
                  <ul className="info-list clearfix">
                    <li>
                      <a href="index-2.html">
                        <i className="flaticon-heart" />
                        450
                      </a>
                    </li>
                    <li>
                      <a href="index-2.html">
                        <i className="flaticon-commentary" />
                        320
                      </a>
                    </li>
                  </ul>
                </figure>
                <figure className="image-box">
                  <img src="/assets/images/resource/instagram-3.jpg" alt />
                  <ul className="info-list clearfix">
                    <li>
                      <a href="index-2.html">
                        <i className="flaticon-heart" />
                        450
                      </a>
                    </li>
                    <li>
                      <a href="index-2.html">
                        <i className="flaticon-commentary" />
                        320
                      </a>
                    </li>
                  </ul>
                </figure>
                <figure className="image-box">
                  <img src="/assets/images/resource/instagram-4.jpg" alt />
                  <ul className="info-list clearfix">
                    <li>
                      <a href="index-2.html">
                        <i className="flaticon-heart" />
                        450
                      </a>
                    </li>
                    <li>
                      <a href="index-2.html">
                        <i className="flaticon-commentary" />
                        320
                      </a>
                    </li>
                  </ul>
                </figure>
                <figure className="image-box">
                  <img src="/assets/images/resource/instagram-5.jpg" alt />
                  <ul className="info-list clearfix">
                    <li>
                      <a href="index-2.html">
                        <i className="flaticon-heart" />
                        450
                      </a>
                    </li>
                    <li>
                      <a href="index-2.html">
                        <i className="flaticon-commentary" />
                        320
                      </a>
                    </li>
                  </ul>
                </figure>
                <figure className="image-box">
                  <img src="/assets/images/resource/instagram-6.jpg" alt />
                  <ul className="info-list clearfix">
                    <li>
                      <a href="index-2.html">
                        <i className="flaticon-heart" />
                        450
                      </a>
                    </li>
                    <li>
                      <a href="index-2.html">
                        <i className="flaticon-commentary" />
                        320
                      </a>
                    </li>
                  </ul>
                </figure>
              </div>
            </div>
          </section>
          {/* instagram-section end */}
          {/* main-footer */}
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
                              <a href="mailto:info@example.com">
                                info@example.com
                              </a>
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
          {/* main-footer end */}
          {/*Scroll to top*/}
          <button className="scroll-top scroll-to-target" data-target="html">
            <i className="fas fa-long-arrow-alt-up" />
          </button>
        </div>
        {/* jequery plugins */}
        {/* main-js */}
        {/* End of .page_wrapper */}
      </div>
    </>
  );
}
export default Test1;
