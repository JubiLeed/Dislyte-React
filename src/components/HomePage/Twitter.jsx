import React from "react";

import { TwitterTimelineEmbed } from "react-twitter-embed";
import "./HomePage.css";
import useMediaQuery from "../../MediaQueryList";

export const Twitter = () => {
  const isMobile = useMediaQuery("(max-width: 560px) ");

  return (
    <div className="container-fluid">
      <div className="row homeTitle mt-3">
        <h4>News</h4>
      </div>
      <section className="twitterContainer d-flex flex-wrap gap-4">
        <div className="twitterFeed mt-3">
          <TwitterTimelineEmbed
            sourceType="profile"
            screenName="dislyte"
            options={{ height: 400, width: 450 }}
          />
        </div>
        <div>
          <img
            className="twitterEsperImg"
            src={"./Images/Character/Embla_Ymir/Embla_pose_sprite.webp"}
            alt="Embla"
          />
        </div>
      </section>
    </div>
  );
};
