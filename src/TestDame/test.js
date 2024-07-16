import axios from "axios";
import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Test(props) {
  const [data, setData] = useState([]);
  const [errors, setErrors] = useState({});
  const [files, setFiles] = useState([]);
  const [input, setInputs] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });
  const [deleteId, setDeleteId] = useState(null); // Thêm state để lưu trữ ID người dùng cần xóa

  // lấy data từ api
  const fetchData = async () => {
    try {
      const res = await axios.get("http://localhost:3003/api/get-data");
      setData(res.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((state) => ({ ...state, [name]: value }));
  };

  const handleUserInputAvatar = (e) => {
    const selectedFiles = Array.from(e.target.files);
    const validImageTypes = ["image/png", "image/jpg", "image/jpeg"];
    let error = false;

    if (selectedFiles.length > 3) {
      toast.error("Bạn chỉ có thể tải tối đa 3 ảnh");
      error = true;
    }
    selectedFiles.forEach((file) => {
      if (!validImageTypes.includes(file.type)) {
        toast.error("Không đúng định dạng");
        error = true;
      }

      const fileSizeMB = file.size / (1024 * 1024);
      if (fileSizeMB > 1) {
        toast.error("Vượt quá 1MB rồi");
        error = true;
      }
    });
    if (!error) {
      setFiles(selectedFiles);
    }
  };

  const handleDelete = async () => {
    if (!deleteId) return;

    try {
      const res = await axios.delete(
        `http://localhost:3003/api/delete/${deleteId}`
      );
      if (res.status === 200) {
        toast.success("Xóa thành công");
        fetchData(); // Gọi lại fetchData để cập nhật danh sách người dùng
        setDeleteId(null); // Reset deleteId sau khi xóa thành công
        document.getElementById("closeModalButtonDel").click(); // Đóng modal
      } else {
        toast.error("Xóa không thành công");
      }
    } catch (error) {
      console.error("Error deleting user:", error);
      toast.error("Xóa không thành công");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let errorSubmit = {};
    let flag = true;

    if (input.name === "") {
      errorSubmit.name = "Vui lòng nhập họ và tên";
      toast.error("Vui lòng nhập họ và tên");
      flag = false;
    }
    if (input.email === "") {
      errorSubmit.email = "Vui lòng nhập email";
      toast.error("Vui lòng nhập email");
      flag = false;
    }
    if (input.password === "") {
      errorSubmit.password = "Vui lòng nhập mật khẩu";
      toast.error("Vui lòng nhập mật khẩu");
      flag = false;
    }
    if (input.phone === "") {
      errorSubmit.phone = "Vui lòng nhập số điện thoại";
      toast.error("Vui lòng nhập số điện thoại");
      flag = false;
    }

    if (!files || files.length === 0) {
      errorSubmit.avatar = "Hãy thêm ảnh vào";
      toast.error("Hãy thêm ảnh vào");
      flag = false;
    }

    if (!flag) {
      setErrors(errorSubmit);
    } else {
      // Xử lý logic submit nếu không có lỗi
      setErrors({});
      try {
        let url = "http://localhost:3003/api/create-user";
        let config = {
          headers: {
            "Content-type": "multipart/form-data",
            Accept: "application/json",
          },
        };
        const formData = new FormData();
        formData.append("name", input.name);
        formData.append("phone", input.phone);
        formData.append("email", input.email);
        formData.append("password", input.password);
        files.forEach((file) => {
          formData.append("avatar", file); // Sử dụng "avatar" thay vì "file[index]"
        });
        const response = await axios.post(url, formData, config);
        if (response.status === 200) {
          toast.success("Thêm mới thành công");
          setInputs({ name: "", email: "", phone: "", password: "" });
          setFiles([]);
          setErrors({});
          document.getElementById("closeModalButton").click(); // Đóng modal
          fetchData();
        }
      } catch (error) {
        toast.error("Lỗi không thể thêm mới User");
        console.error(error);
      }
    }
  };

  const renderData = () => {
    if (data.length > 0) {
      return data.map((value, key) => (
        <tr key={key}>
          <th scope="row">{key + 1}</th>
          <td>{value.name}</td>
          <td>{value.email}</td>
          <td>{value.phone}</td>
          <td className="text-center">
            <button
              onClick={() => setDeleteId(value.id)} // Lưu ID người dùng cần xóa
              className="btn btn-danger"
              style={{ marginRight: "10px" }}
              data-bs-toggle="modal"
              data-bs-target="#deleteModal"
            >
              Xóa
            </button>
          </td>
        </tr>
      ));
    }
  };

  return (
    <>
      <ToastContainer />
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
              <div className="modal-header">
                <h5 className="modal-title" id="staticBackdropLabel">
                  Thêm mới user
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
                  <label className="text-center">Name</label>
                  <input
                    className="form-control"
                    name="name"
                    value={input.name}
                    type="text"
                    placeholder="Nhập họ và tên"
                    onChange={handleChange}
                  />
                  <label className="text-center">Phone Number</label>
                  <input
                    className="form-control"
                    name="phone"
                    value={input.phone}
                    type="text"
                    placeholder="Nhập số điện thoại"
                    onChange={handleChange}
                  />
                  <label className="text-center">Email</label>
                  <input
                    className="form-control"
                    name="email"
                    value={input.email}
                    type="email"
                    placeholder="Nhập email"
                    onChange={handleChange}
                  />
                  <label className="text-center">Password</label>
                  <input
                    className="form-control"
                    name="password"
                    value={input.password}
                    type="password"
                    placeholder="Nhập mật khẩu"
                    onChange={handleChange}
                  />
                  <label className="text-center">Avatar</label>
                  <input
                    multiple
                    className="form-control"
                    type="file"
                    onChange={handleUserInputAvatar}
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
              <div className="modal-body">
                Bạn có muốn xóa người dùng này không ?
              </div>
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
                  className="btn btn-danger"
                  onClick={handleDelete} // Gọi hàm handleDelete khi nhấn nút xác nhận xóa
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
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Phone Number</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>{renderData()}</tbody>
        </table>
      </div>
    </>
  );
}

export default Test;
