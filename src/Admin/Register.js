import axios from "axios";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const RegisterAdmin = () => {
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    role: "",
  });
  const [error, setErrors] = useState({});

  const styles = {
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
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
    if (input.role === "") {
      errorSubmit.role = "Vui lòng nhập quyền hạn";
      toast.error("Vui lòng nhập quyền hạn");
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
          <p className="title">Register</p>
          <p className="message">Signup now and get full access to our app.</p>
          <label>
            <input
              value={input.name}
              name="name"
              onChange={handleChange}
              type="text"
              className="input"
            />
            <span>Name</span>
          </label>
          <label>
            <input
              value={input.phone}
              name="phone"
              onChange={handleChange}
              type="text"
              className="input"
            />
            <span>Phone</span>
          </label>
          <label>
            <input
              type="email"
              onChange={handleChange}
              value={input.email}
              name="email"
              className="input"
            />
            <span>Email</span>
          </label>
          <label>
            <input
              type="password"
              onChange={handleChange}
              value={input.password}
              name="password"
              className="input"
            />
            <span>Password</span>
          </label>
          <label>
            <input
              type="text"
              onChange={handleChange}
              value={input.role}
              name="role"
              className="input"
            />
            <span>Role</span>
          </label>
          <button className="submit">Submit</button>
          <p className="signin">
            Already have an account? <a href="#">Signin</a>
          </p>
        </form>
      </div>
    </>
  );
};

export default RegisterAdmin;
