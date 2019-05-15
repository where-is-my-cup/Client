import React, { Component } from "react";

export default class MenuCardTable extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        {this.props.menuList.map((data, index) => (
          <div key={index}>{data.name}</div>
        ))}
      </div>
    );
  }
}
