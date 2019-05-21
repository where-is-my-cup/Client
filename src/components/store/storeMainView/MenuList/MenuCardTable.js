import React, { Component } from "react";
import axios from "axios";
import MenuTab from "./MenuTab";
import MenuList from "./MenuList";
import { Input, Button, Card, Row, Col } from "reactstrap";

export default class MenuCardTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tap: "카페인",
      category: [],
      selectData: []
    };
  }

  _selectTap = tapName => {
    let tap = tapName || this.state.tap;
    var selected = this.state.data.filter(element => {
      return element.category === tap;
    });

    this.setState({
      tap: tap,
      selectData: selected
    });
  };

  _getCategory = () => {
    var obj = {};
    this.state.data.forEach(element => {
      obj[element.category] = element.category;
    });
    obj = Object.keys(obj);
    this.setState({
      category: obj
    });
  };

  _getData = () => {
    axios
      .post("http://localhost:3001/store/menuList", {
        category: this.state.tap
      })
      .then(result => {
        var menus = [];
        result.data.forEach(menu_store => {
          let count = menu_store.count;
          let price = menu_store.price;
          let id = menu_store.id;
          menu_store.menus.forEach(menu => {
            menus.push({
              id: id,
              count: count,
              price: price,
              menuname: menu.menuname,
              category: menu.category,
              image: menu.imageURL
            });
          });
        });
        this.setState({
          data: menus
        });

        this._selectTap();
        this._getCategory();
      });
  };

  componentDidMount = () => {
    this._getData();
  };

  render() {
    return (
      <div>
        <MenuTab
          tapList={this.state.category}
          menus={this.state.selectData}
          clickTap={this._selectTap}
          stateHandler={this._stateHandler}
        />
      </div>
    );
  }
}
