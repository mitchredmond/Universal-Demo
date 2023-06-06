import React from "react";
import "./Card.sass";

class Card extends React.Component {
  render() {
    const { className } = this.props;

    return (
      <article className={`card1-3 ${className || ""}`}>
        <div className="group-1">
          <div className="overlap-group-4">
            <div className="content">
              <img className="image-1" src="/img/image-1.svg" alt="Image" />
              <div className="land-color-strip"></div>
              <div className="info-card-content-alt">
                <div className="copy">
                  <div className="title avenirnext-bold-log-cabin-16px">Amitista’s Cookhouse</div>
                  <p className="callout-text avenirnext-medium-log-cabin-12px">
                    Minimum Height 48&#34; (122 cm), Thrill Ride, Loose Articles Prohibited, Child Swap Available,
                    Express Pass Accepted
                  </p>
                </div>
              </div>
            </div>
            <div className="main-small">
              <div className="elements">
                <div className="attraction avenirnext-bold-white-11px">Attraction</div>
              </div>
            </div>
          </div>
        </div>
      </article>
    );
  }
}

export default Card;
