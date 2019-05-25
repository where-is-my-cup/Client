import React, { Component } from "react";
import { Input, Button, Card, Row, Col } from "reactstrap";
import MenuTab from "./menuList/MenuTab";
import { getMenuList } from "./getServerDate";
import "../../../styles/menuListView.css";
import swal from "sweetalert";

export default class IndexView extends Component {
  constructor(props) {
    super(props);
    this.Timeout = undefined;
    this.state = {
      userId: undefined,
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
    if (this.state.storeId === undefined) {
      swal({
        title: "매장을 선택하지 않으셨습니다.",
        text: "매장 선택화면으로 이동하시겠습니까?",
        icon: "warning",
        buttons: true,
        dangerMode: false
      }).then(willDelete => {
        if (willDelete) {
          this.props.history.push({
            pathname: "/selectstore",
            userId: this.state.userId
          });
          return;
        }
      });
    } else {
      var menuInfo = sendData;
      menuInfo.price = sendData.price;
      menuInfo.count = sendData.count;
      this.props.history.push({
        pathname: "/menuDetail",
        state: menuInfo,
        storeId: this.state.storeId,
        userId: this.state.userId
      });
    }
  };
  _clickOrderPocket = () => {
    this.props.history.push({
      pathname: "/menuOrderList",
      storeId: this.state.storeId,
      userId: this.state.userId,
      nickname: this.props.location.nickname
    });
  };
  componentDidMount = async () => {
    var nickname = this.props.location.nickname;
    var userId = this.props.location.userId;
    var storeId = this.props.location.storeId;
    var menuList = await getMenuList(storeId);
    var categorys = [];
    menuList.data.forEach(element => {
      if (storeId !== undefined) {
        element.category = element.category;
        element.menuname = element.menuname;
        element.imageURL = element.imageURL;
        element.description = element.description;
      }
      if (!categorys.includes(element.category))
        categorys.push(element.category);
    });

    this.setState({
      categorys: categorys,
      menus: menuList.data,
      userId: userId,
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
          <Button
            outline
            color="secondary"
            className="IndexView ButtonPocket"
            onClick={this._clickOrderPocket}
          >
            <div id="shopping" />
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
              <button
                className="selectStoreBtn"
                onClick={() => {
                  this.props.history.push({
                    pathname: "/selectstore",
                    userId: this.state.userId
                  });
                }}
              >
                설정
              </button>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}
