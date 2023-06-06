import React from "react";
import CardRow from "../CardRow";
import CardLayoutFooter from "../CardLayoutFooter";
import "./CardLayout.sass";

class CardLayout extends React.Component {
  render() {
    const { cardRow1Props, cardRow2Props, cardRow3Props, cardLayoutFooterProps } = this.props;

    return (
      <div className="card-layout">
        <CardRow
          card1Props={cardRow1Props.card1Props}
          card2Props={cardRow1Props.card2Props}
          card3Props={cardRow1Props.card3Props}
        />
        <CardRow
          card1Props={cardRow2Props.card1Props}
          card2Props={cardRow2Props.card2Props}
          card3Props={cardRow2Props.card3Props}
        />
        <CardRow
          card1Props={cardRow3Props.card1Props}
          card2Props={cardRow3Props.card2Props}
          card3Props={cardRow3Props.card3Props}
        />
        <CardLayoutFooter src={cardLayoutFooterProps.src} />
      </div>
    );
  }
}

export default CardLayout;
