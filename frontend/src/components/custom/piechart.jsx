/* eslint-disable react/prop-types */
import * as React from "react";
import { PieChart } from "@mui/x-charts/PieChart";
import noActivity from "../../../public/icons/no-activity.png";

export default function PieActiveArc({
  autoplayCount,
  promotedAdsCount,
  engagementNotifCount,
}) {
  console.log("Autoplay Count:", autoplayCount);
  console.log("Promoted Ads Count:", promotedAdsCount);
  console.log("Engagement Notification Count:", engagementNotifCount);
  const darkPattern = [
    {
      label: `Engagement Notification ${engagementNotifCount}`,
      value: engagementNotifCount,
      color: "#ffa600",
    },

    {
      label: `Video Autoplay ${autoplayCount}`,
      value: autoplayCount,
      color: "#ff8453",
    },
    { label: "Emotional Steering", value: 0, color: "#ef5675" },
    {
      label: `Promoted Ads ${promotedAdsCount}`,
      value: promotedAdsCount,
      color: "#c38ee8",
    },
    { label: "Infinite Scrolling", value: 0, color: "#0095e1" },
    { label: "Obstruction", value: 0, color: "#a1a1a8" },
    { label: "Privacy Zuckering", value: 0, color: "#374c80" },
  ];

  // bugs here:
  const valueFormatter = (value) => `${value} times`;
  const hasActivity = darkPattern.some((item) => item.value > 0);

  return hasActivity ? (
    <>
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
        height={260}
        margin={{ top: 20, bottom: 20, left: 0, right: 250 }}
      />
    </>
  ) : (
    <div className="w-full h-[280px] flex flex-col justify-start items-center bg-gray-100 border border-gray-300 rounded-lg">
      <img
        src={noActivity}
        alt="No activities"
        className="h-[180px] pl-10"
      ></img>
      <div className="text-gray-500 font-bold text-lg">
        No activities detected <br />
        Go to Settings tab Enable detections
      </div>
    </div>
  );
}
