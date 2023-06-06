import React from "react";
import CardLayout from "../CardLayout";
import "./CardView.sass";

class CardView extends React.Component {
  render() {
    const { cardLayoutProps } = this.props;

    return (
      <div className="card-view screen">
        <CardLayout
          cardRow1Props={cardLayoutProps.cardRow1Props}
          cardRow2Props={cardLayoutProps.cardRow2Props}
          cardRow3Props={cardLayoutProps.cardRow3Props}
          cardLayoutFooterProps={cardLayoutProps.cardLayoutFooterProps}
        />
      </div>
    );
  }
}

export default CardView;
