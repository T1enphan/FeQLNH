import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function Register() {
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const [files, setFiles] = useState([]);
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput((state) => ({ ...state, [name]: value }));
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
      setErrors({});
      try {
        let url = "http://localhost:3003/api/register";
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
          setInput({ email: "", name: "", phone: "", password: "" });
          setFiles([]);
          setErrors({});
          toast.success("Đăng kí thành công!");
          setTimeout(() => {
            navigate("/login");
          }, 2000);
        }
      } catch (error) {
        console.error(error);
        toast.error("Đã có lỗi xảy ra");
      }
    }
  };

  return (
    <div>
      <ToastContainer />
      <main className="d-flex w-100">
        <div className="container d-flex flex-column">
          <div className="row vh-100">
            <div className="col-sm-10 col-md-8 col-lg-6 col-xl-5 mx-auto d-table h-100">
              <div className="d-table-cell align-middle">
                <div className="text-center mt-4">
                  <h1 className="h2">Get started</h1>
                  <p className="lead">
                    Start creating the best possible user experience for you
                    customers.
                  </p>
                </div>

                <div className="card">
                  <div className="card-body">
                    <div className="m-sm-3">
                      <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                          <label className="form-label">Full name</label>
                          <input
                            className="form-control form-control-lg"
                            type="text"
                            name="name"
                            value={input.name}
                            placeholder="Enter your name"
                            onChange={handleChange}
                          />
                        </div>
                        <div className="mb-3">
                          <label className="form-label">Email</label>
                          <input
                            className="form-control form-control-lg"
                            type="email"
                            name="email"
                            value={input.email}
                            placeholder="Enter your email"
                            onChange={handleChange}
                          />
                        </div>
                        <div className="mb-3">
                          <label className="form-label">Password</label>
                          <input
                            className="form-control form-control-lg"
                            type="password"
                            name="password"
                            placeholder="Enter password"
                            value={input.password}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="mb-3">
                          <label className="form-label">Phone Number</label>
                          <input
                            className="form-control form-control-lg"
                            type="text"
                            name="phone"
                            placeholder="Phone number"
                            value={input.phone}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="mb-3">
                          <label className="form-label">Avatar</label>
                          <input
                            className="form-control form-control-lg"
                            type="file"
                            placeholder="Avatar"
                            onChange={handleUserInputAvatar}
                          />
                        </div>
                        <div className="d-grid gap-2 mt-3">
                          <button type="submit" className="btn btn-lg btn-primary">
                            Sign up
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                <div className="text-center mb-3">
                  Already have account? <a href="/login">Log In</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
export default Register;
