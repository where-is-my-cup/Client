import React, { Component } from "react";
import { Row, Col, Button } from "reactstrap";
import "../../../styles/menuListView.css";
import img from "../../../image/img_1.png";

export default class IndexView extends Component {
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
                <div className="MenuDetail-selection">ice/hot</div>
              </Col>
              <Col>
                <div className="MenuDetail-selection">ice/hot</div>
              </Col>
              <Col>
                <div className="MenuDetail-selection">ice/hot</div>
              </Col>
            </Row>
          </div>
        </div>
        <div className="MenuDetail-foot">footer</div>
      </div>
    );
  }
}
