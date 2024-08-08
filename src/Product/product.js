import axios from "axios";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function Product() {
  const [accessToken, setAccessToken] = useState(null);
  const [category, setCategory] = useState([]);
  const [brand, setBrand] = useState([]);
  const [files, setFiles] = useState(null);
  const [data, setData] = useState([])
  const [detailID, setdetailID] = useState(null)
  const [image, setImage] = useState("");
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

  

  const handleProductInputFile = (e) => {
    const file = e.target.files[0];

    if (file) {
      const validImageTypes = ["image/png", "image/jpg", "image/jpeg"];
      if (!validImageTypes.includes(file.type)) {
        alert("không đúng định dạng");
        return;
      }

      const fileSizeMB = file.size / (1024 * 1024);
      if (fileSizeMB > 1) {
        alert("vượt quá 1MB rồi");
        return;
      }

      let reader = new FileReader();
      reader.onload = (e) => {
        setImage(e.target.result);
        setFiles(file);
      };
      reader.readAsDataURL(file);
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput((state) => ({ ...state, [name]: value }));
  };
  const getDataBrand = async () => {
    try {
      const res = await axios.get("http://localhost:3003/api/brand/get-data");
      setBrand(res.data);
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
  const getUser = async () => {
    let userData = localStorage.getItem("accountLogin");
    let userLocal = JSON.parse(userData);
    setUser(userLocal.user);
    setAccessToken(userLocal.token);
  };
  const getDataProduct = async () => {
    try {
      const res = await axios.get(`http://localhost:3003/api/product/get-data`, {
        headers: {
          Authorization: `Bearer ${accessToken}`, // Sử dụng accessToken từ state
        },
      });
      setData(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getUser(); // Chỉ cần gọi getUser ở đây
    getDataCategory();
    getDataBrand();
  }, []);

  useEffect(() => {
    if (accessToken) {
      getDataProduct(); // Chỉ gọi khi accessToken có giá trị
    }
  }, [accessToken]);
  const handleSubmit = async (e) => {
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

    if (!files) {
      toast.error("hãy thêm ảnh vào");
      flag = false;
    }

    if (!flag) {
      toast.error("Nhập thiếu dữ liệu!");
    } else {
      try {
        const url = `http://localhost:3003/api/product/create`;
        const config = {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            Accept: "application/json",
          },
        }
        const formData = new FormData();
        formData.append("name", input.name);
        formData.append("id_category", input.id_category);
        formData.append("id_brand", input.id_brand);
        formData.append("sale", input.sale);
        formData.append("price", input.price);
        formData.append("id_user", user.id);
        formData.append("company_profile", input.company_profile);
        formData.append("detail", input.detail);
        formData.append("status", input.status);
        formData.append("image", files);
        const response = await axios.post(url, formData, config);
        if (response.status === 200) {
          toast.success("Thêm mới sản phẩm thành công!");
          setInput({
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
          })
          document.getElementById("dongmodal").click();
          document.querySelector('input[type="file"]').value = null;
        }
      } catch (error) {
        console.error(error)
      }
    }
  };
  const renderData = () => {
    if (data.length > 0) {
      return data.map((value, key) => {
        // Tìm name của category và brand dựa trên id
        const categoryName = category.find(cat => cat.id === value.id_category)?.name || "Không có dữ liệu";
        const brandName = brand.find(br => br.id === value.id_brand)?.name || "Không có dữ liệu";
  
        return (
          <tr key={key}>
            <th scope="row">{key + 1}</th>
            <td>{value.name}</td>
            <td>{categoryName}</td> {/* Hiển thị name của category */}
            <td>{brandName}</td> {/* Hiển thị name của brand */}
            <td>{value.price}</td>
            <td>{value.sale}</td>
            <td>
              <button
                className={`btn ${value.status === 1 ? "btn-success" : "btn-secondary"}`}
              >
                {value.status === 1 ? "Hoạt động" : "Tạm tắt"}
              </button>
            </td>
            <td>
              <img
                src={`http://localhost:3003${value.image}`}
                alt={value.title}
                style={{ width: "100px", height: "auto" }}
              />
            </td>
            <td><button
              className="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#descriptionModal"
              onClick={() => setdetailID(value.id)}
            >
              <i className="fa-solid fa-file"></i>
            </button></td>
            <td>{value.company_profile}</td>
            <td>
              <button
                className="btn btn-warning"
                style={{ marginRight: "10px" }}
                data-bs-toggle="modal"
                data-bs-target="#updateModal"
              >
                <i className="fa-solid fa-wrench"/>
              </button>
              <button className="btn btn-danger"><i class="fa-regular fa-trash-can"/></button>
            </td>
          </tr>
        );
      });
    }
  };
  const renderDetail = () => {
    if(detailID) {
      const product = data.find((item) => item.id === detailID);
      if (product) {
        return <div className="modal-body">{product.detail}</div>
      }
    }
  }
  return (
    <div>
      <ToastContainer />
      <div className="row">
        <div className="col-10">
          
        </div>
        <div className="col-2 text-end">
          <button
            className="btn btn-primary text-end"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            <i className="fa-solid fa-folder-plus"></i> Thêm mới
          </button>
        </div>
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
                    <input type="file" onChange={handleProductInputFile} className="form-control" />
                  </div>
                </div>
                <div class="modal-footer">
                  <button
                    id="dongmodal"
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
        <div
          className="modal fade"
          id="descriptionModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Description
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              {renderDetail()}
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
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
                {renderData()}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Product;
