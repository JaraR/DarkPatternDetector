import * as React from "react";
import { PieChart } from "@mui/x-charts/PieChart";

const valueFormatter = (value) => {
  return `${value}%`;
};

export default function PieActiveArc({ autoplayCount }) {
  const darkPattern = [
    { label: "Autoplay", value: autoplayCount },
    { label: "Engagement Notification", value: 20 },
    { label: "Infinite Scrolling", value: 10 },
    { label: "Emotional Steering", value: 10 },
    { label: "Promoted Ads", value: 20 },
    { label: "Privacy Zuckering", value: 5 },
  ];
  return (
    <PieChart
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      series={[
        {
          data: darkPattern,
          highlightScope: { fade: "global", highlight: "item" },
          faded: { innerRadius: 30, additionalRadius: -30, color: "gray" },
          valueFormatter,
          label: {
            offset: 20,
            fontSize: 10,
          },
          markerSize: 8,
        },
      ]}
      height={200}
      margin={{ top: 20, bottom: 20, left: 0, right: 250 }}
    />
  );
}
