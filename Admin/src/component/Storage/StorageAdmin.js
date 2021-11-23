import React, { Component } from "react";
import axios from "axios";
export default class StorageAdmin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      car: [],
      car_models: [],
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:3000/api/cars")
      .then((response) => response.data)
      .then((data) => {
        this.setState({ car: data });
      });
    axios.get("http://localhost:3000/new_test_driver").then((data) => {
      this.setState({
        car_models: data["data"]["car_models"],
      });
    });
  }

  render() {
    // console.log(this.state.car);
    return (
      <div className="content">
        <div className="heading mb-16">STORAGE MANAGER</div>
        <div className="box-content">
          <div className="sub-heading mb-16">LIST OF PRODUCTS</div>
          <div className="nav-menu-content mb-16">
            <ul className="list-menu">
              <li className="item-menu">
                <select className="filter-model mb-16">
                  {this.state.car.map((cars) => (
                    <option>{cars.name}</option>
                  ))}
                </select>
              </li>
              <li className="item-menu">
                <a href="/">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={20}
                    height={20}
                    fill="currentColor"
                    className="bi bi-trash"
                    viewBox="0 0 20 20"
                  >
                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                    <path
                      fillRule="evenodd"
                      d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                    />
                  </svg>
                  Delete
                </a>
              </li>
            </ul>
            <div className="search-box">
              <input
                type="text"
                placeholder="Search Product"
                name="search-input"
                id="search-input"
                className="search-input"
              />
              <img
                src="./image/adminListofProduct/search.png"
                alt="Search button"
                className="search-btn"
              />
            </div>
          </div>
          {/* Filter Model */}
          {/* Table Model */}
          <table className="table table-striped table-model">
            <thead>
              <tr>
                <th scope="col">
                  <input type="checkbox" name id />
                </th>
                <th scope="col">ID</th>
                <th scope="col">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={20}
                    height={20}
                    fill="currentColor"
                    className="bi bi-image-fill"
                    viewBox="0 0 20 20"
                  >
                    <path d="M.002 3a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-12a2 2 0 0 1-2-2V3zm1 9v1a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V9.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12zm5-6.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0z" />
                  </svg>
                </th>
                <th scope="col">Name</th>
                <th scope="col">Price</th>
                <th scope="col">Quantity</th>
                <th scope="col">Edit</th>
                <th scope="col">Delete</th>
              </tr>
            </thead>
            <tbody>
              {this.state.car.map((car) => (
                <tr>
                  <td>
                    <input type="checkbox" name id />
                  </td>
                  <td>{car._id}</td>
                  <td>
                    <img
                      src="./image/adminListofProduct/audi-a6-2021.jpg"
                      alt=""
                      className="car-img"
                    />
                  </td>
                  <td>{car.name}</td>
                  <td>1{car.prices}</td>
                  <td>{car.number}</td>
                  <td>
                    <button className="edit-button">
                      <img
                        src="./image/adminListofProduct/edit_pie_chart_report_48px.png"
                        alt="Edit img"
                        className="edit-img"
                      />
                    </button>
                  </td>
                  <td>
                    <button className="delete-button">
                      <img
                        src="./image/adminListofProduct/recycle_bin_48px.png"
                        alt="Delete img"
                        className="delete-img"
                      />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="modal open ">
          <div className="modal-container">
            <div className="modal-header">
              <div className="header-text">UPDATE QUANTITY</div>
            </div>
            <div className="modal-body">
              <div className="row">
                <div className="col-4">
                  <div className="row mb-32">
                    <div className="col">
                      <span className="lbl-title">Product Name:</span>
                      <span
                        className="lbl-fname"
                        value={this.state.name}
                      ></span>
                    </div>
                  </div>
                  <div className="row mb-32">
                    <div className="col">
                      <span className="lbl-title">Price:</span>
                      <span
                        className="lbl-email"
                        value={this.state.prices}
                      ></span>
                    </div>
                  </div>
                  <div className="row mb-32">
                    <div className="col">
                      <span className="lbl-title">Quantity:</span>
                      <span className="lbl-phonenumber">
                        <input
                          onChange={(event) => {
                            this.isChangeData(event);
                          }}
                          value={this.state.number}
                          type="number"
                          name
                          id
                          style={{ width: "100px" }}
                        />
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-8">
                  <img
                    src="./image/audi-a6-2021.jpg"
                    alt="Audi A6"
                    style={{ width: "560px", borderRadius: "8px" }}
                  />
                </div>
              </div>
              <div className="mt-4 mb-16 confirm">
                <div className="btn btn-danger">Return</div>
                <div className="btn btn-success">Update</div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="modal open">
  <div className="modal-container">
    <div className="modal-header">
      <div className="header-text">UPDATE QUANTITY</div>
    </div>
    <div className="modal-body">
      <div className="row">
        <div className="col-4">
          <div className="row mb-32">
            <div className="col">
              <span className="lbl-title">Product Name:</span>
              <span className="lbl-fname">Audi A6 2021</span>
            </div>
          </div>
          <div className="row mb-32">
            <div className="col">
              <span className="lbl-title">Price:</span>
              <span className="lbl-email">1.500.000.000</span>
            </div>
          </div>
          <div className="row mb-32">
            <div className="col">
              <span className="lbl-title">Quantity:</span>
              <span className="lbl-phonenumber"><input type="number" name id style={{width: '100px'}} /></span>
            </div>
          </div>
        </div>
        <div className="col-8">
          <img src="./image/audi-a6-2021.jpg" alt="Audi A6" style={{width: '560px', borderRadius: '8px'}} />
        </div>
      </div>
      <div className="mt-4 mb-16 confirm">
        <div className="btn btn-danger">Return</div>
        <div className="btn btn-success">Update</div>
      </div>
    </div>
  </div>
</div> */}
      </div>
    );
  }
}
