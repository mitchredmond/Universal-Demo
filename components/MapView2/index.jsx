import React from "react";
import MapPin from "../MapPin";
import Poicard from "../Poicard";
import "./MapView2.sass";

class MapView2 extends React.Component {
  render() {
    const {
      image,
      mapPin1Props,
      mapPin2Props,
      mapPin3Props,
      mapPin4Props,
      mapPin5Props,
      mapPin6Props,
      mapPin7Props,
      mapPin8Props,
      mapPin9Props,
      mapPin10Props,
      mapPin11Props,
      mapPin12Props,
      mapPin13Props,
    } = this.props;

    return (
      <div className="map-view-1">
        <div className="overlap-group14">
          <div className="map-image-crop">
            <img className="image" src={image} alt="Image" />
          </div>
          <MapPin />
          <MapPin className={mapPin1Props.className} />
          <MapPin className={mapPin2Props.className} />
          <MapPin className={mapPin3Props.className} />
          <MapPin className={mapPin4Props.className} />
          <MapPin className={mapPin5Props.className} />
          <MapPin className={mapPin6Props.className} />
          <MapPin className={mapPin7Props.className} />
          <MapPin className={mapPin8Props.className} />
          <MapPin className={mapPin9Props.className} />
          <MapPin className={mapPin10Props.className} />
          <MapPin className={mapPin11Props.className} />
          <MapPin className={mapPin12Props.className} />
          <MapPin className={mapPin13Props.className} />
          <div className="scroll-box">
            <div className="poicards">
              <Poicard />
              <Poicard />
              <Poicard />
              <Poicard />
              <Poicard />
              <Poicard />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MapView2;
