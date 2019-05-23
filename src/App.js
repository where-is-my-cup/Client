import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import StoreView from "./pages/StoreView";
import LoginView from "./pages/LoginView";
import SignUp from "./pages/SignUp";
import MenuListView from "./pages/MenuListView";
import MenuDetailView from "./pages/MenuDetailView";
import MenuOrderList from "./pages/MenuOrderListView";
import SelectStore from "./pages/SelectStoreView";
import { Container } from "reactstrap";
import waitingView from "./components/user/waitingView/IndexView";
import "./styles/app.css";

function App() {
  return (
    <Container id="container">
      <BrowserRouter>
        <Route exact path="/" component={LoginView} />
        <Route path="/signUp" component={SignUp} />
        <Route path="/store" component={StoreView} />

        <Route path="/menuList" component={MenuListView} />
        <Route path="/menuDetail" component={MenuDetailView} />
        <Route path="/menuOrderList" component={MenuOrderList} />
        <Route path="/selectStore" component={SelectStore} />
        <Route path="/waitingView" component={waitingView} />
      </BrowserRouter>
    </Container>
  );
}

export default App;
