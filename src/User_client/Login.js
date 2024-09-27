import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function AccountClient() {
  const navigate = useNavigate();
  const [isLogin, setCheckLogin] = useState(false);
  const [errors, setErrors] = useState({});
  const [files, setFiles] = useState([]);
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    address: "",
  });
  const [inputLogin, setInputLogin] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput((state) => ({ ...state, [name]: value }));
  };

  const handleChangeLogin = (e) => {
    const { name, value } = e.target;
    setInputLogin((state) => ({ ...state, [name]: value }));
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

  const handleSubmitLogin = async (e) => {
    e.preventDefault();
    let errorSubmit = {};
    let flag = true;

    if (inputLogin.email === "") {
      errorSubmit.email = "Hãy nhập email!";
      toast.error("Hãy nhập email!");
      flag = false;
    }
    if (inputLogin.password === "") {
      errorSubmit.password = "Hãy nhập password!";
      toast.error("Hãy nhập password!");
      flag = false;
    }

    if (!flag) {
      setErrors(errorSubmit);
    } else {
      setErrors({});
      try {
        const url = "http://localhost:3003/api/login";
        const response = await axios.post(url, {
          email: inputLogin.email,
          password: inputLogin.password,
        });
        if (response.status === 200) {
          localStorage.setItem("UserAccount", JSON.stringify(response.data));
          navigate("/client/home"); // Chuyển hướng tới trang chính sau khi đăng nhập thành công
        }
      } catch (error) {
        console.log(error);
        toast.error("Đã có lỗi xảy ra!");
      }
    }
  };

  const handleSubmitRegister = async (e) => {
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

    if (input.address === "") {
      errorSubmit.address = "Vui lòng nhập địa chỉ";
      toast.error("Vui lòng nhập địa chỉ");
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
        formData.append("address", input.address);
        files.forEach((file) => {
          formData.append("avatar", file); // Sử dụng "avatar" thay vì "file[index]"
        });
        const response = await axios.post(url, formData, config);
        if (response.status === 200) {
          setInput({
            email: "",
            name: "",
            phone: "",
            password: "",
            address: "",
          });
          document.querySelector('input[type="file"]').value = null; // reset form file
          setFiles([]);
          setErrors({});
          e.target.value = null;
          toast.success("Đăng kí thành công!");
          // setTimeout(() => {
          //   navigate("/login");
          // }, 2000);
        }
      } catch (error) {
        console.error(error);
        toast.error("Đã có lỗi xảy ra");
      }
    }
  };
  return (
    <>
      <ToastContainer />
      <section className="myaccount-section">
        <div className="auto-container">
          <div className="row clearfix">
            {/* Login */}
            <div className="col-lg-6 col-md-12 col-sm-12 inner-column">
              <div className="inner-box login-inner">
                <div className="upper-inner">
                  <h3>Log in</h3>
                  <p>Log in to access all your resources</p>
                </div>
                <form
                  action="my-account.html"
                  method="post"
                  className="default-form"
                  onSubmit={handleSubmitLogin}
                >
                  <div className="form-group">
                    <label>Email address</label>
                    <input
                      type="text"
                      name="email"
                      value={inputLogin.email}
                      onChange={handleChangeLogin}
                    />
                  </div>
                  <div className="form-group">
                    <label>Password</label>
                    <input
                      type="password"
                      name="password"
                      value={inputLogin.password}
                      onChange={handleChangeLogin}
                    />
                  </div>
                  <div className="form-group">
                    <div className="custom-controls-stacked">
                      <label className="custom-control material-checkbox">
                        <input
                          type="checkbox"
                          className="material-control-input"
                        />
                        <span className="material-control-indicator" />
                        <span className="description">Remember me</span>
                      </label>
                    </div>
                    <a href="my-account.html" className="recover-password">
                      Lost your password?
                    </a>
                  </div>
                  <div className="form-group">
                    <button type="submit" className="theme-btn-two">
                      Log In
                      <i className="flaticon-right-1" />
                    </button>
                  </div>
                </form>
                <div className="lower-inner centred">
                  <span>or</span>
                  <ul className="social-links clearfix">
                    <li>
                      <a href="my-account.html">
                        <i className="fab fa-facebook-f" />
                        Facebook
                      </a>
                    </li>
                    <li>
                      <a href="my-account.html">
                        <i className="fab fa-google-plus-g" />
                        Google
                      </a>
                    </li>
                  </ul>
                  <p>
                    Don't Have an Account?{" "}
                    <a href="my-account.html">Sign up Now</a>
                  </p>
                </div>
              </div>
            </div>
            {/* Register */}
            <div className="col-lg-6 col-md-12 col-sm-12 inner-column">
              <div className="inner-box signup-inner">
                <div className="upper-inner">
                  <h3>Create An Account</h3>
                  <p>Log in to access all your resources</p>
                </div>
                <form
                  action="my-account.html"
                  method="post"
                  className="default-form"
                  onSubmit={handleSubmitRegister}
                >
                  <div className="form-group">
                    <label>Your name</label>
                    <input
                      type="text"
                      onChange={handleChange}
                      value={input.name}
                      name="name"
                    />
                  </div>
                  <div className="form-group">
                    <label>Email address</label>
                    <input
                      type="email"
                      value={input.email}
                      onChange={handleChange}
                      name="email"
                    />
                  </div>
                  <div className="form-group">
                    <label>Password</label>
                    <input
                      type="password"
                      name="password"
                      value={input.password}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label>Phone</label>
                    <input
                      type="text"
                      name="phone"
                      value={input.phone}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label>Address</label>
                    <input
                      type="text"
                      name="address"
                      value={input.address}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label>Avatar</label>
                    <input
                      className="form-control"
                      type="file"
                      onChange={handleUserInputAvatar}
                    />
                  </div>
                  <div className="form-group">
                    <div className="custom-controls-stacked">
                      <label className="custom-control material-checkbox">
                        <input
                          type="checkbox"
                          className="material-control-input"
                        />
                        <span className="material-control-indicator" />
                        <span className="description">
                          I agree to terms &amp; Policy.
                        </span>
                      </label>
                    </div>
                  </div>
                  <div className="form-group">
                    <button type="submit" className="theme-btn-two">
                      Sign Up
                      <i className="flaticon-right-1" />
                    </button>
                  </div>
                </form>
                <div className="lower-inner centred">
                  <span>or</span>
                  <ul className="social-links clearfix">
                    <li>
                      <a href="my-account.html">
                        <i className="fab fa-facebook-f" />
                        Facebook
                      </a>
                    </li>
                    <li>
                      <a href="my-account.html">
                        <i className="fab fa-google-plus-g" />
                        Google
                      </a>
                    </li>
                  </ul>
                  <p>
                    Already have an account?{" "}
                    <a href="my-account.html">Log In Now</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default AccountClient;
