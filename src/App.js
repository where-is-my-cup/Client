import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import MenuListView from "./pages/MenuListView";
import Test from "./pages/Test";

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={MenuListView} />
      <Route path="/about" component={Test} />
    </BrowserRouter>
  );
}

export default App;
