import React from "react";
import "./Button.sass";

class Button extends React.Component {
  render() {
    const { children } = this.props;

    return (
      <article className="button">
        <div className="button-label">{children}</div>
      </article>
    );
  }
}

export default Button;
