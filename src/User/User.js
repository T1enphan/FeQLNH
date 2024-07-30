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
    const fetchData = () => {
      let userData = localStorage.getItem("accountLogin");
      if (userData) {
        try {
          const parsedUserData = JSON.parse(userData);

          // Kiểm tra xem parsedUserData và các thuộc tính của nó có tồn tại không
          if (parsedUserData && parsedUserData.user && parsedUserData.token) {
            console.log("User Data:", parsedUserData); // Kiểm tra dữ liệu của user
            const userAuth = parsedUserData;
            console.log("User Auth:", userAuth.user); // Kiểm tra đối tượng userAuth

            setIsLogin(true);
            setAccessToken(userAuth.token);
            setUser({
              id: userAuth.user.id || "",
              name: userAuth.user.name || "",
              email: userAuth.user.email || "",
              phone: userAuth.user.phone || "",
              avatar: userAuth.user.avatar || "",
            });
            setAvatar(userAuth.user.avatar || "");
          } else {
            throw new Error("Invalid data format");
          }
        } catch (e) {
          console.error("Error parsing JSON from localStorage", e);
          toast.error("Lỗi xác thực. Vui lòng đăng nhập lại!");
          navigate("/login");
        }
      } else {
        toast.warning("Bạn chưa đăng nhập, hãy đăng nhập!");
        navigate("/login");
      }
    };

    fetchData();
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
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((state) => ({ ...state, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

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
        const url = `http://localhost:3003/api/update/${user.id}`;
        const config = {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            Accept: "application/json",
          },
        };
        const formData = new FormData();
        formData.append("name", user.name);
        formData.append("email", user.email);
        formData.append("phone", user.phone);
        formData.append("avatar", files);
        console.log("====================================");
        console.log(files);
        console.log("====================================");
        const response = await axios.put(url, formData, config);

        // Kiểm tra phản hồi từ API
        console.log("API Response:", response);
        // Kiểm tra xem response.data và response.data.user có tồn tại không
        if (response.data) {
          toast.success("User updated successfully:");

          // Lưu lại thông tin người dùng và token sau khi cập nhật
          const updatedUser = {
            message: "Đăng nhập thành công",
            token: accessToken,
            user: response.data,
          };

          localStorage.setItem("accountLogin", JSON.stringify(updatedUser));
          setUser(response.data); // Cập nhật lại user từ response
        } else {
          toast.error("Phản hồi từ API không hợp lệ");
        }
      } catch (error) {
        console.error("Error during API call:", error);
        toast.error("Đã có xảy ra lỗi");
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
