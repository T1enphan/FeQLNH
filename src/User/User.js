import axios from "axios";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

function User() {
    const navigate = useNavigate();
    const [isLogin, setIsLogin] = useState(false);
    const [errors, setErrors] = useState({});
    const [accessToken, setAccessToken] = useState(null);
    const [user, setUser] = useState({
        id: "",
        name: "",
        email: "",
        phone: "",
    })
    useEffect(() => {
        let userData = localStorage.getItem("accountLogin");
        if (userData) {
            userData = JSON.parse(userData);
            setIsLogin(true);
            setAccessToken(userData.token);
            const userAuth = userData.user;
            setUser({
                id: userAuth.id,
                name: userAuth.name,
                email: userAuth.email,
                phone: userAuth.phone,
            })
        }
    }, [])

    const checkLoginUser = () => {
        if (isLogin) {
            toast.success("Bạn đã Login");
            return true;
        } else {
            toast.error("Bạn hãy login trước!");
            navigate("/login");
            return false
        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser((state) => ({ ...state, [name]: value }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!checkLoginUser()) return;

        let errorSubmit = {};
        let flag = true;
        if (user.name === "") {
            errorSubmit.name = "vui lòng nhập tên!";
            toast.error("Vui lòng nhập tên");
            flag = false
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
        if(!flag) {
            setErrors(errorSubmit);
        } else {
            setErrors({});
            toast.success("yasir")
        }
    }

    return (
        <div>
            <ToastContainer/>
            <div className="row">
                <div className="card">
                    <div className="card-header bg-info text-dark" style={{ width: "1140.8px", marginLeft: "-13px" }}>
                        Chỉnh sửa người dùng
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="card-body">
                            <label>Họ Và Tên</label>
                            <input className="form-control" name="name" value={user.name} type="text" onChange={handleChange} />
                            <label>Email</label>
                            <input className="form-control" name="email" value={user.email} type="text" onChange={handleChange} />
                            <label>Phone</label>
                            <input className="form-control" name="phone" value={user.phone} type="text" onChange={handleChange} />
                            <label>Avatar</label>
                            <input className="form-control" />
                        </div>
                        <div className="card-footer text-end" style={{ width: "1140.8px", marginLeft: "-13px" }}>
                            <button type="submit" className="btn btn-success">Xác Nhận</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default User;