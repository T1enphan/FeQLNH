import axios from "axios";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function Blog() {
    const [data, setData] = useState([]);
    const [files, setFiles] = useState([])
    const [input, setInput] = useState({
        title : "",
        description:"",
        content: ""
    })

    const fetchData = async () =>{
        try{
            const res = await axios.get("http://localhost:3003/api/blog/get-data");
            setData(res.data);
        } catch (error){
            console.error("Error fetching data:", error);
        }
    }

    useEffect(()=>{
        fetchData()
    },[])

    const renderData = () => {
        if (data.length > 0) {
          return data.map((value, key) => (
            <tr key={key}>
              <th scope="row">{key + 1}</th>
              <td>{value.title}</td>
              <td>{value.description}</td>
              <td>
                <img src={value.image} alt={value.title} style={{ width: "100px", height: "auto" }} />
              </td>
              <td>{value.content}</td>
              <td className="text-center">
                <button
                  className="btn btn-danger"
                  style={{ marginRight: "10px" }}
                  data-bs-toggle="modal"
                  data-bs-target="#deleteModal"
                >
                  Xóa
                </button>
                <button className="btn btn-warning">
                  Chỉnh sửa
                </button>
              </td>
            </tr>
          ));
        }
      };


    return (
        <div>
            <ToastContainer />
            <div className="row">
                <h3>Bài Viết & Blog</h3>
            </div>
            <div className="row">
                <div className="col-9"></div>
                <div className="col-3 text-end">
                    <button
                        className="btn btn-primary"
                        data-bs-toggle="modal"
                        data-bs-target="#staticBackdrop"
                    >
                        Thêm mới
                    </button>
                </div>
                {/* modal create */}
                <div
                    className="modal fade"
                    id="staticBackdrop"
                    data-bs-backdrop="static"
                    data-bs-keyboard="false"
                    tabIndex="-1"
                    aria-labelledby="staticBackdropLabel"
                    aria-hidden="true"
                >
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header bg-primary">
                                <h5 className="modal-title" id="staticBackdropLabel">
                                    Thêm mới Bài Viết
                                </h5>
                                <button
                                    type="button"
                                    className="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                ></button>
                            </div>
                            <div className="modal-body">
                                <form>
                                    <label className="text-center">Title</label>
                                    <input
                                        className="form-control"
                                        name="title"
                                        type="text"
                                    />
                                    <label className="text-center">Description</label>
                                    <input
                                        className="form-control"
                                        name="description"
                                        type="text"
                                    />
                                    <label className="text-center">content</label>
                                    <input
                                        className="form-control"
                                        name="content"
                                    />
                                    <label className="text-center">Password</label>
                                    <input
                                        className="form-control"
                                        name="password"
                                        type="password"
                                        placeholder="Nhập mật khẩu"
                                    />
                                    <label className="text-center">Image</label>
                                    <input
                                        multiple
                                        className="form-control"
                                        type="file"
                                    />
                                    <div className="modal-footer">
                                        <button
                                            type="button"
                                            className="btn btn-secondary"
                                            data-bs-dismiss="modal"
                                            id="closeModalButton"
                                        >
                                            Đóng
                                        </button>
                                        <button type="submit" className="btn btn-primary">
                                            Thêm mới
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                {/* delete modal */}
                <div
                    className="modal fade"
                    id="deleteModal"
                    tabIndex="-1"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                >
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">
                                    Lưu ý
                                </h5>
                                <button
                                    type="button"
                                    className="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                ></button>
                            </div>
                            <div className="modal-body">
                                Bạn có muốn xóa người dùng này không ?
                            </div>
                            <div className="modal-footer">
                                <button
                                    type="button"
                                    className="btn btn-secondary"
                                    data-bs-dismiss="modal"
                                    id="closeModalButtonDel"
                                >
                                    Đóng
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-danger"
                                >
                                    Xóa
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row mt-2">
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th scope="col">STT</th>
                            <th scope="col">Title</th>
                            <th scope="col">Description</th>
                            <th scope="col">Image</th>
                            <th scope="col">Content</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {renderData()}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default Blog;