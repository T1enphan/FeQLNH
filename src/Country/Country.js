import axios from "axios";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Country() {
  const [data, setData] = useState([]);
  const [errors, setErrors] = useState({});
  const [input, setInput] = useState({ name: "" });
  const [deleteId, setDeleteId] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput((state) => ({ ...state, [name]: value }));
  };

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
            <button className="btn btn-danger" onClick={() => handDelete(value.id)}>Xóa</button>
          </td>
        </tr>
      ));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let errorSubmit = {};
    let flag = true;
    if (input.name === "") {
      errorSubmit.name = "Vui lòng nhập tên quốc gia";
      toast.error("Vui lòng nhập tên quốc gia!");
      flag = false;
    }
    if (!flag) {
      setErrors(errorSubmit);
    } else {
      setErrors({});
      try {
        const url = "http://localhost:3003/api/country/create";
        const response = await axios.post(url, { name: input.name });
        if (response.status === 200) {
          toast.success("Quốc gia được thêm mới thành công!");
          setInput({ name: "" });
          setErrors({});
          fetchData();
        } else {
          toast.error("Có lỗi xảy ra khi thêm quốc gia");
        }
      } catch (error) {
        toast.error("Có lỗi xảy ra khi thêm quốc gia");
        console.log(error);
      }
    }
  };

  const handDelete = async (deleteId) => {
    if (!deleteId) {
      toast.error("Không có ID quốc gia để xóa");
      return;
    }

    try {
      const res = await axios.delete(`http://localhost:3003/api/country/delete/${deleteId}`);
      if (res.status === 200) {
        toast.success("Xóa thành công quốc gia");
        fetchData(); // Cập nhật lại danh sách quốc gia
        setDeleteId(null); // Xóa ID đã chọn để xóa
      } else {
        toast.error("Lỗi không thể xóa quốc gia");
      }
    } catch (error) {
      console.log("Xóa quốc gia thất bại: ", error);
      toast.error("Lỗi không thể xóa quốc gia");
    }
  };

  return (
    <div>
      <ToastContainer />
      <div className="row">
        <div className="col-4">
          <div className="card">
            <div className="card-header">Tạo quốc gia</div>
            <form onSubmit={handleSubmit}>
              <div className="card-body">
                <label>Tên quốc gia</label>
                <input
                  className="form-control"
                  name="name"
                  value={input.name}
                  onChange={handleChange}
                />
                {/* {errors.name && <p className="text-danger">{errors.name}</p>} */}
              </div>
              <div className="card-footer text-end">
                <button className="btn btn-success" type="submit">Thêm Mới</button>
              </div>
            </form>
          </div>
        </div>
        <div className="col-6">
          <table className="table">
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
    </div>
  );
}

export default Country;
