import React from "react";
import "./Poicard.sass";

class Poicard extends React.Component {
  render() {
    return (
      <article className="poicard">
        <div className="overlap-group-1">
          <img
            className="screen-shot-2021-11"
            src="/img/screen-shot-2021-11-04-at-1-44-38-pm-copy-15@2x.png"
            alt="Screen Shot 2021-11-04 at 1.44.38 PM Copy 15"
          />
        </div>
        <div className="flex-col">
          <div className="flex-row">
            <div className="overlap-group-2">
              <img
                className="icon-location_pin"
                src="/img/atoms---molecules-iconography-location-pin-copy-3.svg"
                alt="icon-location_pin"
              />
            </div>
            <p className="the-wizarding-world valign-text-middle avenirnext-bold-licorice-11px">
              The Wizarding World of <br />
              Harry Potter™
            </p>
          </div>
          <div className="overlap-group-3">
            <p className="hagrids-magical-cre valign-text-middle avenirnext-bold-log-cabin-16px">
              Hagrid’s Magical Creatures Motorbike Adventure™
            </p>
            <p className="minimum-height-48-copy-4 valign-text-middle avenirnext-regular-normal-log-cabin-12px">
              Minimum height 48”; Thrill Ride
            </p>
          </div>
          <div className="text-copy-16 avenirnext-demi-bold-science-blue-14px">Read More</div>
        </div>
      </article>
    );
  }
}

export default Poicard;
