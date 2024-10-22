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
    <div
      style={{
        margin: "50px 10px",
        textAlign: "center",
        border: "1px solid lightgrey",
        borderRadius: "10px",
        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
      }}
    >
      <div>
        <h2>Detected Dark Patterns </h2>
        <p>Autoplay detected: {autoplayCount} times</p>
        <PieActiveArc autoplayCount={autoplayCount} />
      </div>
    </div>
  );
};

export default Results;
