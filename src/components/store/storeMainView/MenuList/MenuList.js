import React, { Component } from "react";
import axios from "axios";
import { InputGroup, Input, Button } from "reactstrap";
import "../../../../styles/MenuList.css";
import swal from "sweetalert";

export default class MenuList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.selectMenu.menuname,
      price: this.props.selectMenu.price,
      count: this.props.selectMenu.count
    };
  }
  _changeSave = e => {
    let { id } = this.props.selectMenu;
    let { name, price, count } = this.state;

    swal("변경 하시겠습니까?").then(result => {
      if (result) {
        axios
          .post("http://localhost:3001/store/inventory", {
            id,
            name,
            price,
            count
          })
          .then(result => {
            if (result.data) {
              swal("성공", "적용 되었습니다.", "success");
            } else {
              swal("실패", "다시 시도해주세요.", "error");
            }
          });
      }
    });
  };

  _onChange = e => {
    if (e.target.id === "price") {
      this.setState({
        price: e.target.value
      });
    } else {
      this.setState({
        count: e.target.value
      });
    }
  };

  render() {
    const { selectMenu } = this.props;
    return (
      <div style={{ backgroundColor: "#F2F4F4" }}>
        <InputGroup className="store-input-group">
          <div id="input-image" className="input-unit">
            <img
              src={require("../../../../image/" + selectMenu.imageURL)}
              alt=""
              width={100}
              height={100}
            />
          </div>

          <div id="menuList-title" className="input-unit">
            {selectMenu.menuname}
          </div>

          <div className="input-unit">
            <div className="input-form">
              <div className="menuList-text"> 재고 수량 : </div>
              <div>
                <Input
                  id="count"
                  type="number"
                  min="1"
                  step="any"
                  placeholder={selectMenu.count}
                  className="input-number"
                  onChange={this._onChange}
                />
              </div>
            </div>
            <div className="input-form">
              <div className="menuList-text"> 현재 가격 : </div>
              <div>
                <Input
                  id="price"
                  type="number"
                  min="1"
                  step="any"
                  placeholder={selectMenu.price}
                  className="input-number"
                  onChange={this._onChange}
                />
              </div>
            </div>
          </div>

          <Button
            outline
            color="primary"
            className="menulist-save"
            onClick={this._changeSave}
          >
            설정
          </Button>
        </InputGroup>
      </div>
    );
  }
}
