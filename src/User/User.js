import axios from "axios";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

function User() {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(false);
  const [files, setFiles] = useState(null);
  const [avatar, setAvatar] = useState("");
  const [errors, setErrors] = useState({});
  const [accessToken, setAccessToken] = useState(null);
  const [user, setUser] = useState({
    id: "",
    name: "",
    email: "",
    phone: "",
    avatar: "",
  });
  useEffect(() => {
    let userData = localStorage.getItem("accountLogin");
    if (userData) {
      userData = JSON.parse(userData);
      console.log("User Data:", userData); // Kiểm tra dữ liệu của user
      const userAuth = userData;
      console.log("User Auth:", userAuth); // Kiểm tra đối tượng userAuth
      setIsLogin(true);
      setAccessToken(userData.token);
      setUser({
        id: userAuth.id, // Có thể là undefined
        name: userAuth.name,
        email: userAuth.email,
        phone: userAuth.phone,
        avatar: userAuth.avatar,
      });
      setAvatar(userAuth.avatar);
    } else {
      toast.warning("Bạn chưa đăng nhập, hãy đăng nhập!");
      navigate("/login");
    }
  }, [navigate]);
  const handleUserInputFile = (e) => {
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
        setAvatar(e.target.result);
        setFiles(file);
      };
      reader.readAsDataURL(file);
    }
  };

  // const checkLoginUser = () => {
  //   if (isLogin) {
  //     toast.success("Bạn đã Login");
  //     return true;
  //   } else {
  //     toast.error("Bạn hãy login trước!");
  //     navigate("/login");
  //     return false;
  //   }
  // };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((state) => ({ ...state, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // if (!checkLoginUser()) return;

    let errorSubmit = {};
    let flag = true;
    if (user.name === "") {
      errorSubmit.name = "vui lòng nhập tên!";
      toast.error("Vui lòng nhập tên");
      flag = false;
    }
    if (user.email === "") {
      errorSubmit.email = "vui lòng nhập email!";
      toast.error("Vui lòng nhập email!");
      flag = false;
    }
    if (user.phone === "") {
      errorSubmit.phone = "vui lòng nhập số điện thoại!";
      toast.error("Vui lòng nhập số điện thoại!");
      flag = false;
    }

    if (!files) {
      errorSubmit.avatar = "hãy thêm ảnh vào";
      toast.error("hãy thêm ảnh vào");
      flag = false;
    }

    if (!flag) {
      setErrors(errorSubmit);
    } else {
      setErrors({});
      try {
        let url = `http://localhost:3003/api/update/${user.id}`;
        let config = {
          header: {
            Authorization: `Bearer ${accessToken}`,
            // "Content-Type": "multipart/form-data", thêm nhiều ảnh mới dùng
            Accept: "application/json",
          },
        };
        const formData = new FormData();
        formData.append("name", user.name);
        formData.append("email", user.email);
        formData.append("phone", user.phone);
        formData.append("avatar", files);
        const response = await axios.put(url, formData, config);
        toast.success("User updated successfully:");
        localStorage.setItem("accountLogin", JSON.stringify(response.data));
      } catch (error) {
        console.error(error);
        toast.error("Đã có xảy ra");
      }
    }
  };

  return (
    <div>
      <ToastContainer />
      <div className="row">
        <div className="card">
          <div
            className="card-header bg-info text-dark"
            style={{ width: "1571px", marginLeft: "-13px" }}
          >
            <b>Chỉnh sửa người dùng</b>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="card-body">
              <label>Họ Và Tên</label>
              <input
                className="form-control"
                name="name"
                value={user.name}
                type="text"
                onChange={handleChange}
              />
              <label>Email</label>
              <input
                className="form-control"
                name="email"
                value={user.email}
                type="text"
                onChange={handleChange}
              />
              <label>Phone</label>
              <input
                className="form-control"
                name="phone"
                value={user.phone}
                type="text"
                onChange={handleChange}
              />
              <label>Avatar</label>
              <input
                type="file"
                className="form-control"
                onChange={handleUserInputFile}
              />
            </div>
            <div
              className="card-footer text-end"
              style={{
                width: "1571px",
                marginLeft: "-13px",
                boxSizing: "border-box",
              }}
            >
              <button type="submit" className="btn btn-success">
                Xác Nhận
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
export default User;
