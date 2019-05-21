import React, { Component } from "react";
import StoreCard from "./StoreCard";

export default class StoreCardTable extends Component {
  render() {
    var { storeList } = this.props;
    return (
      <div>
        {storeList.map((data, index) => (
          <div
            style={{
              marginTop: "5px",
              marginLeft: "10px",
              marginRight: "10px"
            }}
            key={index}
          >
            <StoreCard
              store={data}
              selectStore={this.props.selectStore}
              showMaps={this.props.showMaps}
            />
          </div>
        ))}
      </div>
    );
  }
}
