import React from "react";
import "./MapPin.sass";

class MapPin extends React.Component {
  render() {
    const { className } = this.props;

    return (
      <div className={`map-pin ${className || ""}`}>
        <div className="overlap-group">
          <img className="shadow" src="/img/shadow.svg" alt="Shadow" />
          <img className="path" src="/img/path.svg" alt="Path" />
          <img className="combined-shape" src="/img/combined-shape.svg" alt="Combined Shape" />
        </div>
      </div>
    );
  }
}

export default MapPin;
