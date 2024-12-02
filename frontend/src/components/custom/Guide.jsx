import * as React from "react";
import flowChart from "../../assets/user-flow.png";

export function Guide() {
  return (
    <div>
      <img
        src={flowChart}
        alt="User Flow Chart"
        style={{ width: "auto", height: "100%" }}
      />
    </div>
  );
}

export default Guide;
