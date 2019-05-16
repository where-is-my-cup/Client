import React, { Component } from "react";
import { Image } from "react-bootstrap";
import { Card, CardTitle, CardText, Row, Col } from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";
import "../../../styles/menuListView.css";

export default class MenuCard extends Component {
  render() {
    const menuImageSize = 80;
    return (
      <div>
        <Card body>
          <Row>
            <Col sm="6">
              <img
                src={require("../../../../image/" + this.props.menu.imgPath)}
                className="img-circle"
                width={menuImageSize}
                height={menuImageSize}
              />
            </Col>
            <Col>
              <h2>{this.props.menu.name}</h2>
              <CardText>₩ {this.props.menu.price}</CardText>
            </Col>
          </Row>
        </Card>
      </div>
    );
  }
}
