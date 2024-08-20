import axios from "axios";
import { useEffect, useState } from "react";

function Products_client() {
  const [data, setData] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12; // Đặt số lượng sản phẩm muốn hiển thị trên mỗi trang

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentData = data.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);

  const renderPagination = () => {
    const totalPages = Math.ceil(data.length / itemsPerPage);
    const pages = [];

    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <li key={i} className={currentPage === i ? "active" : ""}>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault(); // Ngăn chặn hành động mặc định khi click vào liên kết
              handlePageChange(i);
            }}
          >
            {i}
          </a>
        </li>
      );
    }

    return (
      <ul className="pagination clearfix">
        <li>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              if (currentPage > 1) handlePageChange(currentPage - 1);
            }}
            className={currentPage === 1 ? "disabled" : ""}
          >
            Prev
          </a>
        </li>
        {pages}
        <li>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              if (currentPage < totalPages) handlePageChange(currentPage + 1);
            }}
            className={currentPage === totalPages ? "disabled" : ""}
          >
            Next
          </a>
        </li>
      </ul>
    );
  };

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3003/api/product/get-data"
      );
      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  function renderData() {
    if (currentData.length > 0) {
      return currentData.map((value, key) => {
        return (
          <div key={key} className="col-lg-3 col-md-6 col-sm-12 shop-block">
            <div className="shop-block-one">
              <div className="inner-box">
                <figure className="image-box">
                  <img src={`http://localhost:3003${value.image}`} />
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
                        href="assets/images/resource/shop/shop-1.jpg"
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
                  <span className="price">${value.price}</span>
                </div>
              </div>
            </div>
          </div>
        );
      });
    }
  }

  return (
    <section className="shop-page-section shop-page-1">
      <div className="auto-container">
        <div className="item-shorting clearfix">
          <div className="left-column pull-left clearfix">
            <div className="filter-box">
              <div className="dropdown">
                <button
                  className="search-box-btn"
                  type="button"
                  id="dropdownMenu5"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i className="flaticon-list-2" />
                  Filter
                </button>
                <div
                  className="filter-content dropdown-menu pull-right search-panel"
                  aria-labelledby="dropdownMenu5"
                >
                  <div className="close-btn">
                    <i className="flaticon-close" />
                  </div>
                  <div className="discription-box">
                    <div className="row clearfix">
                      <div className="col-lg-3 col-md-6 col-sm-12 column">
                        <div className="single-column">
                          <h4>Category</h4>
                          <ul className="list clearfix">
                            <li>
                              <a href="single-shop-1.html">
                                Women’s Clothing (6)
                              </a>
                            </li>
                            <li>
                              <a href="single-shop-1.html">Man Fashion (9)</a>
                            </li>
                            <li>
                              <a href="single-shop-1.html">
                                Kid’s Clothing (2)
                              </a>
                            </li>
                            <li>
                              <a href="single-shop-1.html">
                                Jewelry &amp; Watches (5)
                              </a>
                            </li>
                            <li>
                              <a href="single-shop-1.html">
                                Bags &amp; Shoes (3)
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-6 col-sm-12 column">
                        <div className="single-column">
                          <h4>Age</h4>
                          <ul className="list clearfix">
                            <li>
                              <a href="single-shop-1.html">0 - 12 Months (9)</a>
                            </li>
                            <li>
                              <a href="single-shop-1.html">01 - 04 Years (5)</a>
                            </li>
                            <li>
                              <a href="single-shop-1.html">05 - 08 Years (6)</a>
                            </li>
                            <li>
                              <a href="single-shop-1.html">
                                09 - 12 Years (10)
                              </a>
                            </li>
                            <li>
                              <a href="single-shop-1.html">13 - 14 Years (7)</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-6 col-sm-12 column">
                        <div className="single-column">
                          <h4>Size</h4>
                          <ul className="list clearfix">
                            <li>
                              <a href="single-shop-1.html">XXL (6)</a>
                            </li>
                            <li>
                              <a href="single-shop-1.html">XL (9)</a>
                            </li>
                            <li>
                              <a href="single-shop-1.html">S (2)</a>
                            </li>
                            <li>
                              <a href="single-shop-1.html">M (5)</a>
                            </li>
                            <li>
                              <a href="single-shop-1.html">L (3)</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-6 col-sm-12 column">
                        <div className="single-column">
                          <h4>Color</h4>
                          <ul className="color-list clearfix">
                            <li>
                              <span className="black" />
                              <a href="single-shop-1.html">Black (3)</a>
                            </li>
                            <li>
                              <span className="blue" />
                              <a href="single-shop-1.html">Blue (6)</a>
                            </li>
                            <li>
                              <span className="orange" />
                              <a href="single-shop-1.html">Orange (9)</a>
                            </li>
                            <li>
                              <span className="green" />
                              <a href="single-shop-1.html">Green (5)</a>
                            </li>
                            <li>
                              <span className="purple" />
                              <a href="single-shop-1.html">Purple (3)</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="price-filters">
                    <h4 className="sidebar-title">Price Range</h4>
                    <div className="range-slider clearfix">
                      <div className="price-range-slider" />
                      <div className="clearfix">
                        <p>Range:</p>
                        <div className="title" />
                        <div className="input">
                          <input
                            type="text"
                            className="property-amount"
                            name="field-name"
                            readOnly
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="text">
              <p>Showing 1–12 of 50 Results</p>
            </div>
            <div className="short-box clearfix">
              <p>Short by</p>
              <div className="select-box">
                <select className="wide form-control">
                  <option data-display={9}>9</option>
                  <option value={1}>5</option>
                  <option value={2}>7</option>
                  <option value={4}>15</option>
                </select>
              </div>
            </div>
          </div>
          <div className="right-column pull-right clearfix">
            <div className="short-box clearfix">
              <p>Short by</p>
              <div className="select-box">
                <select className="wide form-control">
                  <option data-display="Popularity">Popularity</option>
                  <option value={1}>New Collection</option>
                  <option value={2}>Top Sell</option>
                  <option value={4}>Top Ratted</option>
                </select>
              </div>
            </div>
            <div className="menu-box">
              <a href="shop.html">
                <i className="flaticon-menu" />
              </a>
              <a href="shop.html">
                <i className="flaticon-list" />
              </a>
            </div>
          </div>
        </div>
        <div className="our-shop">
          <div className="row clearfix">{renderData()}</div>
        </div>
        <div className="pagination-wrapper centred">
          {/* <ul className="pagination clearfix">
            <li>
              <a href="shop.html">Prev</a>
            </li>
            <li>
              <a href="shop.html">1</a>
            </li>
            <li>
              <a href="shop.html" className="active">
                2
              </a>
            </li>
            <li>
              <a href="shop.html">3</a>
            </li>
            <li>
              <a href="shop.html">4</a>
            </li>
            <li>
              <a href="shop.html">5</a>
            </li>
            <li>
              <a href="shop.html">Next</a>
            </li>
          </ul> */}
          {renderPagination()}
        </div>
      </div>
    </section>
  );
}
export default Products_client;
