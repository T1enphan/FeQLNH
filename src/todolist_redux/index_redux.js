function IndexRedux() {
  return (
    <div className="row mb-2">
      <div className="col-7">
        <div className="card">
          <div className="card-header text-center bg-white">
            <b>TODO APP WITH REDUX</b>
          </div>
          <div className="card-body">
            <label>Search</label>
            <div className="row">
              <div className="col-10">
                <input className="form-control"></input>
              </div>
              <div className="col-2">
                <i class="fa-solid fa-magnifying-glass align-middle fa-lg"></i>
              </div>
            </div>
            <label>
              <b className="" style={{ fontSize: "13px" }}>
                Fillter by status
              </b>
            </label>
            <div className="row">
              <div className="col">
                <input type="checkbox" style={{ marginRight: "5px" }}></input>
                <label>All</label>
              </div>
              <div className="col">
                <input type="checkbox" style={{ marginRight: "5px" }}></input>
                <label>Completed</label>
              </div>
              <div className="col">
                <input type="checkbox" style={{ marginRight: "5px" }}></input>
                <label>Todo</label>
              </div>
            </div>
            <label>
              <b className="" style={{ fontSize: "13px" }}>
                Fillter By Priority
              </b>
            </label>
            <input className="form-control"></input>
            <hr />
            <div className="row">
              <div className="col">
                <input type="checkbox" style={{ marginRight: "10px" }} />
                <label style={{ marginRight: "500px" }}>Learn React</label>
                <button className="btn btn-danger">High</button>
              </div>
            </div>
          </div>
          <div className="card-footer">
            <div>
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  aria-label="Text input with segmented dropdown button"
                />
                <button type="button" className="btn btn-outline-secondary">
                  Action
                </button>
                <button
                  type="button"
                  className="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <span className="visually-hidden">Toggle Dropdown</span>
                </button>
                <ul className="dropdown-menu dropdown-menu-end">
                  <li>
                    <a className="dropdown-item" href="#">
                      <button className="btn btn-success">Low</button>
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      <button className="btn btn-danger">High</button>
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      <button className="btn btn-primary">Medium</button>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default IndexRedux;
