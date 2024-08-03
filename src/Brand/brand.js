import axios from "axios";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Brand() {
  const [data, setData] = useState([])
  const [input, setInput] = useState({
    name: "",
    status: ""
  })
  const fetchData = async () => {
    try {
      const res = await axios.get("http://localhost:3003/api/brand/get-data");
      setData(res.data)
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    fetchData()
  }, [])

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
            <button className="btn btn-warning" style={{ marginRight: "10px" }}>
              Chỉnh sửa
            </button>
            <button className="btn btn-danger">Xóa</button>
          </td>
        </tr>
      ));
    }
  }

  return (
    <div>
      <div className="row">
        <div className="col-5">
          <div className="card">
            <div className="card-header">
              Thêm Mới Thương Hiệu
            </div>
            <div className="card-body">
              <label>Tên Thương Hiệu</label>
              <input className="form-control" />
              <label>Tên Thương Hiệu</label>
              <select className="form-control">
                <option>Tạm tắt</option>
                <option>Hoạt động</option>
              </select>
            </div>
            <div className="card-footer text-end">
              <button className="btn btn-primary">Thêm Mới</button>
            </div>
          </div>
        </div>
        <div className="col-7">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Tên</th>
                <th scope="col">Status</th>
                <th scope="col" className="text-center">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>{renderData()}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
export default Brand;
