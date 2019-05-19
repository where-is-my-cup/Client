import React, { Component } from "react";
import { Row, Col, Button } from "reactstrap";
import MenuCardTable from "../../common/MenuCardTable";
import EmptyOrderList from "./EmptyOrderList";

export default class IndexView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuList: [{ count: 0, kind: "1", selectMenu: {}, size: 1 }]
    };
  }
  componentDidMount = () => {
    var menuList = JSON.parse(localStorage.getItem("orderList"));
    this.setState({
      menuList: menuList
    });
  };
  _changeOrderList = index => {
    var menuList = [...this.state.menuList];
    menuList.splice(index, 1);
    localStorage.setItem("orderList", JSON.stringify(menuList));
    this.setState({
      menuList: menuList
    });
  };
  _backmenuListView = () => {
    this.props.history.push("./menulist");
  };
  render() {
    return (
      <div className="MenuDetail">
        <div className="MenuDetail-head">장바구니</div>
        {this.state.menuList.length === 0 ? (
          <EmptyOrderList backmenuListView={this._backmenuListView} />
        ) : (
          <div>
            <div className="MenuDetail-body">
              <MenuCardTable
                menuList={this.state.menuList}
                changeOrderList={this._changeOrderList}
              />
            </div>
            <div className="MenuDetail-foot">
              <Row>
                <Col sm="12" md={{ size: 6, offset: 5 }}>
                  <div style={{ display: "flex", margin: "30px" }}>
                    <div style={{ padding: "30px" }}>
                      <Button outline color="primary" onClick={() => {}}>
                        주문하기
                      </Button>
                    </div>
                    <div style={{ padding: "30px" }}>
                      <Button
                        outline
                        color="primary"
                        onClick={() => {
                          this.props.history.push("/menuList");
                        }}
                      >
                        뒤로가기
                      </Button>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        )}
      </div>
    );
  }
}
