import React, { useState, useEffect } from "react";
import PieActiveArc from "../components/Piechart";

const Results = () => {
  const [autoplayCount, setAutoplayCount] = useState(0);
  useEffect(() => {
    // Request the current autoplay count from background.js
    // eslint-disable-next-line no-undef
    chrome.runtime.sendMessage({ type: "getResults" }, (response) => {
      console.log("Message sent to background.js, response:", response);
      if (response && response.count !== undefined) {
        setAutoplayCount(response.count); // Set the autoplay count from the response
      }
    });
  }, []);
  return (
    <div>
      <div>
        <p>Autoplay detected: {autoplayCount} times</p>
        <PieActiveArc />

        <p>Placeholder for Total # DP detected</p>
        <p>Dark Patterns Detected</p>
      </div>
      <div>
        <p>Emotional Steering</p>
        <p>Infinite Scrolling</p>
        <p>Autoplay Videos</p>
        <p>Privacy Zuckering</p>
        <p>Engagement Notification</p>
        <p>Obstructing</p>
        <p>Promoted Tweets and Ads that Blend In</p>
      </div>
    </div>
  );
};

export default Results;
