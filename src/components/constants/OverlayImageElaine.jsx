import React from "react";
import "./Overlay.css";

export default class ImageComponentElaine extends React.Component {
  state = { isOpen: false };

  handleShowDialog = () => {
    this.setState({ isOpen: !this.state.isOpen });
    console.log("clicked");
  };

  render() {
    return (
      <div>
        <img
          className="image"
          src="Images/Character/Elaine_Nyx/Elaine_eventbanner.jpeg"
          onClick={this.handleShowDialog}
          alt="no image"
        />

        {this.state.isOpen && (
          <dialog
            className="dialog"
            style={{ position: "absolute" }}
            open
            onClick={this.handleShowDialog}>
            <img
              className="image"
              src="Images/Character/Elaine_Nyx/Elaine_eventbanner.jpeg"
              onClick={this.handleShowDialog}
              alt="no image"
            />
          </dialog>
        )}
      </div>
    );
  }
}
