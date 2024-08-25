import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
function BlogClient() {
  const [data, setData] = useState([]);
  const params = useParams();
  const fetchData = async () => {
    try {
      const res = await axios.get(
        "http://localhost:3003/api/get-all-data-blog/" + params.id
      );
      console.log(res.data);
      setData(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  function renderData() {
    if (data) {
      return (
        <div className="blog-details-content">
          <figure className="image-box">
            <img src={`http://localhost:3003${data.image}`} />
          </figure>
          <div className="inner-box">
            <ul className="post-info clearfix">
              <li>May 5, 2020</li>
              <li>
                <a href="blog-details.html">by admin</a>
              </li>
              <li>
                <a href="blog-details.html">03 Comments</a>
              </li>
            </ul>
            <div className="text">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo.
              </p>
              <h3>{data.title}</h3>
              <p>{data.description}</p>
            </div>
            <div className="image-box">
              <div className="row clearfix">
                <div className="col-lg-6 col-md-6 col-sm-12 image-column">
                  <figure className="image">
                    <img src="/assets/images/news/blog-details-2.jpg" alt />
                  </figure>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 image-column">
                  <figure className="image">
                    <img src="/assets/images/news/blog-details-3.jpg" alt />
                  </figure>
                </div>
              </div>
            </div>
            <div className="text">
              <h3>Why is a ticket to lagos so expensive?</h3>
              <p>
                Sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamo laboris nisi ut aliquip ex ea commodo consequat. duis
                aute irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim est laborum. Sed ut perspiciatis unde omnis iste
                natus error sit voluptatem accusantium dolore que laudantium
                totam rem aperiam eaque ipsa quae ab illo inventore veritatis et
                quasi architecto beatae vitae dicta sunt explicabo.
              </p>
              <p>
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                fugit sed quia consequuntur magni dolore eos qui ratione
                voluptatem sequi nesciunt. Neque poro quisquam est, qui dolore
                ipsum quia dolor sit amet.consectetur adipisci velit, sed quia
                non numquam eius modi tempora.
              </p>
            </div>
            <div className="post-share-option clearfix">
              <div className="tags-box pull-left">
                <h4>Tags:</h4>
                <ul className="tags-list clearfix">
                  <li>
                    <a href="blog-details.html">Retail</a>
                  </li>
                  <li>
                    <a href="blog-details.html">Technology</a>
                  </li>
                </ul>
              </div>
              <div className="social-box pull-right">
                <h4>Follow Us:</h4>
                <ul className="social-links clearfix">
                  <li>
                    <a href="blog-details.html">
                      <i className="fab fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="blog-details.html">
                      <i className="fab fa-linkedin-in" />
                    </a>
                  </li>
                  <li>
                    <a href="blog-details.html">
                      <i className="fab fa-facebook-f" />
                    </a>
                  </li>
                  <li>
                    <a href="blog-details.html">
                      <i className="fab fa-skype" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
  return (
    <>
      <section className="blog-details">
        <div className="auto-container">
          {/* <div className="blog-details-content">
            <figure className="image-box">
              <img src="/assets/images/news/blog-details-1.jpg" />
            </figure>
            <div className="inner-box">
              <ul className="post-info clearfix">
                <li>May 5, 2020</li>
                <li>
                  <a href="blog-details.html">by admin</a>
                </li>
                <li>
                  <a href="blog-details.html">03 Comments</a>
                </li>
              </ul>
              <div className="text">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum. Sed ut perspiciatis unde omnis
                  iste natus error sit voluptatem accusantium doloremque
                  laudantium, totam rem aperiam, eaque ipsa quae ab illo
                  inventore veritatis et quasi architecto beatae vitae dicta
                  sunt explicabo.
                </p>
                <h3>The biebers just switched up their couple style.</h3>
                <p>
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt mollit anim id est laborum. Sed ut
                  perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo enim ipsam voluptatem quia
                  voluptas sit aspernatur aut odit aut fugit, sed quia
                  consequuntur magni dolores eos qui ratione voluptatem sequi
                  nesciunt. Neque porro quisquam est, qui dolorem ipsum quia
                  dolor sit amet.consectetur.
                </p>
              </div>
              <div className="image-box">
                <div className="row clearfix">
                  <div className="col-lg-6 col-md-6 col-sm-12 image-column">
                    <figure className="image">
                      <img src="/assets/images/news/blog-details-2.jpg" alt />
                    </figure>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 image-column">
                    <figure className="image">
                      <img src="/assets/images/news/blog-details-3.jpg" alt />
                    </figure>
                  </div>
                </div>
              </div>
              <div className="text">
                <h3>Why is a ticket to lagos so expensive?</h3>
                <p>
                  Sed do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                  ullamo laboris nisi ut aliquip ex ea commodo consequat. duis
                  aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat non proident, sunt in culpa qui officia
                  deserunt mollit anim est laborum. Sed ut perspiciatis unde
                  omnis iste natus error sit voluptatem accusantium dolore que
                  laudantium totam rem aperiam eaque ipsa quae ab illo inventore
                  veritatis et quasi architecto beatae vitae dicta sunt
                  explicabo.
                </p>
                <p>
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                  odit fugit sed quia consequuntur magni dolore eos qui ratione
                  voluptatem sequi nesciunt. Neque poro quisquam est, qui dolore
                  ipsum quia dolor sit amet.consectetur adipisci velit, sed quia
                  non numquam eius modi tempora.
                </p>
              </div>
              <div className="post-share-option clearfix">
                <div className="tags-box pull-left">
                  <h4>Tags:</h4>
                  <ul className="tags-list clearfix">
                    <li>
                      <a href="blog-details.html">Retail</a>
                    </li>
                    <li>
                      <a href="blog-details.html">Fashion</a>
                    </li>
                  </ul>
                </div>
                <div className="social-box pull-right">
                  <h4>Follow Us:</h4>
                  <ul className="social-links clearfix">
                    <li>
                      <a href="blog-details.html">
                        <i className="fab fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="blog-details.html">
                        <i className="fab fa-linkedin-in" />
                      </a>
                    </li>
                    <li>
                      <a href="blog-details.html">
                        <i className="fab fa-facebook-f" />
                      </a>
                    </li>
                    <li>
                      <a href="blog-details.html">
                        <i className="fab fa-skype" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div> */}
          {renderData()}
        </div>
      </section>
    </>
  );
}
export default BlogClient;
