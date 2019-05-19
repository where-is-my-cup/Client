import React, { Component } from "react";
import { Card, CardText, Row, Col, Button } from "reactstrap";
import "../../../styles/menuListView.css";

export default class OrderMenuCard extends Component {
  render() {
    const { keys, menu } = this.props;
    const { selectMenu, kind, size, count } = menu;
    const { imageURL } = selectMenu;
    const menuImageSize = 80;
    return (
      <div>
        <Card body>
          <Row>
            <Col sm="6">
              {
                <img
                  src={
                    imageURL === undefined
                      ? ""
                      : require("../../../image/" + imageURL)
                  }
                  width={menuImageSize}
                  height={menuImageSize}
                />
              }
            </Col>
            <Col>
              <h2>{selectMenu.menuname}</h2>
              <CardText>{kind + " / " + size + " / " + count}</CardText>
            </Col>
            <Col>
              <Button
                outline
                color="primary"
                onClick={() => {
                  this.props.changeOrderList(keys);
                }}
              >
                취소하기
              </Button>
            </Col>
          </Row>
        </Card>
      </div>
    );
  }
}
