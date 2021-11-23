import React, { Component } from "react";
import axios from "axios"
export default class FormRegisterAdmin extends Component {

  constructor(props) {
    super(props);
    this.state={
      info:[]
    }
  }
  componentDidMount(){
    axios.get("http://localhost:3000/get_data")
    .then(response => response.data)
      .then((data) => {
        this.setState({info:data})
      })
  }

  render() {
    console.log(this.state.info);
    return (
      <div className="content">
        <div className="heading mb-16">REGISTER TEST DRIVE</div>
        <div className="box-content">
          <div className="sub-heading mb-16">LIST REGISTER TEST DRIVE</div>
          <div className="nav-menu-content mb-16">
            <ul className="list-menu">
              <li className="item-menu">
                {/* Filter Model */}
                <select className="filter-model mb-16">
                  <option value="All">All</option>
                  <option value="Sedan">Accept</option>
                  <option value="Suv">Unacceptable</option>
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
                placeholder="Search Name Customer"
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
          <p className="user-manual">
            !Double click to view detail information{" "}
          </p>
          {/* Table Model */}
          <table className="table table-striped table-model">
            <thead>
              <tr>
                <th scope="col">
                  <input type="checkbox" name id />
                </th>
                <th scope="col">ID</th>
                <th scope="col">Name</th>
                <th scope="col">Phone</th>
                <th scope="col">Email</th>
                <th scope="col">Address</th>
                <th scope="col">Model</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
              {
                this.state.info.map((info) => (
                <tr>
                <td>
                  <input type="checkbox" name id />
                </td>
                <td>1</td>
                <td>{info.customer.name}</td>
                <td>{info.customer.phoneNumber}</td>
                <td>{info.customer.email}</td>
                <td>{info.customer.address}</td>
                <td>{info.car.name}</td>
                <td>
                  <i className="fa fa-check-circle" />
                </td>
              </tr>
                ))
              }
              
            </tbody>
          </table>
        </div>
        {/* When user double-click inline customer add class name 'open' to open modal CUSTOMER DETAIL */}
        <div className="modal">
          <div className="modal-container">
            <div className="modal-close">
              <i className="fa fa-close" />
            </div>
            <div className="modal-header">
              <div className="header-text">CUSTOMER INFORMATION</div>
            </div>
            <div className="modal-body">
              <div className="row mb-32">
                <div className="col">
                  <span className="lbl-title">Full Name:</span>
                  <span className="lbl-fname">Huynh Y Cong Minh</span>
                </div>
              </div>
              <div className="row mb-32">
                <div className="col">
                  <span className="lbl-title">Email:</span>
                  <span className="lbl-email">huynhycongminh@gmail.com</span>
                </div>
              </div>
              <div className="row mb-32">
                <div className="col">
                  <span className="lbl-title">Phone Number:</span>
                  <span className="lbl-phonenumber">0905001001</span>
                </div>
              </div>
              <div className="row mb-32">
                <div className="col">
                  <span className="lbl-title">Address:</span>
                  <span className="lbl-address">Thanh Khe - Da Nang</span>
                </div>
              </div>
              <div className="row mb-32">
                <div className="col">
                  <span className="lbl-title">Vehicle Model:</span>
                  <span className="lbl-vehiclemodel">Sedan</span>
                </div>
                <div className="col">
                  <span className="lbl-title">Vehicle Type:</span>
                  <span className="lbl-vehicletype">Audi A6</span>
                </div>
              </div>
              <div className="row mb-40">
                <div className="col">
                  <span className="lbl-title">Note:</span>
                  <span className="lbl-note">
                    Grammarly now organizes your writing feedback by theme, so
                    you can see how each change will help your readers better
                    understand your message.
                  </span>
                </div>
              </div>
              <div className="mb-32 confirm">
                <div className="btn btn-success">Accept</div>
                <div className="btn btn-danger">Unacceptable</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
