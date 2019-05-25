import React, { Component } from "react";
import { Button, Input } from "reactstrap";
import { getStoerList, getStoreListAll } from "../menuListView/getServerDate";
import StoreTab from "./StoreTab";
import swal from "sweetalert";

const sock = require("../../../socket");

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
      ],
      loginStore: {}
    };
  }
  componentDidMount = async () => {
    var userId = this.props.location.userId;
    var storeList = await getStoerList(userId);
    var storeListAll = await getStoreListAll();
    this.setState({
      myStore: storeList.data,
      totalStore: storeListAll.data,
      userId: this.props.location.userId
    });
    sock.checkStore();
    sock.GoStore(this, storeList, storeListAll);
  };
  _selectStore = storeId => {
    for (var key in this.state.loginStore) {
      if (key + "" === storeId + "") {
        this.props.history.push({
          pathname: "/menulist",
          storeId: storeId,
          userId: this.state.userId
        });
        return;
      }
    }
    swal({
      title: "죄송합니다. 다른 매장을 선택하여 주십시오.",
      text: "해당 매장이 로그오프 상태입니다.",
      icon: "warning",
      dangerMode: false
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
        </div>
        <div className="IndexView-body">
          <StoreTab storeData={this.state} selectStore={this._selectStore} />
        </div>
      </div>
    );
  }
}
