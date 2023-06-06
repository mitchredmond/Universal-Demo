import React from "react";
import "./CardLayoutFooter.sass";

class CardLayoutFooter extends React.Component {
  render() {
    const { src } = this.props;

    return (
      <div className="card-layout-footer">
        <img className="card-layout-footer-1" src={src} alt="Card Layout Footer" />
      </div>
    );
  }
}

export default CardLayoutFooter;
