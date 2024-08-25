import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function News() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const res = await axios.get("http://localhost:3003/api/blog/get-data");
      setData(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  });

  const renderData = () => {
    if (data.length > 0) {
      return data.map((value, key) => {
        return (
          <div key={key} className="col-lg-4 col-md-6 col-sm-12 news-block">
            <div
              className="news-block-one wow fadeInUp animated animated"
              data-wow-delay="00ms"
              data-wow-duration="1500ms"
            >
              <div className="inner-box">
                <figure className="image-box">
                  <a href="blog-details.html">
                    <img
                      style={{ width: "100%", height: "350px" }}
                      src={`http://localhost:3003${value.image}`}
                      alt
                    />
                  </a>
                </figure>
                <div className="lower-content">
                  <span className="post-date">May 05, 2020</span>
                  <h3>
                    <a href="blog-details.html">{value.title}</a>
                  </h3>
                  <ul className="post-info clearfix">
                    <li>
                      <a href="index.html">by admin</a>
                    </li>
                    <li>
                      <a href="index.html">03 Comments</a>
                    </li>
                  </ul>
                  <p>{value.description}</p>
                  <div className="link">
                    <Link to={`/client/blog-detail/${value.id}`}>
                      Read More
                      <i className="flaticon-right-1" />
                    </Link>
                  </div>
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
      <section className="cta-section">
        <div
          className="image-layer"
          style={{
            backgroundImage: "url(/img/photos/rog.jpg)",
          }}
        />
        <div className="auto-container">
          <div className="cta-inner centred">
            <div className="pattern-layer">
              <div
                className="pattern-1"
                style={{
                  backgroundImage: "url(/assets/images/shape/shape-2.png)",
                }}
              />
              <div
                className="pattern-2"
                style={{
                  backgroundImage: "url(/assets/images/shape/shape-3.png)",
                }}
              />
            </div>
            <h2>End of Season Clearance Sale upto 50%</h2>
            <p>
              Welcome to the new range of shaving products from master barber.
              We have over three decades of experience in the male grooming
              industry
            </p>
            <a href="shop.html" className="theme-btn-one">
              Shop Now
              <i className="flaticon-right-1" />
            </a>
          </div>
        </div>
      </section>
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
          <div className="row clearfix">{renderData()}</div>
        </div>
      </section>
    </>
  );
}
export default News;
