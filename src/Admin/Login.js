import axios from "axios";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function LoginAdmin() {
  const [error, setErrors] = useState({});
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const styles = {
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "96vh",
    },
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput((state) => ({ ...state, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let errorSubmit = {};
    let flag = true;
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
    if (!flag) {
      setErrors(errorSubmit);
    } else {
      toast.success("OKE");
    }
  };

  return (
    <>
      <ToastContainer />
      <div style={styles.container}>
        <form className="form" onSubmit={handleSubmit}>
          <p className="title">Login</p>
          <p className="message">Signup now and get full access to our app.</p>
          <label>
            <input
              type="email"
              name="email"
              value={input.email}
              onChange={handleChange}
              className="input"
            />
            <span>Email</span>
          </label>
          <label>
            <input
              type="password"
              name="password"
              value={input.password}
              onChange={handleChange}
              className="input"
            />
            <span>Password</span>
          </label>
          <button className="submit">Submit</button>
          <p className="signin">
            Already have an account? <a href="#">Signin</a>
          </p>
        </form>
      </div>
    </>
  );
}
export default LoginAdmin;
