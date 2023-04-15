import React from "react";
import "./Overlay.css";

export default class ImageComponent extends React.Component {
  state = { isOpen: false };

  handleShowDialog = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    const { src } = this.props;

    return (
      <div>
        <img
          className="eventI"
          src={src}
          onClick={this.handleShowDialog}
          alt="event esper"
          style={{
            boxShadow:
              "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)",
          }}
        />

        {this.state.isOpen && (
          <div className="overlay">
            <div className="overlay_background" onClick={this.handleShowDialog}>
              <div className="overlay_container">
                <div className="overlay_controls">
                  {" "}
                  <img
                    className="image"
                    src={src}
                    onClick={this.handleShowDialog}
                    alt="event esper"
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}
