import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import axios from "axios";

function ClientHome() {
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const res = await axios.get("http://localhost:3003/api/product/get-data");
      setData(res.data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  const renderData = () => {
    if ((data.length = 8)) {
      return data.map((value, key) => {
        return (
          <div className="col-lg-3 col-md-6 col-sm-12 shop-block masonry-item small-column best_seller">
            <div className="shop-block-one">
              <div className="inner-box">
                <figure className="image-box">
                  <img src={`http://localhost:3003${value.image}`} />
                  <span className="category green-bg">New</span>
                  <ul
                    className="info-list clearfix"
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      padding: 0,
                      margin: 0,
                      listStyleType: "none",
                    }}
                  >
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
                        href="assets/images/resource/shop/shop-2.jpg"
                        className="lightbox-image"
                        data-fancybox="gallery"
                      >
                        <i className="flaticon-search" />
                      </a>
                    </li>
                  </ul>
                </figure>
                <div className="lower-content">
                  <a href="product-details.html">{value.name}</a>
                  <span className="price">{value.price}$</span>
                </div>
              </div>
            </div>
          </div>
        );
      });
    }
  };

  return (
    <>
      <section className="topcategory-section centred">
        <div className="auto-container">
          <div className="sec-title">
            <h2>Top Category</h2>
            <p>
              Follow the most popular trends and get exclusive items from castro
              shop
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
                  <img src="https://hanoicomputercdn.com/media/product/52656_intel_core_i7_10700.jpg" />
                </figure>
                <h5>
                  <a href="index.html">Chip Collections</a>
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
                  <img src="https://vitinhhoangvu.com/wp-content/uploads/2021/07/Z490AORUSMASTER-2.jpg" />
                </figure>
                <h5>
                  <a href="index.html">Main Collections</a>
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
                  <img src="https://cyberallgame.vn/upload/images/ram-gskill-trident-z-rgb-32gb-4x8gb-ddr4-3200mhz-f4-3200c16q-32gtzr.jpg" />
                </figure>
                <h5>
                  <a href="index.html">Ram Collections</a>
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
                  <img src="https://www.tncstore.vn/media/product/250-7497-card-man-hinh-aorus-geforce-rtx-4090-xtreme-waterforce-24g-1.jpg" />
                </figure>
                <h5>
                  <a href="index.html">VGA Collections</a>
                </h5>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="shop-section">
        <div className="auto-container">
          <div className="sec-title">
            <h2>Our Top Collection</h2>
            <p>There are some product that we featured for choose your best</p>
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
              {/* product */}
              {/* <div className="col-lg-3 col-md-6 col-sm-12 shop-block masonry-item small-column best_seller">
                <div className="shop-block-one">
                  <div className="inner-box">
                    <figure className="image-box">
                      <img src="/assets/images/resource/shop/shop-2.jpg"  />
                      <span className="category green-bg">New</span>
                      <ul
                        className="info-list clearfix"
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          padding: 0,
                          margin: 0,
                          listStyleType: "none",
                        }}
                      >
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
                            href="assets/images/resource/shop/shop-2.jpg"
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
              <div className="col-lg-3 col-md-6 col-sm-12 shop-block masonry-item small-column best_seller new_arraivals top_rate">
                <div className="shop-block-one">
                  <div className="inner-box">
                    <figure className="image-box">
                      <img
                        src="/assets/images/resource/shop/shop-7.jpg"
                        =""
                      />
                      <span className="category red-bg">Hot</span>
                      <ul className="info-list clearfix">
                        <li>
                          <a href="index.html">
                            <i className="flaticon-heart"></i>
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
                            <i className="flaticon-search"></i>
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
              </div> */}
              {renderData()}
            </div>
          </div>
          <div className="more-btn centred">
            <Link to={"/client/products"} className="theme-btn-one">
              View All Products
              <i className="flaticon-right-1" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default ClientHome;
