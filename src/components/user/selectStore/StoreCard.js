import React, { Component } from "react";
import { Card, CardText, Row, Col, Button } from "reactstrap";
import "../../../styles/menuListView.css";

export default class StoreCard extends Component {
  render() {
    var storeInfo = {};
    var { store, showMaps } = this.props;
    storeInfo.storename =
      store.stores !== undefined ? store.stores[0].storename : store.storename;
    storeInfo.address =
      store.stores !== undefined ? store.stores[0].address : store.address;

    return (
      <div>
        <div
          className="Card"
          onClick={e => {
            this.props.selectStore(store.id);
          }}
          style={{ float: "left", width: "90%", marginBottom: "10px" }}
        >
          {
            <Card body className="Card">
              <Row>
                <Col>
                  <h2>{storeInfo.storename}</h2>
                </Col>
                <Col>
                  <CardText>{storeInfo.address}</CardText>
                </Col>
                <Col sm="2">
                  <CardText>
                    {store.orderDate === undefined
                      ? ""
                      : store.orderDate.substring(0, 10)}
                  </CardText>
                </Col>
              </Row>
            </Card>
          }
        </div>
        <div style={{ float: "right", width: "auto", margin: "20px" }}>
          <Button
            outline
            color="primary"
            className="showMapBtn"
            onClick={() => {
              showMaps(storeInfo.address);
            }}
          >
            지도
          </Button>
        </div>
      </div>
    );
  }
}
