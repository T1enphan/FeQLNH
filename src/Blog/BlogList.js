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
        <div class="col-12 col-md-6" key={key}>
          <div class="card">
            <img
              class="card-img-top"
              src={`http://localhost:3003${value.image}`}
              alt="Unsplash"
            />
            <div class="card-header">
              <h5 class="card-title mb-0">{value.title}</h5>
            </div>
            <div class="card-body">
              <p class="card-text">{value.description}</p>
              <Link to={`/blog-detail/${value.id}`} class="btn btn-primary">
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
