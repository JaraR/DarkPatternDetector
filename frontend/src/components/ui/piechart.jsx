/* eslint-disable react/prop-types */
import * as React from "react";
import { PieChart } from "@mui/x-charts/PieChart";

export default function PieActiveArc({ autoplayCount, promotedAdsCount }) {
  const darkPattern = [
    { label: "Engagement Notification", value: 10, color: "#ffa600" },
    {
      label: `Autoplay ${autoplayCount}`,
      value: autoplayCount,
      color: "#ff8453",
    },
    { label: "Emotional Steering", value: 10, color: "#ef5675" },
    {
      label: `Promoted Ads${promotedAdsCount}`,
      value: promotedAdsCount,
      color: "#c38ee8",
    },
    { label: "Infinite Scrolling", value: 10, color: "#0095e1" },
    { label: "Obstruction", value: 10, color: "#a1a1a8" },
    { label: "Privacy Zuckering", value: 5, color: "#374c80" },
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
