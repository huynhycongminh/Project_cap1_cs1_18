import React, { Component } from "react";

export default class Login extends Component {

  render() {
    return (
      <div className="login_main">
    <img src="./image/Login/bgLogin.jpeg" alt="" className="img_login" />
    <div id="login">
    <img src="./image/Login/user2.png" alt="" className="user_login" />
    <form action>
      <h1 className="Login_here">Login Here</h1>
      <label className="label_login">Username</label><br />
      <input type="text" className="text_login" name="username" placeholder="Enter username"     /> <br />
      <label className="label_login">Password</label><br />
      <input type="password" className="text_login" name="password" placeholder="Enter password"   /> <br />
      <input type="button" defaultValue="Login" className="submit_login"  /> <br />
    </form>
  </div>
</div> 
    )
  }
}


