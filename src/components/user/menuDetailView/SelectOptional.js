import React, { Component } from "react";
import { Button, ButtonGroup } from "reactstrap";
import { isModuleSpecifier } from "@babel/types";

export default class SelectOptional extends Component {
  render() {
    return (
      <div>
        <ButtonGroup>
          {this.props.data.map(data => (
            <Button>{data}</Button>
          ))}
        </ButtonGroup>
      </div>
    );
  }
}
