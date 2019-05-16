import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
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
      </BrowserRouter>
    </Container>
  );
}

export default App;
