import React, { Component } from "react";
import { Input, Button, Card, Row, Col } from "reactstrap";
import MenuTab from "./menuList/MenuTab";
import { getMenuList } from "./getServerDate";
import "../../../styles/menuListView.css";

export default class IndexView extends Component {
  constructor(props) {
    super(props);
    this.Timeout = undefined;
    this.state = {
      storeId: undefined,
      searchKeyword: "",
      categorys: [],
      menus: []
    };
  }
  _search = keyword => {
    if (this.Timeout !== undefined) clearTimeout(this.Timeout);
    let bindThis = this;
    this.Timeout = setTimeout(function() {
      bindThis.setState({
        searchKeyword: keyword
      });
    }, 500);
  };

  _selectMenu = sendData => {
    if (sendData.menus === undefined) {
      alert("매장을 선택하지 않으셨습니다. 매장을 머넞 선택해주세요.");
      this.props.history.push({
        pathname: "/selectstore"
      });
      return;
    }
    var menuInfo = sendData.menus[0];
    menuInfo.price = sendData.price;
    menuInfo.count = sendData.count;
    this.props.history.push({
      pathname: "/menuDetail",
      state: menuInfo,
      storeId: this.state.storeId
    });
  };
  _clickOrderPocket = () => {
    this.props.history.push({
      pathname: "/menuOrderList",
      storeId: this.state.storeId
    });
  };
  componentDidMount = async () => {
    var storeId = this.props.location.storeId;
    var menuList = await getMenuList(storeId);
    var categorys = [];

    menuList.data.forEach(element => {
      if (storeId !== undefined) {
        element.category = element.menus[0].category;
        element.menuname = element.menus[0].menuname;
        element.imageURL = element.menus[0].imageURL;
        element.description = element.menus[0].description;
      }
      if (!categorys.includes(element.category))
        categorys.push(element.category);
    });

    this.setState({
      categorys: categorys,
      menus: menuList.data,
      storeId: storeId
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
              this._search(e.target.value);
            }}
          />
          <Button outline color="primary" className="IndexView ButtonSearch">
            검
          </Button>
          <Button
            outline
            color="primary"
            className="IndexView ButtonPocket"
            onClick={this._clickOrderPocket}
          >
            장
          </Button>
        </div>
        <div className="IndexView-body">
          <MenuTab menuState={this.state} selectMenu={this._selectMenu} />
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
                onClick={() => {
                  this.props.history.push({
                    pathname: "/selectstore"
                  });
                }}
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
