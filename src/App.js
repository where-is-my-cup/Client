import React, { Component } from "react";
import { Route, BrowserRouter } from "react-router-dom";
import StoreView from "./pages/StoreView";
import LoginView from "./pages/LoginView";
import Test from "./pages/Test";
import SignUp from "./pages/SignUp";
import MenuListView from "./pages/MenuListView";
import MenuDetailView from "./pages/MenuDetailView";
import menuOrderList from "./pages/MenuOrderListView";
import { Container } from "reactstrap";
import "./styles/app.css";

function App() {
  return (
    <Container id="container">
      <BrowserRouter>
        <Route exact path="/" component={LoginView} />
        <Route path="/about" component={Test} />
        <Route path="/signUp" component={SignUp} />
        <Route path="/store" component={StoreView} />

        <Route path="/menuList" component={MenuListView} />
        <Route path="/menuDetail" component={MenuDetailView} />
        <Route path="/menuOrderList" component={menuOrderList} />
      </BrowserRouter>
    </Container>
  );
}

export default App;
