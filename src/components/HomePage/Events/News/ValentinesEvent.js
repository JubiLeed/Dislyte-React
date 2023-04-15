import React from "react";
import "../EventsPage.css";
import { Link } from "react-router-dom";

const ValentinesEvent = () => {
  return (
    <div className="patchnote-container">
      <div className="title">
        <h1>Valentine's Day Fanart Contest</h1>
        <span>2023-02-01</span>
      </div>
      <h5>Valentine's Day Fanart Contest officially begins! </h5>
      <br />
      <br />
      <span style={{ fontSize: "15px", fontFamily: "Arial" }}>
        Draw a fanart of your favorite Dislyte Esper(s) celebrating{" "}
        <strong>Valentine's Day</strong> and win up to{" "}
        <strong>5000 Nexus Crystals</strong>, with a chance of getting an
        official
        <strong>Dislyte Merchandise Gift Box.</strong>
      </span>

      <img
        style={{ height: "160px", width: "85%", margin: "60px" }}
        src="./Images/Events/ValentinesEvent.jpg"
        alt="Valentine's Event"
      />
      <div className="event-details">
        <p>▌Duration</p>
        <ul>
          <li className="event-list">
            ◇ Submission Period: February 1, 2023, 6:00 AM - February 15, 2023,
            6:00 AM (UTC+0)
          </li>
          <li className="event-list">
            ◇ Winners Announcement: On February 20, 2023, 6:00 AM (UTC+0) on all
            our socials
          </li>
          <li className="event-list">
            ◇ Rewards Issuance: On February 28, 2023 (Gift Box reward might take
            longer)
          </li>
        </ul>
      </div>
      <br />
      <p>▌Rules</p>
      <ul>
        <li className="event-list">
          ◇ Draw at least one fanart with at least one Dislyte Esper with
          Valentine's Day elements like roses, chocolates, gifts, romantic
          dinners, etc.
        </li>
        <li className="event-list">
          ◇ Recommended Espers are <strong>Chloe, Q, and Alexa</strong>, but you
          can choose any Esper you like;
        </li>
        <li className="event-list">
          Recommended topics are your favorite Espers dressed up for a
          Valentine's Day date, Q's birthday party, gifts Espers may receive,
          your favorite Espers' ship, single Espers staying together, Espers'
          love stories based on Dislyte lore, etc;
        </li>
        <li className="event-list">
          It is not mandatory to include backgrounds, but they are highly
          encouraged! Be as detailed as your time and creativity allow;
        </li>
        <li className="event-list">
          ◇ You're allowed to do digital or traditional art at your convenience;
        </li>
        <li className="event-list">
          There is no limitation on the number of pieces of artwork you can
          submit; however, you can only claim one reward;
        </li>
        <li className="event-list">
          ◇ You can freely choose which social platform to post/submit your
          artwork, but in order for your submission to be valid, you{" "}
          <strong>MUST</strong> fill out the registration form by clicking on
          the <strong>REGISTER HERE</strong> button below;
        </li>
        <li className="event-list">
          You're strongly encouraged to share your work on Twitter and Instagram
          using <strong>#Dislyte</strong>, <strong>#DislyteFanart</strong>,
          <strong>#DislyteValentinesDay</strong>, and{" "}
          <strong>#ValentinesDay</strong> hashtags;
        </li>
        <li className="event-list">
          ◇ Fanart posted before/after the submission period will be deemed
          invalid;
        </li>
        <li className="event-list">
          Please refrain from including any unsuitable content in your
          submissions (including but not limited to politics, religion, NSFW,
          etc.). Plagiarism is forbidden;
        </li>
        <li className="event-list">
          ◇ By joining this event, you authorize Lilith Games to reuse your work
          on their official website/socials (with credits).
        </li>
        <li className="event-list">
          ◇ Dislyte Community Team reserves the right to the final
          interpretation of this event.
        </li>
      </ul>
      <br />
      <p>▌Rewards</p>
      <ul>
        <li className="event-list">
          ☆ <strong>First Prize</strong> (1 winner): Nexus Crystal x5000 +
          Dislyte Merchandise Gift Box x1
        </li>
        <li className="event-list">
          ☆ <strong>Second Prize </strong>(3 winners): Nexus Crystal x4000
        </li>
        <li className="event-list">
          ☆ <strong>Third Prize</strong> (5 winners): Nexus Crystal x3000
        </li>
        <li className="event-list">
          ☆ <strong>Q's Thank-You Gift</strong> (other participants): Nexus
          Crystal x1000
        </li>
      </ul>

      <p className="event-list">
        The Dislyte Merchandise Gift Box includes Raven Acrylic Stand, Tang Xuan
        Acrylic Phone Stand, Drawstring Backpack, and other products, depending
        on the stock.
      </p>

      <div className="newsBtn">
        <Link to={"/"} style={{ textDecoration: "none", color: "black" }}>
          <span>See more News</span>
        </Link>
      </div>
    </div>
  );
};

export default ValentinesEvent;
