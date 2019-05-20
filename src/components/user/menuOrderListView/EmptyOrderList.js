import React, { Component } from "react";
import { Button, Row, Col } from "reactstrap";

export default class EmptyOrderList extends Component {
  render() {
    return (
      <div>
        <div>담긴 메뉴가 없습니다.</div>
        <div className="MenuDetail-foot">
          <Row>
            <Col sm="12" md={{ size: 6, offset: 5 }}>
              <div style={{ display: "flex", margin: "30px" }}>
                <div style={{ padding: "30px" }}>
                  <Button
                    outline
                    color="primary"
                    onClick={() => {
                      this.props.backmenuListView();
                    }}
                  >
                    취소
                  </Button>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}
