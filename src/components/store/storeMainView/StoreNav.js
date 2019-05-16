import React, { Component } from "react";
import Orders from "./Orders";
import StoreMenuList from "./StoreMenuList";
import { Tab, Row, Col, Nav } from "react-bootstrap";

export class StoreNav extends React.Component {
  render() {
    return (
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row>
          <Col sm={2}>
            <Nav variant="pills" className="flex-column">
              <Nav.Item>
                <Nav.Link eventKey="first"> 주문 현황</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second"> 메뉴 관리 </Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={9}>
            <Tab.Content>
              <Tab.Pane eventKey="first">
                <Orders />
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                <StoreMenuList />
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    );
  }
}

export default StoreNav;
