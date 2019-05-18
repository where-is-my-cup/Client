import React, { Component } from "react";
import MenuCard from "../user/menuListView/menuList/MenuCard";

export default class MenuCardTable extends Component {
  render() {
    return (
      <div>
        {this.props.menuList.map((data, index) => (
          <div
            key={index}
            style={{
              marginTop: "5px",
              marginLeft: "10px",
              marginRight: "10px"
            }}
          >
            <div
              onClick={() => {
                this.props.selectMenu(data);
              }}
            >
              <MenuCard menu={data} />
            </div>
          </div>
        ))}
      </div>
    );
  }
}
