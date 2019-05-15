import React, { Component } from "react";
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Card,
  Button,
  CardTitle,
  CardText,
  Row,
  Col
} from "reactstrap";
import MenuCardTable from "./MenuCardTable";

export default class MenuTab extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: "1"
    };
  }
  toggle = tab => {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  };
  render() {
    const { categorys, menus } = this.props.menuState;
    return (
      <div>
        {/* 상위 카테고리 탭을 선택하는 부분 케익, 음료 등등 */}
        <Nav tabs>
          {categorys.map((category, index) => (
            <NavItem key={index}>
              <NavLink
                onClick={() => {
                  index++;
                  this.toggle(index + "");
                }}
              >
                {category}
              </NavLink>
            </NavItem>
          ))}
        </Nav>
        {/* 각 카테고리 별 메류 리스트를 보여주는 부분  */}
        <TabContent activeTab={this.state.activeTab}>
          {categorys.map((category, index) => (
            <TabPane tabId={index + 1 + ""} key={index}>
              <Row>
                <Col sm="12">
                  <h4>{category}</h4>
                  <MenuCardTable
                    menuList={menus.filter(menu => {
                      return menu.category === category;
                    })}
                  />
                </Col>
              </Row>
            </TabPane>
          ))}

          {/* <TabPane tabId="2">
            <Row>
              <Col sm="6">
                <Card body>
                  <CardTitle>Special Title Treatment</CardTitle>
                  <CardText>
                    With supporting text below as a natural lead-in to
                    additional content.
                  </CardText>
                  <Button>Go somewhere</Button>
                </Card>
              </Col>
              <Col sm="6">
                <Card body>
                  <CardTitle>Special Title Treatment</CardTitle>
                  <CardText>
                    With supporting text below as a natural lead-in to
                    additional content.
                  </CardText>
                  <Button>Go somewhere</Button>
                </Card>
              </Col>
            </Row>
          </TabPane> */}
        </TabContent>
      </div>
    );
  }
}
