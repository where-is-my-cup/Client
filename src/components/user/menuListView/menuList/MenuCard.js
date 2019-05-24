import React, { Component } from "react";
import { Card, CardText, Row, Col } from "reactstrap";
import "../../../../styles/menuListView.css";

export default class MenuCard extends Component {
  render() {
    const menuImageSize = 80;
    const soldOut = this.props.menu.count === 0;
    return (
      <div
        onClick={() => {
          this.props.selectMenu(this.props.menu);
        }}
      >
        <Card body className="Card menu-taps">
          <Row id="cardBox">
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
            <Col sm="6" className="menuCard-menuUnit">
              <div id="menuCard-menuName">
                <h2>{this.props.menu.menuname}</h2>
                {this.props.menu.description}
              </div>
            </Col>
            {this.props.menu.price !== undefined ? (
              <Col className="menuCard-menuUnit">
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
