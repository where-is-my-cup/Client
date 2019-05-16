import React, { Component } from "react";
import { Input, Button, Card, Row, Col } from "reactstrap";
import MenuTab from "./menuList/MenuTab";
import "../../../styles/menuListView.css";

export default class IndexView extends Component {
  constructor(props) {
    super(props);
    this.Timeout = undefined;
    this.state = {
      searchKeyword: "",
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
  search = keyword => {
    if (this.Timeout !== undefined) clearTimeout(this.Timeout);
    let bindThis = this;
    this.Timeout = setTimeout(function() {
      bindThis.setState({
        searchKeyword: keyword
      });
    }, 500);
  };
  render() {
    console.log(this.state.searchKeyword);
    return (
      <div>
        <div className="IndexView-head">
          <Input
            className="IndexView InputSearch"
            type="search"
            placeholder="search placeholder"
            onChange={e => {
              this.search(e.target.value);
            }}
          />
          <Button outline color="primary" className="IndexView ButtonSearch">
            검
          </Button>
          <Button outline color="primary" className="IndexView ButtonPocket">
            장
          </Button>
        </div>

        <div className="IndexView-body">
          <MenuTab menuState={this.state} />
        </div>

        <div className="IndexView-foot">
          <Row>
            <Col sm="10">
              <Card body>매장 설정 후, 주문가능 수량이 표시됩니다.</Card>
            </Col>
            <Col>
              <Button
                outline
                color="primary"
                className="IndexView ButtonSearch"
              >
                설정
              </Button>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}
