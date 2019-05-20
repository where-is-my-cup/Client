import React, { Component } from "react";
import { Card, CardText, Row, Col } from "reactstrap";
import "../../../../styles/menuListView.css";

export default class MenuCard extends Component {
  render() {
    const menuImageSize = 80;
    return (
      <div
        onClick={() => {
          this.props.selectMenu(this.props.menu);
        }}
      >
        <Card body>
          <Row>
            <Col sm="6">
              {
                <img
                  src={require("../../../../image/" +
                    this.props.menu.menus[0].imageURL)}
                  className="img-circle"
                  width={menuImageSize}
                  height={menuImageSize}
                />
              }
            </Col>
            <Col>
              <h2>{this.props.menu.menus[0].menuname}</h2>
            </Col>
            <Col>
              <CardText>₩ {this.props.menu.price}</CardText>
              <CardText>개수 : {this.props.menu.count}</CardText>
            </Col>
          </Row>
        </Card>
      </div>
    );
  }
}
