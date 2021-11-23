import React, { Component } from "react";

export default class CarItemsHP extends Component {
  render() {
    return (
      <div>
        <section className="card-list">
          <a href="/Product" className="card">
            <div className="card-top">
              <img src="/image/Audi-A4.jpg" alt="" className="card-img" />
            </div>
            <div className="card-content">
              <h3 className="card-title">Audi a4</h3>
            </div>
          </a>
          <a href className="card">
            <div className="card-top">
              <img src="/image/audi-a6-2021.jpg" alt="" className="card-img" />
            </div>
            <div className="card-content">
              <h3 className="card-title">Audi a4</h3>
            </div>
          </a>
          <a href className="card">
            <div className="card-top">
              <img src="/image/audi-a8.jpg" alt="" className="card-img" />
            </div>
            <div className="card-content">
              <h3 className="card-title">Audi a4</h3>
            </div>
          </a>
        </section>
        <section className="card-list">
          <a href className="card">
            <div className="card-top">
              <img src="/image/Audi-A4.jpg" alt="" className="card-img" />
            </div>
            <div className="card-content">
              <h3 className="card-title">Audi a4</h3>
            </div>
          </a>
          <a href className="card">
            <div className="card-top">
              <img src="/image/Audi-A4.jpg" alt="" className="card-img" />
            </div>
            <div className="card-content">
              <h3 className="card-title">Audi a4</h3>
            </div>
          </a>
          <a href className="card">
            <div className="card-top">
              <img src="/image/Audi-A4.jpg" alt="" className="card-img" />
            </div>
            <div className="card-content">
              <h3 className="card-title">Audi a4</h3>
            </div>
          </a>
        </section>
      </div>
    );
  }
}
