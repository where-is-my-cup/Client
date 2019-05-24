import React from "react";
import Orders from "../components/store/storeMainView/OrderList/Orders";
import StoreMain from "../components/store/storeMainView/StoreMain";
import MenuCardTable from "../components/store/storeMainView/MenuList/MenuCardTable";
import "../styles/StoreView.css";
import { Tab, Row, Col, Nav } from "react-bootstrap";
import { storeLogin } from "../socket";

export class StoreView extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount = () => {
    localStorage.storeId = this.props.location.storeId;
    storeLogin(localStorage.storeId);
  };

  render() {
    return (
      <div id="store-body">
        <Tab.Container id="left-tabs-example" defaultActiveKey="init">
          <Row>
            <Col id="storeView-col" sm={3}>
              <Nav variant="pills" className="flex-column">
                <Nav.Item className="left-tap">
                  <Nav.Link eventKey="first" onClick={this.onClick}>
                    주문 현황
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item className="left-tap">
                  <Nav.Link eventKey="second" onClick={this.onClick}>
                    메뉴 관리
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={9} className="col-9">
              <Tab.Content className="top-image">
                <Tab.Pane eventKey="init">
                  <StoreMain />
                </Tab.Pane>
                <Tab.Pane eventKey="first">
                  <Orders />
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <MenuCardTable />
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </div>
    );
  }
}

export default StoreView;
