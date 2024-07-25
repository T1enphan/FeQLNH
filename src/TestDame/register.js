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
          toast.success("Đăng kí thành công!");
          setInput({ email: "", name: "", phone: "", password: "" });
          setFiles([]);
          setErrors({});
          navigate("/login");
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
      <main class="d-flex w-100">
        <div class="container d-flex flex-column">
          <div class="row vh-100">
            <div class="col-sm-10 col-md-8 col-lg-6 col-xl-5 mx-auto d-table h-100">
              <div class="d-table-cell align-middle">
                <div class="text-center mt-4">
                  <h1 class="h2">Get started</h1>
                  <p class="lead">
                    Start creating the best possible user experience for you
                    customers.
                  </p>
                </div>

                <div class="card">
                  <div class="card-body">
                    <div class="m-sm-3">
                      <form onSubmit={handleSubmit}>
                        <div class="mb-3">
                          <label class="form-label">Full name</label>
                          <input
                            class="form-control form-control-lg"
                            type="text"
                            name="name"
                            value={input.name}
                            placeholder="Enter your name"
                            onChange={handleChange}
                          />
                        </div>
                        <div class="mb-3">
                          <label class="form-label">Email</label>
                          <input
                            class="form-control form-control-lg"
                            type="email"
                            name="email"
                            value={input.email}
                            placeholder="Enter your email"
                            onChange={handleChange}
                          />
                        </div>
                        <div class="mb-3">
                          <label class="form-label">Password</label>
                          <input
                            class="form-control form-control-lg"
                            type="password"
                            name="password"
                            placeholder="Enter password"
                            value={input.password}
                            onChange={handleChange}
                          />
                        </div>
                        <div class="mb-3">
                          <label class="form-label">Phone Number</label>
                          <input
                            class="form-control form-control-lg"
                            type="text"
                            name="phone"
                            placeholder="Phone number"
                            value={input.phone}
                            onChange={handleChange}
                          />
                        </div>
                        <div class="mb-3">
                          <label class="form-label">Avatar</label>
                          <input
                            multiple
                            class="form-control form-control-lg"
                            type="file"
                            placeholder="Avatar"
                            onChange={handleUserInputAvatar}
                          />
                        </div>
                        <div class="d-grid gap-2 mt-3">
                          <button type="submit" class="btn btn-lg btn-primary">
                            Sign up
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                <div class="text-center mb-3">
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
