import React, { Component } from "react";
import { Row, Col, Button, Input, Card } from "reactstrap";
import MenuTab from "../../common/MenuTab";

export default class IndexView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categorys: ["My 매장, 전체 매장"],
      storeData: [
        {
          id: 1,
          storename: "성수점",
          adress: "서울 특별시 송파구 아차산로 48",
          tel: "02-2002-2323"
        }
      ]
    };
  }
  componentDidMount = () => {};
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
            onClick={() => {
              this.props.history.push("/menuOrderList");
            }}
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
