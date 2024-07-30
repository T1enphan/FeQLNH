import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function Comment(props) {
  let params = useParams();
  const [comments, setComments] = useState([]);
  const [data, setData] = useState({});
  const [test, setTest] = useState({});
  const [errors, setErrors] = useState("");
  const [input, setInput] = useState({
    comment: "",
  });

  const fetchData = async () => {
    try {
      const dataUser = await localStorage.getItem("accountLogin");
      if (dataUser) {
        const parsedUser = JSON.parse(dataUser);
        setData(parsedUser.user);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const getDataComment = async () => {
    try {
      const res = await axios.get(
        `http://localhost:3003/api/get-all-data-blog/` + props.idBlog
      );
      setComments(res.data.comments);
      console.log(res.data.comments[0].avatar_user);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchData();
    getDataComment();
  }, []);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput((state) => ({ ...state, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let errorSubmit = {};
    let flag = true;

    if (input.comment === "") {
      errorSubmit.comment = "hãy nhập comment";
      toast.error("Hãy nhập comment");
      flag = false;
    }
    if (!flag) {
      setErrors(errorSubmit);
    } else {
      setErrors({});
      try {
        const url = "http://localhost:3003/api/create-comment";
        const formData = new FormData();
        formData.append("comment", input.comment);
        formData.append("id_blog", props.idBlog);
        formData.append("id_user", data.id);
        formData.append("name_user", data.name);
        formData.append("avatar_user", data.avatar);
        formData.append("level", 0);

        const res = await axios.post(url, formData);
        if (res.status === 200) {
          setInput({ comment: "" });
          toast.success("Bạn đã comment bài viết!");
          getDataComment();
        }
      } catch (error) {
        console.error(error);
      }
    }
  };
  const renderComments = () => {
    return comments.map((value, key) => {
      // console.log(value.avatar_user); // Log giá trị của `value`
      return (
        <div className="comment-box" key={key}>
          <div className="card">
            <div className="d-flex">
              <img
                src={`http://localhost:3003${value.avatar_user}`}
                // src="/img/avatars/avatar-2.jpg"
                // alt="Avatar"
                className="rounded-circle comment-avatar mr-3"
                style={{ width: "100px", height: "100px", marginTop: "10px" }}
              />
              <div>
                <div className="comment-body">
                  <h6 className="mb-1">{value.name_user}</h6>
                  <p>{value.comment}</p>
                </div>
                <div className="comment-footer d-flex align-items-center">
                  <button className="btn btn-sm btn-link">Like</button>
                  <button className="btn btn-sm btn-link">Reply</button>
                  <span className="text-muted ml-2">{value.time}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    });
  };

  return (
    <div>
      <ToastContainer />
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <h4>Comments</h4>
          <form onSubmit={handleSubmit}>
            <div className="comment-box mb-4">
              <div className="d-flex">
                <img
                  src="/img/avatars/avatar-3.jpg"
                  alt="Avatar"
                  className="rounded-circle comment-avatar mr-3"
                />
                <textarea
                  className="form-control"
                  rows="3"
                  placeholder="Write a comment..."
                  value={input.comment}
                  name="comment"
                  onChange={handleChange}
                ></textarea>
              </div>
              <div className="d-flex justify-content-end mt-2">
                <button type="submit" className="btn btn-primary">
                  Post
                </button>
              </div>
            </div>
          </form>
          {renderComments()}
        </div>
      </div>
    </div>
  );
}
export default Comment;
