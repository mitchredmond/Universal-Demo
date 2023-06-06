import React from "react";
import "./Button2.sass";

class Button2 extends React.Component {
  render() {
    const { children } = this.props;

    return (
      <article className="button-1">
        <div className="button-label-1">{children}</div>
      </article>
    );
  }
}

export default Button2;
