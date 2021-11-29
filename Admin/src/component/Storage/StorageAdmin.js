import React, { Component } from "react";
import axios from "axios";
export default class StorageAdmin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      car: [],
      car_models: [],
      modalStatus: false,
      edit_car: null,
      name: "",
      number: null,
      prices: null,
      _id: null,
      ids: [],
      checked: false,
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

  showModal = () => {
    // debugger
    const { name, number, prices } = this.state;
    if (this.state.modalStatus === true) {
      return (
        <form onSubmit={this.updateCar} method="PUT">
          <div className="modal open ">
            <div className="modal-container">
              <div className="modal-header">
                <div className="header-text">UPDATE QUANTITY</div>
              </div>
              <div className="modal-body">
                <div className="row mb-32">
                  <div className="col">
                    <span className="lbl-title">Product Name:</span>
                    <span className="lbl-fname">
                      <input
                        onChange={(event) => {
                          this.isChangeData(event);
                        }}
                        value={name}
                        type="text"
                        name="name"
                        style={{ width: "100px" }}
                      />
                    </span>
                  </div>
                </div>
                <div className="row mb-32">
                  <div className="col">
                    <span className="lbl-title">Price:</span>
                    <span className="lbl-email">
                      <input
                        onChange={(event) => {
                          this.isChangeData(event);
                        }}
                        value={prices}
                        type="text"
                        name="prices"
                        style={{ width: "100px" }}
                      />
                    </span>
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
                        value={number}
                        type="number"
                        name="number"
                        style={{ width: "100px" }}
                      />
                    </span>
                  </div>
                </div>

                <div className="mt-4 mb-16 confirm">
                  <button className="btn btn-danger">Return</button>
                  <button className="btn btn-success">Update</button>
                </div>
              </div>
            </div>
          </div>
        </form>
      );
    } else {
      return "";
    }
  };

  numberFormat(a) {
    var nf = new Intl.NumberFormat();
    return nf.format(a);
  }

  isChangeData = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({ [name]: value });
  };

  changeModalStatus = (event) => {
    const id = event.target.value;
    axios
      .get("http://localhost:3000/api/edit_car", {
        params: { _id: parseInt(id) },
      })
      .then((data) => {
        this.setState({
          name: data.data.name,
          number: data.data.number,
          prices: data.data.prices,
          _id: data.data._id,
          modalStatus: !this.state.modalStatus,
        });
      });
  };

  updateCar = () => {
    const new_car = {
      name: this.state.name,
      prices: this.state.prices,
      number: this.state.number,
    };

    axios
      .put(`http://localhost:3000/api/update_car/${this.state._id}`, new_car)
      .then((data) => {
        console.log("Update success");
      });
  };

  createIds = (event) => {
    debugger;
    const checked = event.target.checked;
    if (checked) {
      const id = parseInt(event.target.value);
      this.setState({
        ids: [...this.state.ids, id],
      });
    } else {
      this.setState({
        ids: this.state.ids.filter((id) => id !== parseInt(event.target.value)),
      });
    }
  };

  multiDeleteCar = () => {
    axios
      .delete(`http://localhost:3000/api/multi_delete_car`, {
        params: { ids: this.state.ids },
      })
      .then(() => {
        this.setState({
          ids: [],
        });
        window.location.reload(false);
      });
  };

  deleteCar = (event) => {
    axios
      .delete(`http://localhost:3000/api/delete_car/${event.target.value}`)
      .then(() => {
        console.log("Delete success");
        window.location.reload(false);
      });
  };

  checkedAll = () => {
    this.setState({
      checked: !this.state.checked,
    });
  };
  render() {
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
                <button className="btn btn-light" onClick={this.multiDeleteCar}>
                  Delete All
                  <i class="fa fa-trash pl-1"></i>
                </button>
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
                  <input type="checkbox" onClick={this.checkedAll} />
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
                    <input
                      type="checkbox"
                      value={car._id}
                      onClick={this.createIds}
                      checked={this.state.checked}
                    />
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
                  <td>{this.numberFormat(car.prices)} VNĐ</td>
                  <td>{car.number}</td>
                  <td>
                    <button
                      value={car._id}
                      className="btn btn-primary edit-button"
                      onClick={(event) => this.changeModalStatus(event)}
                    >
                      <i class="fa fa-edit"></i>
                    </button>
                  </td>
                  <td>
                    <button
                      className="btn btn-danger delete-button"
                      value={car._id}
                      onClick={(event) => this.deleteCar(event)}
                    >
                      <i class="fa fa-remove"></i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {this.showModal()}
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
