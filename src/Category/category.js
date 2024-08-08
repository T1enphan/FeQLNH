import axios from "axios";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Category() {
  const [data, setData] = useState([]);
  const [editID, setEditId] = useState(null);
  const [inputEdit, setInputEdit] = useState({
    name: "",
    status: "",
  });
  const [input, setInput] = useState({
    name: "",
    status: "",
  });

  const fetchData = async () => {
    try {
      const res = await axios.get(
        "http://localhost:3003/api/category/get-data"
      );
      setData(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdate = (item) => {
    setEditId(item.id);
    setInputEdit({ name: item.name, status: item.status });
  };

  const handleEditSubmit = async () => {
    try {
      const res = await axios.put(
        `http://localhost:3003/api/category/update/${editID}`,
        inputEdit
      );
      if (res.status === 200) {
        toast.success("Cập nhật thành công loại sản phẩm!");
        fetchData();
        setEditId(null);
        setInputEdit({ name: "", status: "" });
        document.getElementById("closeModalButton").click();
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (deleteID) => {
    if (!deleteID) {
      toast.error("Không có loại sản phẩm để xóa");
      return;
    }

    try {
      const res = await axios.delete(
        `http://localhost:3003/api/category/delete/${deleteID}`
      );
      if (res.status === 200) {
        toast.success("Xóa thành công loại sản phẩm!");
        fetchData();
      } else {
        toast.error("Không thể xóa loại sản phẩm");
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput((state) => ({ ...state, [name]: value }));
  };

  const handleChangeEdit = (e) => {
    const { name, value } = e.target;
    setInputEdit((state) => ({ ...state, [name]: value }));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let flag = true;

    if (input.name === "") {
      toast.error("Vui lòng nhập tên loại sản phẩm");
      flag = false;
    }
    if (input.status === "") {
      toast.error("Vui lòng điền tình trạng!");
      flag = false;
    }
    if (!flag) {
      toast.error("Nhập đủ các thông tin để thực hiện hành động!");
    } else {
      try {
        let url = "http://localhost:3003/api/category/create";
        const response = await axios.post(url, {
          name: input.name,
          status: input.status,
        });
        if (response.status === 200) {
          toast.success("Đã thêm mới loại sản phẩm");
          setInput({ name: "", status: "" });
          fetchData();
        } else {
          toast.error("Có lỗi xảy ra khi thực hiện hành động");
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  const renderData = () => {
    if (data.length > 0) {
      return data.map((value, key) => (
        <tr key={key}>
          <th className="align-middle">{key + 1}</th>
          <td>{value.name}</td>
          <td>
            <button
              className={`btn ${
                value.status === 1 ? "btn-success" : "btn-secondary"
              }`}
            >
              {value.status === 1 ? "Hoạt động" : "Tạm tắt"}
            </button>
          </td>
          <td className="text-center">
            <button
              className="btn btn-warning"
              style={{ marginRight: "10px" }}
              data-bs-toggle="modal"
              data-bs-target="#updateModal"
              onClick={() => handleUpdate(value)}
            >
              Chỉnh sửa
            </button>
            <button
              onClick={() => handleDelete(value.id)}
              className="btn btn-danger"
            >
              Xóa
            </button>
          </td>
        </tr>
      ));
    }
  };

  return (
    <div>
      <ToastContainer />
      <div className="row">
        <div className="col-5">
          <div className="card">
            <div className="card-header">Thêm mới loại sản phẩm</div>
            <form onSubmit={handleSubmit}>
              <div className="card-body">
                <label>Tên loại sản phẩm</label>
                <input
                  className="form-control"
                  name="name"
                  value={input.name}
                  onChange={handleChange}
                />
                <label>Tình Trạng</label>
                <select
                  className="form-control"
                  value={input.status}
                  name="status"
                  onChange={handleChange}
                >
                  <option>Hãy chọn tình trạng</option>
                  <option value={0}>Tạm tắt</option>
                  <option value={1}>Hoạt động</option>
                </select>
              </div>
              <div className="card-footer text-end">
                <button className="btn btn-primary" type="submit">
                  Thêm mới
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="col-7">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Tên</th>
                <th scope="col">Tình Trạng</th>
                <th scope="col" className="text-center">
                  Hành Động
                </th>
              </tr>
            </thead>
            <tbody>{renderData()}</tbody>
          </table>
        </div>
        <div
          className="modal fade"
          id="updateModal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Cập nhật loại sản phẩm
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  id="closeModalButton"
                ></button>
              </div>
              <div className="modal-body">
                <label>Tên loại sản phẩm</label>
                <input
                  className="form-control"
                  name="name"
                  value={inputEdit.name}
                  onChange={handleChangeEdit}
                />
                <label>Tình Trạng</label>
                <select
                  className="form-control"
                  value={inputEdit.status}
                  name="status"
                  onChange={handleChangeEdit}
                >
                  <option>Hãy chọn tình trạng</option>
                  <option value={0}>Tạm tắt</option>
                  <option value={1}>Hoạt động</option>
                </select>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleEditSubmit}
                >
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Category;
