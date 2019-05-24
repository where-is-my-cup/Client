import React from "react";
import Clock from "./Clock";
import "../../../styles/storeMain.css";

export class StoreMain extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <div className="back-image" />
        <div className="clock-form">
          <Clock />
          <h1 id="admin-title">WELCOME TO ADMIN</h1>
        </div>
      </div>
    );
  }
}

export default StoreMain;
