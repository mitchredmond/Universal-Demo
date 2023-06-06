import React from "react";
import "./Footer.sass";

class Footer extends React.Component {
  render() {
    const { src } = this.props;

    return (
      <footer className="footer">
        <img className="bottom" src={src} alt="Bottom" />
      </footer>
    );
  }
}

export default Footer;
