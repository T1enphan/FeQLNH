import axios from "axios";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Comment(props) {
  const [comments, setComments] = useState([]);
  const [data, setData] = useState({});
  const [replyingTo, setReplyingTo] = useState(null); // State để theo dõi comment đang được reply
  const [replyInput, setReplyInput] = useState(""); // State cho input của reply
  const [errors, setErrors] = useState("");
  const [input, setInput] = useState({
    comment: "",
  });

  function layID(idCha) {
    setReplyingTo(idCha); // Cập nhật state comment đang được reply
  }

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

  const handleReplyChange = (e) => {
    setReplyInput(e.target.value);
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

  const handleReplySubmit = async (e, parentId) => {
    e.preventDefault();
    if (replyInput === "") {
      toast.error("Hãy nhập comment");
      return;
    }

    try {
      const url = "http://localhost:3003/api/create-comment";
      const formData = new FormData();
      formData.append("comment", replyInput);
      formData.append("id_blog", props.idBlog);
      formData.append("id_user", data.id);
      formData.append("name_user", data.name);
      formData.append("avatar_user", data.avatar);
      formData.append("level", parentId ? parentId : 0);

      const res = await axios.post(url, formData);
      if (res.status === 200) {
        setReplyInput("");
        setReplyingTo(null);
        toast.success("Bạn đã reply bài viết!");
        getDataComment();
      }
    } catch (error) {
      console.error(error);
    }
  };

  const renderReplies = (parentId) => {
    return comments
      .filter(comment => comment.level === parentId)
      .map((reply, key) => (
        <div className="comment-box ml-4" key={key}>
          <div className="card">
            <div className="d-flex">
              <img
                src={`http://localhost:3003${reply.avatar_user}`}
                className="rounded-circle comment-avatar mr-3"
                style={{ width: "50px", height: "50px", marginTop: "10px" }}
              />
              <div>
                <div className="comment-body">
                  <h6 className="mb-1">{reply.name_user}</h6>
                  <p>{reply.comment}</p>
                </div>
                <div className="comment-footer d-flex align-items-center">
                  <button className="btn btn-sm btn-link">Like</button>
                  <button className="btn btn-sm btn-link" onClick={() => layID(reply.id)}>Reply</button>
                  <span className="text-muted ml-2">{reply.time}</span>
                </div>
                {replyingTo === reply.id && (
                  <form onSubmit={(e) => handleReplySubmit(e, reply.id)}>
                    <textarea
                      className="form-control"
                      rows="2"
                      placeholder="Write a reply..."
                      value={replyInput}
                      onChange={handleReplyChange}
                    ></textarea>
                    <div className="d-flex justify-content-end mt-2">
                      <button type="submit" className="btn btn-primary">
                        Reply
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      ));
  };

  const renderComments = () => {
    return comments
      .filter(comment => comment.level === 0)
      .map((value, key) => (
        <div className="comment-box" key={key}>
          <div className="card">
            <div className="d-flex">
              <img
                src={`http://localhost:3003${value.avatar_user}`}
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
                  <button className="btn btn-sm btn-link" onClick={() => layID(value.id)}>Reply</button>
                  <span className="text-muted ml-2">{value.time}</span>
                </div>
                {replyingTo === value.id && (
                  <form onSubmit={(e) => handleReplySubmit(e, value.id)}>
                    <textarea
                      className="form-control"
                      rows="2"
                      placeholder="Write a reply..."
                      value={replyInput}
                      onChange={handleReplyChange}
                    ></textarea>
                    <div className="d-flex justify-content-end mt-2">
                      <button type="submit" className="btn btn-primary">
                        Reply
                      </button>
                    </div>
                  </form>
                )}
                {renderReplies(value.id)}
              </div>
            </div>
          </div>
        </div>
      ));
  };

  return (
    <div>
      <ToastContainer />
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <h4>Comments</h4>
          {renderComments()}
          <form onSubmit={handleSubmit}>
            <div className="comment-box mb-4">
              <div className="d-flex">
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
        </div>
      </div>
    </div>
  );
}

export default Comment;
