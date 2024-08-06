import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
function BlogList() {
  const [data, setData] = useState({});

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
  }, []);

  const renderData = () => {
    if (data.length > 0) {
      return data.map((value, key) => (
        <div className="col-12 col-md-6" key={key}>
          <div className="card">
            <img
              className="card-img-top"
              src={`http://localhost:3003${value.image}`}
              alt="Unsplash"
            />
            <div className="card-header">
              <h5 className="card-title mb-0">{value.title}</h5>
            </div>
            <div className="card-body">
              <p className="card-text">{value.description}</p>
              <Link to={`/blog-detail/${value.id}`} className="btn btn-primary">
                Chi tiết bài viết
              </Link>
            </div>
          </div>
        </div>
      ));
    }
  };
  return <div className="row">{renderData()}</div>;
}
export default BlogList;
