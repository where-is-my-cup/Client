import React, { Component } from "react";
import { Input, Button } from "reactstrap";
import "../../../styles/menuListView.css";

export default class IndexView extends Component {
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
      </div>
    );
  }
}
