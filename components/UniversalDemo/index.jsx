import React from "react";

import Header from "../Header";
import MainView from "../MainView";
import Footer from "../Footer";

import "./UniversalDemo.sass";

class UniversalDemo extends React.Component {
  
  handleViewChange = (showCardView) => {
    this.childRef.changeView(showCardView);
  };
  
  render() {
    const { headerProps, footerProps } = this.props;

    return (
      <div className="universal-demo screen">
      
        
        <Header
          sendViewChange={this.handleViewChange}
          buttonContainer={headerProps.buttonContainer}
          buttonProps={headerProps.buttonProps}
          button2Props={headerProps.button2Props}
        />
        <MainView 
          ref={(ref) => (this.childRef = ref)}
        />
        <Footer src={footerProps.src} />
      </div>
    );
  }
}

export default UniversalDemo;
