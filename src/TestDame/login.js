import axios from "axios";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
function Login() {
  const navigate = useNavigate();
  const [error, setErrors] = useState({});
  const [accessToken, setAccessToken] = useState(null);
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput((state) => ({ ...state, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let errorSubmit = {};
    let flag = true;

    if (input.email === "") {
      errorSubmit.email = "Hãy nhập email!";
      toast.error("Hãy nhập email!");
      flag = false;
    }
    if (input.password === "") {
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
          email: input.email,
          password: input.password,
        });
        setAccessToken(response.data.token);
        console.log("1", accessToken);
        console.log("2", response.data.token);
        // if (response.status === 200) {
        //   navigate("/user");
        // }
      } catch (error) {
        console.log(error);
        toast.error("Đã có lỗi xảy ra!");
      }
    }
  };
  console.log("3", accessToken);
  return (
    <div>
      <ToastContainer />
      <main className="d-flex w-100">
        <div className="container d-flex flex-column">
          <div className="row vh-100">
            <div className="col-sm-10 col-md-8 col-lg-6 col-xl-5 mx-auto d-table h-100">
              <div className="d-table-cell align-middle">
                <div className="text-center mt-4">
                  <h1 className="h2">Welcome back!</h1>
                  <p className="lead">Sign in to your account to continue</p>
                </div>
                <div className="card">
                  <div className="card-body">
                    <div className="m-sm-3">
                      <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                          <label className="form-label">Email</label>
                          <input
                            className="form-control form-control-lg"
                            type="email"
                            name="email"
                            value={input.email}
                            onChange={handleChange}
                            placeholder="Enter your email"
                          />
                        </div>
                        <div className="mb-3">
                          <label className="form-label">Password</label>
                          <input
                            className="form-control form-control-lg"
                            type="password"
                            name="password"
                            value={input.password}
                            onChange={handleChange}
                            placeholder="Enter your password"
                          />
                        </div>
                        <div>
                          <div className="form-check align-items-center">
                            <input
                              id="customControlInline"
                              type="checkbox"
                              className="form-check-input"
                              defaultValue="remember-me"
                              name="remember-me"
                              defaultChecked
                            />
                            <label
                              className="form-check-label text-small"
                              htmlFor="customControlInline"
                            >
                              Remember me
                            </label>
                          </div>
                        </div>
                        <div className="d-grid gap-2 mt-3">
                          <button
                            type="submit"
                            className="btn btn-lg btn-primary"
                          >
                            Sign in
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                <div className="text-center mb-3">
                  Don't have an account? <a href="/register">Sign up</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
export default Login;
