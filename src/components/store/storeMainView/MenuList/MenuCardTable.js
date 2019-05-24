import React, { Component } from "react";
import axios from "axios";
import MenuTab from "./MenuTab";

export default class MenuCardTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tap: "COFFEE",
      category: [],
      data: [],
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

  _getData = () => {
    axios
      .post(
        "http://localhost:3001/store/menuList",
        {
          category: this.state.tap
        },
        { headers: { token: localStorage.token } }
      )
      .then(result => {
        var category = result.data.map(ele => {
          return ele.category;
        });
        category = [...new Set(category)];
        var coffee = result.data.filter(ele => {
          return ele.category === this.state.tap;
        });
        this.setState({
          category,
          data: result.data,
          selectData: coffee
        });
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
