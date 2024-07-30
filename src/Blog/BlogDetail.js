import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Comment from "../Comment/Comment";
function BlogDetail() {
  const [data, setData] = useState({});
  const params = useParams();

  const fetchData = async () => {
    try {
      const res = await axios.get(
        "http://localhost:3003/api/get-all-data-blog/" + params.id
      );
      setData(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const renderData = () => {
    if (data) {
      return (
        <div className="card">
          <img
            className="card-img-top"
            src={`http://localhost:3003${data.image}`}
            alt="Unsplash"
          />
          <div className="card-header">
            <h5 className="card-title mb-0">{data.title}</h5>
          </div>
          <div className="card-body">
            <p className="card-text">{data.description}</p>
          </div>
        </div>
      );
    } else {
      return <p>Loading...</p>;
    }
  };

  return (
    <div>
      <div className="row">
        <div className="col-12">{renderData()}</div>
      </div>
      <Comment idBlog={params.id}></Comment>
    </div>
  );
}

export default BlogDetail;
