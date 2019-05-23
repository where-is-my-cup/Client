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
        <Card body className="Card">
          <Row>
            <Col sm="3">
              {
                <img
                  src={require("../../../../image/" + this.props.menu.imageURL)}
                  className="img-circle"
                  width={menuImageSize}
                  height={menuImageSize}
                  alt=""
                />
              }
            </Col>
            <Col sm="6">
              <h2>{this.props.menu.menuname}</h2>
              {this.props.menu.description}
            </Col>
            {this.props.menu.price !== undefined ? (
              <Col>
                <CardText>₩ {this.props.menu.price}</CardText>
                <CardText>개수 : {this.props.menu.count}</CardText>
              </Col>
            ) : (
              <div />
            )}
          </Row>
        </Card>
      </div>
    );
  }
}
