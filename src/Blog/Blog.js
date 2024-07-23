import axios from "axios";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function Blog() {
  const [data, setData] = useState([]);
  const [files, setFiles] = useState([]);
  const [deleteId, setDeleteId] = useState(null);
  const [errors, setErrors] = useState({});
  const [input, setInputs] = useState({
    title: "",
    description: "",
    content: "",
  });

  const handDelete = async () => {
    if (!deleteId) return;
    try {
      const res = await axios.delete(
        `http://localhost:3003/api/blog/delete/${deleteId}`
      );
      if (res.status === 200) {
        toast.success("Xóa thành công");
        fetchData();
        setDeleteId(null);
        document.getElementById("closeModalButtonDel").click();
      } else {
        toast.error("Xóa không thành công");
      }
    } catch (error) {
      console.error("Error deleting user:", error);
      toast.error("Xóa không thành công");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((state) => ({ ...state, [name]: value }));
  };

  const handleBlogImage = (e) => {
    const selectedFiles = Array.from(e.target.files);
    const validImageType = ["image/png", "image/jpg", "image/jpeg"];
    let error = false;

    if (selectedFiles.length > 3) {
      toast.error("Bạn chỉ có thể tải tối đa 3 ảnh");
      error = true;
    }

    selectedFiles.forEach((file) => {
      if (!validImageType.includes(file.type)) {
        toast.error("Không đúng định dạng");
        error = true;
      }
      const fileSizeMB = file.size / (1024 * 1024);
      if (fileSizeMB > 1) {
        toast.error("vượt quá 1MB rồi");
        error = true;
      }
    });
    if (!error) {
      setFiles(selectedFiles);
    }
  };

  const fetchData = async () => {
    console.log("khởi chạy : fetchData");
    try {
      const res = await axios.get("http://localhost:3003/api/blog/get-data");
      setData(res.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
    console.log("khởi chạy : useEffect");
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let errorSubmit = {};
    let flag = true;
    if (input.title === "") {
      errorSubmit.title = "Vui lòng nhập tiêu đề";
      toast.error("Vui lòng nhập tiêu đề");
      flag = false;
    }
    if (input.description === "") {
      errorSubmit.description = "Vui lòng nhập mô tả";
      toast.error("Vui lòng nhập mô tả");
      flag = false;
    }
    if (input.content === "") {
      errorSubmit.content = "Vui lòng nhập content";
      toast.error("Vui lòng nhập content");
      flag = false;
    }
    if (!files || files.length === 0) {
      errorSubmit.image = "Hãy thêm ảnh vào";
      toast.error("Hãy thêm ảnh vào");
      flag = false;
    }
    if (!flag) {
      setErrors(errorSubmit);
    } else {
      setErrors({});
      try {
        console.log(input);
        let url = "http://localhost:3003/api/create-blog";
        let config = {
          headers: {
            "Content-type": "multipart/form-data",
            Accept: "application/json",
          },
        };
        const formData = new FormData();
        formData.append("title", input.title);
        formData.append("description", input.description);
        formData.append("content", input.content);
        files.forEach((file) => {
          formData.append("image", file);
        });
        const response = await axios.post(url, formData, config);
        if (response.status === 200) {
          toast.success("Bài viết đã được thêm thành công!");
          setInputs({ title: "", description: "", content: "" });
          setFiles([]);
          setErrors({});
          document.getElementById("closeModalButton").click();
          fetchData();
        }
      } catch (error) {
        toast.error("Có lỗi xảy ra khi thêm bài viết");
        console.log(error);
      }
    }
  };

  const renderData = () => {
    console.log("khởi chạy : renderData");
    if (data.length > 0) {
      return data.map((value, key) => (
        <tr key={key}>
          <th scope="row">{key + 1}</th>
          <td>{value.title}</td>
          <td>{value.description}</td>
          <td>
            <img
              src={value.image}
              alt={value.title}
              style={{ width: "100px", height: "auto" }}
            />
          </td>
          <td>{value.content}</td>
          <td className="text-center">
            <button
              className="btn btn-danger"
              style={{ marginRight: "10px" }}
              data-bs-toggle="modal"
              data-bs-target="#deleteModal"
              onClick={() => setDeleteId(value.id)}
            >
              Xóa
            </button>
            <button className="btn btn-warning">Chỉnh sửa</button>
          </td>
        </tr>
      ));
    }
  };

  const renderDataDel = () => {
    if (deleteId) {
      const blog = data.find((item) => item.id === deleteId);
      if (blog) {
        return (
          <div className="modal-body">
            Bạn có muốn xóa bài viết{" "}
            <b style={{ color: "red" }}>{blog.title}</b> không?
          </div>
        );
      }
    }
    return null;
  };

  return (
    <div>
      <ToastContainer />
      <div className="row">
        <h3>Bài Viết & Blog</h3>
      </div>
      <div className="row">
        <div className="col-9"></div>
        <div className="col-3 text-end">
          <button
            className="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop"
          >
            Thêm mới
          </button>
        </div>
        {/* modal create */}
        <div
          className="modal fade"
          id="staticBackdrop"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabIndex="-1"
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header bg-primary">
                <h5 className="modal-title" id="staticBackdropLabel">
                  Thêm mới Bài Viết
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <form onSubmit={handleSubmit}>
                  <label className="text-center">Title</label>
                  <input
                    className="form-control"
                    name="title"
                    type="text"
                    value={input.title}
                    onChange={handleChange}
                  />
                  <label className="text-center">Description</label>
                  <textarea
                    className="form-control"
                    name="description"
                    value={input.description}
                    onChange={handleChange}
                    type="text"
                    style={{ height: "200px", width: "466px" }}
                  />
                  <label className="text-center">content</label>
                  <input
                    className="form-control"
                    name="content"
                    value={input.content}
                    onChange={handleChange}
                    type="text"
                  />
                  <label className="text-center">Image</label>
                  <input
                    multiple
                    className="form-control"
                    type="file"
                    onChange={handleBlogImage}
                  />
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-bs-dismiss="modal"
                      id="closeModalButton"
                    >
                      Đóng
                    </button>
                    <button type="submit" className="btn btn-primary">
                      Thêm mới
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* delete modal */}
        <div
          className="modal fade"
          id="deleteModal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Lưu ý
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              {/* <div className="modal-body">
                Bạn có muốn xóa bài viết này không ?
              </div> */}
              {renderDataDel()}
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                  id="closeModalButtonDel"
                >
                  Đóng
                </button>
                <button
                  type="button"
                  onClick={handDelete}
                  className="btn btn-danger"
                >
                  Xóa
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-2">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col">STT</th>
              <th scope="col">Title</th>
              <th scope="col">Description</th>
              <th scope="col">Image</th>
              <th scope="col">Content</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>{renderData()}</tbody>
        </table>
      </div>
    </div>
  );
}
export default Blog;
