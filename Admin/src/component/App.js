import React, { Component } from "react";
import "../css/App.css";

import MenuAdmin from "./Menu/MenuAdmin";
import StorageAdmin from "./Storage/StorageAdmin";
import { BrowserRouter as Router, Route } from "react-router-dom";
import FormRegisterAdmin from "./Form/FormRegisterAdmin";
import Login from "./Login/Login";
import PostManager from "./PostManager/PostManager";

class App extends Component {
  
  
  
  render() {
    return (
      <div>
        <Router>
        <MenuAdmin />
          <Route exact path="/">
          
            <StorageAdmin />
          </Route>
          <Route exact path="/Form">
         
            <FormRegisterAdmin />
          </Route>
          <Route exact path="/Post">
         
          <PostManager/>
          </Route>
          {/* <Login /> */}
        </Router>
      </div>
    );
  }
}

export default App;
