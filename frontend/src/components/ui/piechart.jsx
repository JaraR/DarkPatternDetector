/* eslint-disable react/prop-types */
import * as React from "react";
import { PieChart } from "@mui/x-charts/PieChart";

export default function PieActiveArc({ autoplayCount }) {
  const darkPattern = [
    {
      label: `Autoplay ${autoplayCount}`,
      value: autoplayCount,
      color: "#94deff",
    },
    { label: "Engagement Notification", value: 10, color: "#9fa7b8" },
    { label: "Infinite Scrolling", value: 10, color: "#b9bd76" },
    { label: "Emotional Steering", value: 30, color: "#ed681d" },
    { label: "Promoted Ads", value: 20, color: "#adb2ff" },
    { label: "Privacy Zuckering", value: 5, color: "#b27b09" },
    { label: "Obstruction", value: 10, color: "#31356e" },
  ];

  // bugs here:
  const valueFormatter = (value) => `${value} times`;

  return (
    <PieChart
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: 10,
        border: "1px solid lightgrey",
        borderRadius: 10,
        padding: 5,
      }}
      series={[
        {
          data: darkPattern,
          highlightScope: { fade: "global", highlight: "item" },
          faded: { innerRadius: 30, additionalRadius: -30, color: "gray" },

          label: {
            render: (datum) => valueFormatter(datum.value),
          },
          color: darkPattern.map((item) => item.color),
        },
      ]}
      height={240}
      margin={{ top: 20, bottom: 20, left: 0, right: 250 }}
    />
  );
}
