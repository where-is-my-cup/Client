import React, { Component } from "react";
import { Route, BrowserRouter } from "react-router-dom";
import MenuListView from "./pages/MenuListView";
import StoreMainView from "./components/store/storeMainView/Main";
import Test from "./pages/Test";

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={MenuListView} />
      <Route path="/about" component={Test} />
      <Route path="/store" component={StoreMainView} />
    </BrowserRouter>
  );
}

export default App;
