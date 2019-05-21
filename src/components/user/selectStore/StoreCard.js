import React, { Component } from "react";
import { Card, CardText, Row, Col, Button } from "reactstrap";
import "../../../styles/menuListView.css";

export default class StoreCard extends Component {
  render() {
    var storeInfo = {};
    var { store } = this.props;
    storeInfo.storename =
      store.stores !== undefined ? store.stores[0].storename : store.storename;
    storeInfo.address =
      store.stores !== undefined ? store.stores[0].address : store.address;
    storeInfo.orderDate =
      store.stores !== undefined ? store.stores[0].orderDate : "-";

    return (
      <div
        onClick={() => {
          this.props.selectStore(store.id);
        }}
      >
        {
          <Card body>
            <Row>
              <Col>
                <h2>{storeInfo.storename}</h2>
              </Col>
              <Col>
                <CardText>{storeInfo.address}</CardText>
                <CardText>{storeInfo.orderDate}</CardText>
              </Col>
              <Col>
                <div style={{ float: "right" }}>
                  <Button outline color="primary">
                    지도
                  </Button>
                </div>
              </Col>
            </Row>
          </Card>
        }
      </div>
    );
  }
}
