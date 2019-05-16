import React, { Component } from "react";
import { Input, Button } from "reactstrap";
import MenuTab from "./MenuTab";
import "../../../styles/menuListView.css";

export default class IndexView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categorys: ["음료", "디저트"],
      menus: [
        {
          name: "아메리카노",
          count: 3,
          category: "음료",
          price: "4,100",
          imgPath: "img_1.png"
        },
        {
          name: "카페라떼",
          count: 5,
          category: "음료",
          price: "4,800",
          imgPath: "img_2.png"
        },
        {
          name: "초콜릿 케익",
          count: 2,
          category: "디저트",
          price: "6,100",
          imgPath: "img_3.png"
        }
      ]
    };
  }
  render() {
    return (
      <div>
        <div className="IndexView-head">
          <Input
            className="IndexView InputSearch"
            type="search"
            placeholder="search placeholder"
          />
          <Button outline color="primary" className="IndexView ButtonSearch">
            검
          </Button>
          <Button outline color="primary" className="IndexView ButtonPocket">
            장
          </Button>
        </div>
        <div>
          <MenuTab menuState={this.state} />
        </div>
      </div>
    );
  }
}
