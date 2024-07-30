import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Comment from "../Comment/Comment";
function BlogDetail() {
  const [data, setData] = useState({});
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
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

  const handlePostComment = () => {
    // Logic to post the comment, for now, we just add it to the comments array
    setComments([
      ...comments,
      {
        id: Date.now(),
        author: "Current User",
        text: newComment,
        time: "Just now",
      },
    ]);
    setNewComment("");
  };

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
      {/* <div className="row">
        <div className="col-md-8 offset-md-2">
          <h4>Comments</h4>
          <div className="comment-box mb-4">
            <div className="d-flex">
              <img src="https://via.placeholder.com/50" alt="Avatar" className="rounded-circle comment-avatar mr-3" />
              <textarea
                className="form-control"
                rows="3"
                placeholder="Write a comment..."
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
              ></textarea>
            </div>
            <div className="d-flex justify-content-end mt-2">
              <button className="btn btn-primary" onClick={handlePostComment}>Post</button>
            </div>
          </div>
          {renderComments()}
        </div>
      </div> */}
      <Comment idBlog={params.id}></Comment>
    </div>
  );
}

export default BlogDetail;
