import React, { Component } from "react";
import { Button, ButtonGroup } from "reactstrap";

export default class SelectOptional extends Component {
  
  render() {
    return (
      <div>
        <ButtonGroup>
          {this.props.data.map(data => (
            <Button
              onClick={() => {
                this.props.setKind === undefined
                  ? this.props.setSize(data)
                  : this.props.setKind(data);
              }}
            >
              {data}
            </Button>
          ))}
        </ButtonGroup>
      </div>
    );
  }
}
