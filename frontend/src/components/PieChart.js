import * as React from "react";
import { PieChart } from "@mui/x-charts/PieChart";

const darkPattern = [
  { label: "Autoplay", value: 70 },
  { label: "Engagement Notification", value: 20 },
  { label: "Emotional Steering", value: 10 },
  { label: "Ads", value: 0 },
  { label: "Privacy", value: 0 },
  { label: "Obstruction", value: 0 },
];

const valueFormatter = (value) => {
  return `${value}%`;
};

export default function PieActiveArc() {
  return (
    <PieChart
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
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
