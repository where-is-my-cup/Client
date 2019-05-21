import React, { Component } from "react";
import { TabContent, TabPane, Nav, NavItem, NavLink } from "reactstrap";
import MenuCardTable from "../menuList/MenuCardTable";

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
    const { categorys, menus, searchKeyword } = this.props.menuState;
    return (
      <div>
        <div
          style={
            searchKeyword === "" ? { display: "inline" } : { display: "none" }
          }
        >
          {/* 상위 카테고리 탭을 선택하는 부분 케익, 음료 등등 */}
          <Nav tabs>
            {categorys.map((category, index) => (
              <NavItem key={index}>
                <NavLink
                  onClick={() => {
                    index++;
                    this._toggle(index + "");
                  }}
                >
                  {category}
                </NavLink>
              </NavItem>
            ))}
          </Nav>
          {/* 각 카테고리 별 메류 리스트를 보여주는 부분  */}
          <TabContent
            activeTab={this.state.activeTab}
            style={{ marginTop: "20px", border: "5px" }}
          >
            {categorys.map((category, index) => (
              <TabPane tabId={index + 1 + ""} key={index}>
                <MenuCardTable
                  menuList={menus.filter(menu => {
                    return menu.category === category;
                  })}
                  selectMenu={this.props.selectMenu}
                />
              </TabPane>
            ))}
          </TabContent>
        </div>
        <div
          style={
            searchKeyword === "" ? { display: "none" } : { display: "inline" }
          }
        >
          <h4 style={{ marginLeft: "10px", marginTop: "20px", border: "5px" }}>
            '{searchKeyword}'로 검색한 결과
          </h4>
          <MenuCardTable
            menuList={menus.filter(menu => {
              return menu.menuname.includes(searchKeyword);
            })}
          />
        </div>
      </div>
    );
  }
}
