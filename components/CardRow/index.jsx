import React from "react";
import Card from "../Card";
import "./CardRow.sass";

class CardRow extends React.Component {
  render() {
    const { card1Props, card2Props, card3Props } = this.props;

    return (
      <div className="card-row">
        <Card />
        <Card className={card1Props.className} />
        <Card className={card2Props.className} />
        <Card className={card3Props.className} />
      </div>
    );
  }
}

export default CardRow;
