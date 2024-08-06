import axios from "axios";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function Category() {
  const [data, setData] = useState([])
  const [input, setInput] = useState({
    name: "",
    status: ""
  })
  const fetchData = async () => {
    try {
      const res = await axios.get("http://localhost:3003/api/category/get-data")
      setData(res.data);
    } catch (error) {
      console.log(error);
    }
  }

  const handleDelete = async (deleteID) => {
    if(!deleteID) {
      toast.error("Không có loại sản phẩm để xóa")
      return;
    }

    try {
      const res = await axios.delete(`http://localhost:3003/api/category/delete/${deleteID}`);
      if(res.status === 200) {
        toast.success("Xóa thành công loại sản phẩm!");
        fetchData();
      } else {
        toast.error("Không thể xóa loại sản phẩm")
      }
    } catch (err) {
      console.error(err);
      
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setInput((state) => ({ ...state, [name]: value }))
  }

  useEffect(() => {
    fetchData()
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault();
    let flag = true;

    if (input.name === "") {
      toast.error("Vui lòng nhập tên loại sản phẩm")
      flag = false;
    }
    if (input.status === "") {
      toast.error("Vui lòng điền tình trạng!");
      flag = false
    }
    if (!flag) {
      toast.error("Nhập đủ các thông tin để thực hiện hành động!");
    } else {
      try {
        let url = "http://localhost:3003/api/category/create"
        const response = await axios.post(url, {name : input.name , status : input.status});
        if(response.status === 200) {
          toast.success ("Đã thêm mới loại sản phẩm");
          setInput({name: "", status : ""});
          fetchData();
        } else {
          toast.error("có lỗi xảy ra khi thực hiện hành động")
        }
      } catch (error) {
        console.log(error);
      }
    }
  }

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
            <button className="btn btn-warning"  style={{ marginRight: "10px" }}>
              Chỉnh sửa
            </button>
            <button onClick={() => handleDelete(value.id)} className="btn btn-danger">Xóa</button>
          </td>
        </tr>
      ));
    }
  }

  return (
    <div>
      <ToastContainer />
      <div className="row">
        <div className="col-5">
          <div className="card">
            <div className="card-header">
              Thêm mới loại sản phẩm
            </div>
            <form onSubmit={handleSubmit}>
              <div className="card-body">
                <label>Tên loại sản phẩm</label>
                <input className="form-control"
                  name="name"
                  value={input.name}
                  onChange={handleChange}
                />
                <label>Tinh Trạng</label>
                <select className="form-control"
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
      </div>
    </div>
  );
}
export default Category;
