import React, { Component } from "react";
import { Button, Input } from "reactstrap";
import { getStoerList, getStoreListAll } from "../menuListView/getServerDate";
import StoreTab from "./StoreTab";

export default class IndexView extends Component {
  constructor(props) {
    super(props);
    this.Timeout = undefined;
    this.state = {
      userId: 2,
      searchKeyword: "",
      categorys: ["My 매장", "전체 매장"],
      myStore: [],
      totalStore: [
        {
          storename: "테이블 db 없음",
          address: "test주소",
          Tel: "224-4242-123"
        }
      ]
    };
  }
  componentDidMount = async () => {
    var storeList = await getStoerList(this.state.userId);
    var storeListAll = await getStoreListAll();
    console.log(storeList.data);
    this.setState({
      myStore: storeList.data,
      totalStore: storeListAll.data,
      userId: this.props.location.userId
    });
  };
  _selectStore = storeId => {
    this.props.history.push({
      pathname: "/menulist",
      storeId: storeId,
      userId: this.state.userId
    });
  };
  _search = keyword => {
    if (this.Timeout !== undefined) clearTimeout(this.Timeout);
    let bindThis = this;
    this.Timeout = setTimeout(function() {
      bindThis.setState({
        searchKeyword: keyword
      });
    }, 500);
  };
  render() {
    return (
      <div>
        <div className="IndexView-head">
          <Input
            type="search"
            placeholder="매장을 입력하세요."
            onChange={e => {
              this._search(e.target.value);
            }}
          />
          {/*           <Button outline color="primary" className="IndexView ButtonSearch">
            검색
          </Button> */}
        </div>
        <div className="IndexView-body">
          <StoreTab storeData={this.state} selectStore={this._selectStore} />
        </div>
      </div>
    );
  }
}
