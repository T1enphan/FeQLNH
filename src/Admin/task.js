import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Task() {
  const [admins, setAdmins] = useState([]);
  const [data, setData] = useState([]);
  const [editId, setEditId] = useState(null);
  const [selectedAdmin, setSelectedAdmin] = useState("");
  const modalRef = useRef(null);
  const [input, setInput] = useState({
    task: "",
    status: "",
    deadline: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput((state) => ({ ...state, [name]: value }));
  };

  const resetInput = () => {
    setInput((prevInput) =>
      Object.fromEntries(
        Object.keys(prevInput).map((key) => [key, ""]) // Reset tất cả các trường về ""
      )
    );
  };

  const getDataTask = async () => {
    try {
      const res = await axios.get(
        "http://localhost:3003/api/todo-list/get-task"
      );
      setData(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const openEditModal = (item) => {
    setEditId(item.id);
    setInput({ task: item.task, status: item.status, deadline: item.deadline });
    const modal = new window.bootstrap.Modal(modalRef.current);
    modal.show();
  };

  const handleDelete = async (deleteId) => {
    console.log(deleteId);
    if (!deleteId) {
      toast.error("Task không tồn tại");
      return;
    }
    try {
      const res = await axios.delete(
        `http://localhost:3003/api/todo-list/delete/${deleteId}`
      );
      toast.success(res.data.message);
      getDataTask();
    } catch {
      toast.error(data.message);
    }
  };

  useEffect(() => {
    const fetchAdmins = async () => {
      try {
        const res = await axios.get(
          "http://localhost:3003/api/todo-list/get-data"
        );
        // Lọc bỏ tài khoản SUPER_ADMIN
        const filteredAdmins = res.data.admins.filter(
          (admin) => admin.role !== "SUPER_ADMIN"
        );
        setAdmins(filteredAdmins);
      } catch (error) {
        console.error("Failed to fetch admins", error);
      }
    };
    fetchAdmins();
    getDataTask();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let flag = true;

    if (input.task === "") {
      toast.error("Hãy nhập vào task!");
      flag = false;
    }
    if (input.status === "") {
      toast.error("Hãy chọn vào trạng thái!");
      flag = false;
    }
    if (input.deadline === "") {
      toast.error("Hãy nhập vào thời hạn!");
      flag = false;
    }

    if (!flag) {
      toast.error("Đề nghị nhập đủ các trường!");
    } else {
      try {
        const superAdmin = JSON.parse(localStorage.getItem("AdminAccount")); // Lấy thông tin SUPER_ADMIN từ localStorage
        const url = "http://localhost:3003/api/todo-list/create";
        const res = await axios.post(url, {
          superAdminId: superAdmin.admin.id, // Truyền superAdminId
          task: input.task,
          status: input.status,
          deadline: input.deadline,
          id_admin: selectedAdmin, // Truyền id của admin được chọn
        });

        if (res.status === 200) {
          getDataTask();
          toast.success(res.data.message);
          document.getElementById("closeModalButton").click();
          setInput({
            task: "",
            status: "",
            deadline: "",
          });
        }
      } catch (error) {
        console.log(error);
        toast.error("Failed to create task");
      }
    }
  };

  const handleUpdate = async () => {
    if (!editId) return;

    try {
      const res = await axios.put(
        `http://localhost:3003/api/todo-list/update/${editId}`,
        input
      );
      if (res.status === 200) {
        toast.success(res.data.message);
        getDataTask();
        setEditId(null);
        resetInput();
        const modal = window.bootstrap.Modal.getInstance(modalRef.current);
        modal.hide();
      } else {
        toast.error(res.data.error);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const changeTaskStatus = async (taskId) => {
    try {
      const response = await axios.post(
        `http://localhost:3003/api/todo-list/change-status/${taskId}`
      ); // Đường dẫn tới API

      // Kiểm tra xem API trả về thành công hay không
      if (response.status === 200) {
        toast.success(response.data.message); // Hiển thị thông báo thành công
        getDataTask();
        return response.data.todo; // Trả về dữ liệu cập nhật từ API
      }
    } catch (error) {
      // Kiểm tra lỗi nếu có
      if (error.response) {
        if (error.response.status === 404) {
          toast.error("Task not found!"); // Thông báo lỗi nếu task không tồn tại
        } else {
          toast.error("An error occurred while updating status!"); // Thông báo lỗi khác
        }
      } else {
        toast.error("Failed to connect to the server."); // Lỗi kết nối
      }
    }
  };

  const renderData = () => {
    if (data.length > 0 && admins.length >= 0) {
      return data.map((value, key) => {
        // Định nghĩa class và nội dung của status dựa vào statusMap
        const statusMap = {
          0: { class: "btn-warning", text: "chưa nhận" },
          1: { class: "btn-success", text: "Đã nhận" },
          2: { class: "btn-danger", text: "Khẩn Cấp" },
        };

        const status = statusMap[value.status] || statusMap[0];

        // Format deadline (nếu cần)
        const formattedDeadline = new Date(value.deadline).toLocaleString(
          "vi-VN",
          {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            hour12: false,
          }
        );

        return (
          <tr key={key}>
            <th scope="row">{key + 1}</th>
            <td>{value.task}</td>
            <td className="text-center">
              <button
                onClick={() => changeTaskStatus(value.id)}
                className={`btn ${status.class}`}
              >
                {status.text}
              </button>
            </td>
            <td>{formattedDeadline}</td>
            <td className="text-center">
              <button
                className="btn btn-warning"
                style={{ marginRight: "5px" }}
                onClick={() => openEditModal(value)}
              >
                Chỉnh Sửa
              </button>
              <button
                className="btn btn-danger"
                onClick={() => handleDelete(value.id)}
              >
                Xóa
              </button>
            </td>
          </tr>
        );
      });
    } else {
      return (
        <tr>
          <td colSpan="5" className="text-center">
            Không có dữ liệu
          </td>
        </tr>
      );
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="row mb-2">
        <div className="col-6"></div>
        <div className="col-6 text-right">
          <btn
            className="btn btn-primary text-center "
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            style={{ width: "111px", height: "100%" }}
          >
            <i className="fa-solid fa-pen-nib"></i> Tạo Task
          </btn>
        </div>
      </div>
      <div className="row">
        <div className="card">
          <div className="card-header bg-white">
            <b>Danh Sách Task</b>
          </div>
          <div className="card-body">
            <table class="table table-bordered">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Task</th>
                  <th scope="col">Status</th>
                  <th scope="col">Deadline</th>
                  {/* <th scope="col">Task Recipient</th> */}
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>{renderData()}</tbody>
            </table>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="exampleModal"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Tạo Task
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="modal-body">
                <div className="row-8">
                  <label>Task</label>
                  <input
                    name="task"
                    value={input.task}
                    onChange={handleChange}
                    className="form-control"
                  />
                </div>
                <div className="row-8">
                  <label>Trạng Thái</label>
                  <select
                    className="form-control"
                    value={input.status}
                    name="status"
                    onChange={handleChange}
                  >
                    <option value="">Chọn trạng thái</option>
                    <option value={0}>Chưa Nhận</option>
                    <option value={1}>Đã Nhận</option>
                    <option value={2}>Khẩn Cấp</option>
                  </select>
                </div>
                <div className="row-8">
                  <label>Thời hạn</label>
                  <input
                    name="deadline"
                    value={input.deadline}
                    onChange={handleChange}
                    type="datetime-local"
                    className="form-control"
                  />
                </div>
                <div className="row-8">
                  <label>Chọn tài khoản để giao task:</label>
                  <select
                    className="form-control"
                    value={selectedAdmin}
                    onChange={(e) => setSelectedAdmin(e.target.value)}
                  >
                    <option value="">Chọn tài khoản</option>
                    {admins.map((admin) => (
                      <option key={admin.id} value={admin.id}>
                        {admin.name} ({admin.role})
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                  id="closeModalButton"
                >
                  Close
                </button>
                <button type="submit" className="btn btn-primary">
                  Save changes
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* Modal Edit */}
      <div
        class="modal fade"
        id="editModal"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
        ref={modalRef}
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Chỉnh Sửa Task
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="row-8">
                <label>Task</label>
                <input
                  name="task"
                  value={input.task}
                  onChange={handleChange}
                  className="form-control"
                />
              </div>
              <div className="row-8">
                <label>Trạng Thái</label>
                <select
                  className="form-control"
                  value={input.status}
                  name="status"
                  onChange={handleChange}
                >
                  <option value="">Chọn trạng thái</option>
                  <option value={0}>Chưa Nhận</option>
                  <option value={1}>Đã Nhận</option>
                  <option value={2}>Khẩn Cấp</option>
                </select>
              </div>
              <div className="row-8">
                <label>Thời hạn</label>
                <input
                  name="deadline"
                  value={input.deadline}
                  onChange={handleChange}
                  type="datetime-local"
                  className="form-control"
                />
              </div>
              <div className="row-8">
                <label>Chọn tài khoản để giao task:</label>
                <select
                  className="form-control"
                  value={selectedAdmin}
                  onChange={(e) => setSelectedAdmin(e.target.value)}
                >
                  <option value="">Chọn tài khoản</option>
                  {admins.map((admin) => (
                    <option key={admin.id} value={admin.id}>
                      {admin.name} ({admin.role})
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                class="btn btn-primary"
                onClick={handleUpdate}
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Task;
