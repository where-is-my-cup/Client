import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import secret from "../../../secret/secret";

export default class ShowMaps extends Component {
  marker = (map, maps, position) => {
    let marker = new maps.Marker({
      position: position,
      map
    });
  };
  render() {
    const { lat, lng } = this.props.address;
    const position = { lat, lng };
    const zoom = 16;
    return (
      <div style={{ width: "100%", height: "50vh" }}>
        {
          <GoogleMapReact
            bootstrapURLKeys={{ key: secret.API }}
            defaultCenter={position}
            defaultZoom={zoom}
            onGoogleApiLoaded={({ map, maps }) =>
              this.marker(map, maps, position)
            }
          />
        }
      </div>
    );
  }
}
