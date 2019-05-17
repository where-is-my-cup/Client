import React, { Component } from "react";
import { Row, Col, Button } from "reactstrap";
import "../../../styles/menuListView.css";
import img from "../../../image/img_1.png";
import SelectOptional from "./SelectOptional";

export default class IndexView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      test: 1
    };
  }
  render() {
    const menuImageSize = 200;
    return (
      <div className="MenuDetail">
        <div className="MenuDetail-head">주문 상세메뉴</div>
        <div className="MenuDetail-body">
          <div className="MenuDetail-menuInfo">
            <img src={img} width={menuImageSize} height={menuImageSize} />
            <div className="MenuDetail-textInfo">
              <h1>아메리카노</h1>
              <h5 style={{ marginTop: "50px" }}>설명 부분 입니다.</h5>
            </div>
          </div>
          <div className="MenuDetail-select">
            <Row>
              <Col>
                <div className="MenuDetail-selection">
                  <SelectOptional data={["ICE", "HOT"]} />
                </div>
              </Col>
              <Col>
                <div className="MenuDetail-selection">
                  <SelectOptional data={["S", "M", "L"]} />
                </div>
              </Col>
              <Col>
                <div className="MenuDetail-selection">
                  <input type="number" />
                </div>
              </Col>
            </Row>
          </div>
        </div>
        <div className="MenuDetail-foot">
          <Row>
            <Col sm="12" md={{ size: 6, offset: 5 }}>
              <div style={{ display: "flex", margin: "30px" }}>
                <div style={{ padding: "30px" }}>
                  <Button outline color="primary">
                    확인
                  </Button>
                </div>
                <div style={{ padding: "30px" }}>
                  <Button outline color="primary">
                    취소
                  </Button>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}
