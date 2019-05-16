import React, { Component } from "react";
import { Route, BrowserRouter } from "react-router-dom";
import MenuListView from "./pages/MenuListView";
import StoreMainView from "./components/store/storeMainView/Main";
import LoginView from "./pages/LoginView";
import Test from "./pages/Test";
import SignUp from "./pages/SignUp";
import { Container } from "reactstrap";
import "./styles/app.css";

function App() {
  return (
    <Container id="container">
      <BrowserRouter>
        <Route exact path="/" component={LoginView} />
        <Route path="/about" component={Test} />
        <Route path="/signUp" component={SignUp} />
        <Route path="/store" component={StoreMainView} />   
      </BrowserRouter>
    </Container>
  );
}

export default App;
