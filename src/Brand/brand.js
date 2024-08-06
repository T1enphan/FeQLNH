import axios from "axios";
import { useEffect, useState, useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Brand() {
  const [data, setData] = useState([]);
  const [editId, setEditId] = useState(null);
  const [input, setInput] = useState({
    name: "",
    status: ""
  });
  const modalRef = useRef(null);

  const fetchData = async () => {
    try {
      const res = await axios.get("http://localhost:3003/api/brand/get-data");
      setData(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (deleteId) => {
    if (!deleteId) {
      toast.error("Không có thương hiệu để xóa");
      return;
    }
    try {
      const res = await axios.delete(`http://localhost:3003/api/brand/delete/${deleteId}`);
      if (res.status === 200) {
        toast.success("Xóa thành công thương hiệu!");
        fetchData();
      } else {
        toast.error("Không thể xóa thương hiệu!");
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput((state) => ({ ...state, [name]: value }));
  };

  const openEditModal = (item) => {
    setEditId(item.id);
    setInput({ name: item.name, status: item.status });
    const modal = new window.bootstrap.Modal(modalRef.current);
    modal.show();
  };

  const handleUpdate = async () => {
    if (!editId) return;

    try {
      const res = await axios.put(`http://localhost:3003/api/brand/update/${editId}`, input);
      if (res.status === 200) {
        toast.success("Cập nhật thành công thương hiệu!");
        fetchData();
        setEditId(null);
        setInput({ name: "", status: "" });
        const modal = window.bootstrap.Modal.getInstance(modalRef.current);
        modal.hide();
      } else {
        toast.error("Có lỗi xảy ra khi cập nhật!");
      }
    } catch (error) {
      console.error(error);
      toast.error("Có lỗi xảy ra khi cập nhật!");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let flag = true;
    if (input.name === "") {
      toast.error("Vui lòng nhập tên thương hiệu!");
      flag = false;
    }
    if (input.status === "") {
      toast.error("Vui lòng điền tình trạng!");
      flag = false;
    }

    if (!flag) {
      toast.error("Nhập đủ các thông tin để thực hiện hành động");
    } else {
      try {
        const url = "http://localhost:3003/api/brand/create";
        const response = await axios.post(url, { name: input.name, status: input.status });
        if (response.status === 200) {
          toast.success("Đã thêm mới thương hiệu thành công!");
          setInput({ name: "", status: "" });
          fetchData();
        } else {
          toast.error("Có lỗi xảy ra khi thực hiện hành động!");
        }
      } catch (error) {
        console.error(error);
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
            <button className={`btn ${value.status === 1 ? 'btn-success' : 'btn-secondary'}`}>
              {value.status === 1 ? 'Hoạt động' : 'Tạm tắt'}
            </button>
          </td>
          <td className="text-center">
            <button className="btn btn-warning" onClick={() => openEditModal(value)} style={{ marginRight: "10px" }}>
              Chỉnh sửa
            </button>
            <button onClick={() => handleDelete(value.id)} className="btn btn-danger">Xóa</button>
          </td>
        </tr>
      ));
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <ToastContainer />
      <div className="row">
        <div className="col-5">
          <div className="card">
            <div className="card-header">
              Thêm Mới Thương Hiệu
            </div>
            <form onSubmit={handleSubmit}>
              <div className="card-body">
                <label>Tên Thương Hiệu</label>
                <input className="form-control"
                  value={input.name}
                  name="name"
                  onChange={handleChange}
                />
                <label>Tình Trạng</label>
                <select className="form-control" onChange={handleChange} name="status" value={input.status}>
                  <option value="">Hãy chọn tình trạng</option>
                  <option value={0}>Tạm tắt</option>
                  <option value={1}>Hoạt động</option>
                </select>
              </div>
              <div className="card-footer text-end">
                <button type="submit" className="btn btn-primary">Thêm Mới</button>
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
      </div>
      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" ref={modalRef}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Cập nhật thương hiệu</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <label>Tên Thương Hiệu</label>
              <input className="form-control"
                value={input.name}
                name="name"
                onChange={handleChange}
              />
              <label>Tình Trạng</label>
              <select className="form-control" onChange={handleChange} name="status" value={input.status}>
                <option value="">Hãy chọn tình trạng</option>
                <option value={0}>Tạm tắt</option>
                <option value={1}>Hoạt động</option>
              </select>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary" onClick={handleUpdate}>Save changes</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Brand;
