import React, { Component } from "react";
import { TabContent, Nav, TabPane, NavItem, NavLink } from "reactstrap";
import "../../../../styles/MenuTab.css";

import MenuList from "./MenuList";

export default class MenuTab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: "1"
    };
  }
  _toggle = tab => {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  };

  render() {
    const { tapList, menus, clickTap } = this.props;
    return (
      <div id="MenuTab">
        <Nav tabs>
          {tapList.map((category, index) => (
            <NavItem
              key={index}
              onClick={() => {
                clickTap(category);
              }}
            >
              <NavLink
                onClick={() => {
                  this._toggle(index + 1 + "");
                }}
              >
                {category}
              </NavLink>
            </NavItem>
          ))}
        </Nav>
        <TabContent
          activeTab={this.state.activeTab}
          style={{ marginTop: "20px", border: "5px" }}
        >
          <TabPane tabId={"1"}>
            {menus.map((menu, index) => (
              <MenuList selectMenu={menu} key={index} />
            ))}
          </TabPane>

          <TabPane tabId={"2"}>
            {menus.map((menu, index) => (
              <MenuList selectMenu={menu} key={index} />
            ))}
          </TabPane>

          <TabPane tabId={"3"}>
            {menus.map((menu, index) => (
              <MenuList selectMenu={menu} key={index} />
            ))}
          </TabPane>

          <TabPane tabId={"4"}>
            {menus.map((menu, index) => (
              <MenuList selectMenu={menu} key={index} />
            ))}
          </TabPane>
        </TabContent>
      </div>
    );
  }
}
