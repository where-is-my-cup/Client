import React, { Component } from "react";
import { Input, Button, Card, Row, Col } from "reactstrap";
import MenuTab from "./menuList/MenuTab";
import { getMenuList, getCategorys } from "./getServerDate";
import "../../../styles/menuListView.css";

export default class IndexView extends Component {
  constructor(props) {
    super(props);
    this.Timeout = undefined;
    this.state = {
      searchKeyword: "",
      categorys: [],
      menus: []
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
  componentDidMount = async () => {
    var menuList = await getMenuList();
    var categorys = await getCategorys();
    this.setState({
      categorys: categorys,
      menus: menuList
    });
  };
  render() {
    return (
      <div>
        <div className="IndexView-head">
          <Input
            type="search"
            placeholder="메뉴를 입력하세요."
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
