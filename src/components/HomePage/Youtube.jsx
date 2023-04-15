import React from "react";
import YouTube, { YouTubeProps } from "react-youtube";
import PropTypes from "prop-types";
import "./HomePage.css";

// https://youtu.be/y-dyqvQ_Bss
// https://www.youtube.com/watch?v=y-dyqvQ_Bss
// https://www.youtube.com/watch?v=y-dyqvQ_Bss&ab_channel=Dislyte

class YouTubeEmbed extends React.Component {
  videoOnReady(event) {
    event.target.loadVideoById();
  }

  render() {
    const opts = {
      height: "350",
      width: "550",
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      },
    };
    const { videoId } = this.props;
    const { iframeClassName } = this.props;
    const { style } = this.props;
    return (
      <YouTube
        videoId={videoId}
        opts={opts}
        onReady={this.videoOnReady}
        iframeClassName={iframeClassName}
        style={style}
      />
    );
  }
}

export default YouTubeEmbed;
