import React, { Component } from "react";

export default class MenuSecondary extends Component {
  render() {
    return (
      <ul className="main-info-list container p-rl-0">
        <li className="main-info-item active">
          <a href="/Product">Audi A4</a>
        </li>
        <li className="main-info-item">
          <a href="/ProductDetail">Specification</a>
        </li>
        <li className="main-info-item">
          <a href="/ImageProduct">Image</a>
        </li>
      </ul>
    );
  }
}
