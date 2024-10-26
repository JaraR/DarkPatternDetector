import * as React from "react";
import { PieChart } from "@mui/x-charts/PieChart";

export default function PieActiveArc() {
  const darkPattern = [
    { label: "Autoplay", value: 10 },
    { label: "Engagement Notification", value: 20 },
    { label: "Infinite Scrolling", value: 10 },
    { label: "Emotional Steering", value: 10 },
    { label: "Promoted Ads", value: 20 },
    { label: "Privacy Zuckering", value: 5 },
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
      }}
      series={[
        {
          data: darkPattern,
          highlightScope: { fade: "global", highlight: "item" },
          faded: { innerRadius: 30, additionalRadius: -30, color: "gray" },

          label: {
            render: (datum) => valueFormatter(datum.value),
          },
        },
      ]}
      height={200}
      margin={{ top: 20, bottom: 20, left: 0, right: 250 }}
    />
  );
}
