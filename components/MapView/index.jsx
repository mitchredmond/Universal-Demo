import React from "react";
import MapView2 from "../MapView2";
import "./MapView.sass";

class MapView extends React.Component {
  render() {
    const { mapView2Props } = this.props;

    return (
      <div className="map-view screen">
        <MapView2 {...mapView2Props} />
      </div>
    );
  }
}

export default MapView;
