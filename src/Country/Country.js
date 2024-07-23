import axios from "axios";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Country() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const res = await axios.get("http://localhost:3003/api/country/get-data");
      setData(res.data);
    } catch (error) {
      console.log("Error fetching data: ", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  const renderData = () => {
    if (data.length > 0) {
      return data.map((value, key) => (
        <tr key={key}>
          <th scope="row">{key + 1}</th>
          <td>{value.name}</td>
          <td className="text-center">
            <button className="btn btn-warning" style={{ marginRight: "10px" }}>
              Chỉnh sửa
            </button>
            <button className="btn btn-danger">Xóa</button>
          </td>
        </tr>
      ));
    }
  };
  renderData();
  return (
    <div className="row">
      <div className="col-4">
        <div className="card">
          <div className="card-header">Tạo quốc gia</div>
          <div className="card-body">
            <label>Tên quốc gia</label>
            <input className="form-control" />
          </div>
          <div className="card-footer text-end">
            <button className="btn btn-success">Thêm Mới</button>
          </div>
        </div>
      </div>
      <div className="col-6">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Tên</th>
              <th scope="col" className="text-center">
                Action
              </th>
            </tr>
          </thead>
          <tbody>{renderData()}</tbody>
        </table>
      </div>
    </div>
  );
}
export default Country;
