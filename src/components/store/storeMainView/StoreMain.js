import React from "react";
import Clock from "./Clock";

export class StoreMain extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="clock-form">
        <Clock />
      </div>
    );
  }
}

export default StoreMain;
