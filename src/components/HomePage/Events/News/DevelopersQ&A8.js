import React from "react";
import { useParams } from "react-router-dom";
import "../EventsPage.css";

const DevelopersQA8 = () => {
  return (
    <div className="patchnote-container">
      <div className="title">
        <h1>Developers Q&A #8</h1>
        <span>2023-02-19</span>
      </div>
      <p>
        As promised, we've been routinely collecting your suggestions and
        feedback and inviting developers to answer them. In this episode, we
        invited developers to address issues that players are concerned about
        the most, like Ritual Miracle, Sonic Rift, gaming experience, etc. They
        will also share their optimization plans, so stay tuned!
      </p>
      <p>
        * If you have any suggestions or feedback about Dislyte, please leave a
        message in the Suggestions channel of Dislyte's official Discord, or
        report it in the surveys we publish routinely. We will collect all the
        content players care about the most and deliver it to the dev team to
        address them.
      </p>
      <img className="QAimage" src="./Images/Events/319QA.png" />
    </div>
  );
};

export default DevelopersQA8;
