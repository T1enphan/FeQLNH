import axios from "axios";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function Product() {
  const [accessToken, setAccessToken] = useState(null);
  const [category, setCategory] = useState([]);
  const [brand, setBrand] = useState([]);
  const [user, setUser] = useState([]);
  const [input, setInput] = useState({
    id_category: "",
    id_brand: "",
    id_user: "",
    name: "",
    status: "",
    price: "",
    sale: "",
    company_profile: "",
    detail: "",
    image: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput((state) => ({ ...state, [name]: value }));
  };

  const getUser = async () => {
    let userData = localStorage.getItem("accountLogin");
    let userLocal = JSON.parse(userData);
    setUser(userLocal.user);
    setAccessToken(userLocal.token);
  };

  const getDataBrand = async () => {
    try {
      const res = await axios.get("http://localhost:3003/api/brand/get-data");
      setBrand(res.data);
      console.log(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  const getDataCategory = async () => {
    try {
      const res = await axios.get(
        "http://localhost:3003/api/category/get-data"
      );
      setCategory(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getUser();
    getDataCategory();
    getDataBrand();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    let flag = true;
    if (input.name === "") {
      toast.error("Hãy nhập vào tên sản phẩm");
      flag = false;
    }
    if (input.company_profile === "") {
      toast.error("Hãy nhập vào công ty");
      flag = false;
    }
    if (input.id_brand === "") {
      toast.error("Hãy nhập vào thương hiệu");
      flag = false;
    }
    if (input.id_category === "") {
      toast.error("Hãy nhập vào loại sản phẩm");
      flag = false;
    }
    if (input.price === "") {
      toast.error("Hãy nhập vào giá");
      flag = false;
    }
    if (input.sale === "") {
      toast.error("Hãy nhập vào khuyến mãi");
      flag = false;
    }
    if (input.detail === "") {
      toast.error("Hãy nhập vào mô tả");
      flag = false;
    }
    if (input.status === "") {
      toast.error("Hãy nhập vào trạng thái");
      flag = false;
    }
    if (!flag) {
      toast.error("Gà");
    } else {
      toast.success("OPke");
    }
  };
  return (
    <div>
      <ToastContainer />
      <div className="row">
        <div className="col-10"></div>
        <div className="col-2">
          <button
            className="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Thêm mới sản phẩm
          </button>
          <div
            class="modal fade"
            id="exampleModal"
            tabIndex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog modal-lg">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">
                    Thêm mới sản phẩm
                  </h5>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <form onSubmit={handleSubmit}>
                  <div class="modal-body">
                    <div className="row-8">
                      <label>Tên sản phẩm</label>
                      <input
                        name="name"
                        value={input.name}
                        onChange={handleChange}
                        className="form-control"
                      />
                    </div>
                    <div className="row">
                      <div className="col-6">
                        <label>Thương Hiệu</label>
                        <select
                          className="form-control"
                          value={input.id_brand}
                          name="id_brand"
                          onChange={handleChange}
                        >
                          <option value="0">Hãy chọn brand</option>
                          {brand.map((option) => (
                            <option key={option.id} value={option.id}>
                              {option.name}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="col-6">
                        <label>Loại sản phẩm</label>
                        <select
                          className="form-control"
                          value={input.id_category}
                          name="id_category"
                          onChange={handleChange}
                        >
                          <option value="0">Hãy chọn brand</option>
                          {category.map((option) => (
                            <option key={option.id} value={option.id}>
                              {option.name}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-6">
                        <label>Giá bán</label>
                        <input
                          name="price"
                          value={input.price}
                          onChange={handleChange}
                          className="form-control"
                        />
                      </div>
                      <div className="col-6">
                        <label>Khuyến mãi</label>
                        <input
                          name="sale"
                          value={input.sale}
                          onChange={handleChange}
                          className="form-control"
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-6">
                        <label>Tên công ty</label>
                        <input
                          name="company_profile"
                          value={input.company_profile}
                          onChange={handleChange}
                          className="form-control"
                        />
                      </div>
                      <div className="col-6">
                        <label>Trạng thái</label>
                        <select
                          className="form-control"
                          value={input.status}
                          name="status"
                          onChange={handleChange}
                        >
                          <option>Hãy chọn tình trạng</option>
                          <option value={0}>Hết Hàng</option>
                          <option value={1}>Còn Hàng</option>
                        </select>
                      </div>
                    </div>
                    <div className="row-8">
                      <label>Mô tả</label>
                      <textarea
                        name="detail"
                        onChange={handleChange}
                        value={input.detail}
                        className="form-control"
                      />
                    </div>
                    <div className="row-8">
                      <label>Hình ảnh</label>
                      <input type="file" className="form-control"></input>
                    </div>
                  </div>
                  <div class="modal-footer">
                    <button
                      type="button"
                      class="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                    <button type="submit" class="btn btn-primary">
                      Save changes
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="card">
          <div className="card-header bg-white">
            <h4>
              <b>Bảng sản phẩm</b>
            </h4>
          </div>
          <div className="card-body">
            <table class="table table-bordered">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Tên sản phẩm</th>
                  <th scope="col">Loại sản phẩm</th>
                  <th scope="col">Thương hiệu</th>
                  <th scope="col">Giá</th>
                  <th scope="col">Sale</th>
                  <th scope="col">Tình trạng</th>
                  <th scope="col">Hình ảnh</th>
                  <th scope="col">Mô tả</th>
                  <th scope="col">Công Ty</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                  <td>
                    <button
                      className="btn btn-warning"
                      style={{ marginRight: "10px" }}
                      data-bs-toggle="modal"
                      data-bs-target="#updateModal"
                    >
                      Chỉnh sửa
                    </button>
                    <button className="btn btn-danger">Xóa</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Product;
