import "./App.sass";
import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import MapView from "./components/MapView";
import UniversalDemo from "./components/UniversalDemo";
import CardView from "./components/CardView";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/:path(|universal-demo)">
            <UniversalDemo headerProps={universalDemoData.headerProps} footerProps={universalDemoData.footerProps} />
          </Route>
          <Route path="/map-view">
            <MapView mapView2Props={mapViewData.mapView2Props} />
          </Route>
          <Route path="/card-view">
            <CardView cardLayoutProps={cardViewData.cardLayoutProps} />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;

const mapPin2Data = {
    className: "map-pin-1",
};

const mapPin3Data = {
    className: "map-pin-2",
};

const mapPin4Data = {
    className: "map-pin-3",
};

const mapPin5Data = {
    className: "map-pin-4",
};

const mapPin6Data = {
    className: "map-pin-5",
};

const mapPin7Data = {
    className: "map-pin-6",
};

const mapPin8Data = {
    className: "map-pin-7",
};

const mapPin9Data = {
    className: "map-pin-8",
};

const mapPin10Data = {
    className: "map-pin-9",
};

const mapPin11Data = {
    className: "map-pin-10",
};

const mapPin12Data = {
    className: "map-pin-11",
};

const mapPin13Data = {
    className: "map-pin-12",
};

const mapPin14Data = {
    className: "map-pin-13",
};

const mapView2Data = {
    image: "/img/image.png",
    mapPin1Props: mapPin2Data,
    mapPin2Props: mapPin3Data,
    mapPin3Props: mapPin4Data,
    mapPin4Props: mapPin5Data,
    mapPin5Props: mapPin6Data,
    mapPin6Props: mapPin7Data,
    mapPin7Props: mapPin8Data,
    mapPin8Props: mapPin9Data,
    mapPin9Props: mapPin10Data,
    mapPin10Props: mapPin11Data,
    mapPin11Props: mapPin12Data,
    mapPin12Props: mapPin13Data,
    mapPin13Props: mapPin14Data,
};

const mapViewData = {
    mapView2Props: mapView2Data,
};

const buttonData = {
    children: "Map",
};

const button2Data = {
    children: "Things to Do",
};

const headerData = {
    buttonContainer: "/img/header-background.png",
    buttonProps: buttonData,
    button2Props: button2Data,
};

const footerData = {
    src: "/img/bottom-1.png",
};

const universalDemoData = {
    headerProps: headerData,
    footerProps: footerData,
};

const card2Data = {
    className: "card1-1",
};

const card3Data = {
    className: "card1-1",
};

const card4Data = {
    className: "card1-2",
};

const cardRow1Data = {
    card1Props: card2Data,
    card2Props: card3Data,
    card3Props: card4Data,
};

const card6Data = {
    className: "card1-1",
};

const card7Data = {
    className: "card1-1",
};

const card8Data = {
    className: "card1-2",
};

const cardRow2Data = {
    card1Props: card6Data,
    card2Props: card7Data,
    card3Props: card8Data,
};

const card10Data = {
    className: "card1-1",
};

const card11Data = {
    className: "card1-1",
};

const card12Data = {
    className: "card1-2",
};

const cardRow3Data = {
    card1Props: card10Data,
    card2Props: card11Data,
    card3Props: card12Data,
};

const cardLayoutFooterData = {
    src: "/img/card-layout-footer.png",
};

const cardLayoutData = {
    cardRow1Props: cardRow1Data,
    cardRow2Props: cardRow2Data,
    cardRow3Props: cardRow3Data,
    cardLayoutFooterProps: cardLayoutFooterData,
};

const cardViewData = {
    cardLayoutProps: cardLayoutData,
};

