import React, { Component } from "react";
import MenuCard from "./MenuCard";

export default class MenuCardTable extends Component {
  render() {
    return (
      <div>
        {this.props.menuList.map((data, index) => (
          <div key={index}>
            <MenuCard menu={data} />
          </div>
        ))}
      </div>
    );
  }
}
