import React from "react";
import Button from "../Button";
import Button2 from "../Button2";
import "./Header.sass";

class Header extends React.Component {
  
  changeView = (showCardView) => {
    this.props.sendViewChange(showCardView);
  };
  
  render() {
    const { buttonContainer, buttonProps, button2Props } = this.props;

    return (
      <header className="header">
        <div className="button-container" style={{ backgroundImage: `url(${buttonContainer})` }}>
          <div 
            id="mapButton"
            onClick={()=>{
              this.changeView(false)
            }} 
          >
            <Button>{buttonProps.children}</Button>
          </div>
          <div 
            id="mapButton"
            onClick={()=>{
              this.changeView(true)
            }} 
          >
            <Button2>{button2Props.children}</Button2>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
