import * as React from "react";
import { PieChart } from "@mui/x-charts/PieChart";

export default function PieActiveArc({ autoplayCount }) {
  const darkPattern = [
    { label: "Autoplay", value: autoplayCount },
    { label: "Engagement Notification", value: 20 },
    { label: "Infinite Scrolling", value: 10 },
    { label: "Emotional Steering", value: 10 },
    { label: "Promoted Ads", value: 20 },
    { label: "Privacy Zuckering", value: 5 },
    { label: "Obstruction", value: 5, color: "gray" },
  ];

  // bugs here:
  const valueFormatter = (value) => `${value} times`;

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

          label: {
            render: (datum) => <span>{valueFormatter(datum.value)}</span>,
          },
        },
      ]}
      height={250}
      margin={{ top: 10, bottom: 5, left: 10, right: 250 }}
    />
  );
}
