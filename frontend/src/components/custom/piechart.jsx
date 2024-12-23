/* eslint-disable react/prop-types */
import * as React from "react";
import { PieChart } from "@mui/x-charts/PieChart";
import noActivity from "../../../public/icons/no-activity.png";
import legendEN from "../../../public/icons/legend-square-EN.png";
import legendAP from "../../../public/icons/legend-square-AP.png";
import legendPA from "../../../public/icons/legend-square-PA.png";
import legendIS from "../../../public/icons/legend-square-IS.png"
import { PieChartLegendItem } from "./PieChartLegend";

export default function PieActiveArc({
  autoplayCount,
  promotedAdsCount,
  engagementNotifCount,
  infiniteScrollCount,
  switchTab
}) {
  console.log("Autoplay Count:", autoplayCount);
  console.log("Promoted Ads Count:", promotedAdsCount);
  console.log("Engagement Notification Count:", engagementNotifCount);
  console.log("Infinite Scroll Count:", infiniteScrollCount);
  const darkPattern = [
    {
      label: `Engagement Notifs`,
      value: engagementNotifCount,
      color: "#ffa600",
      legendIcon: legendEN,
      accordionVal: "5"
    },
    {
      label: `Video Autoplay`,
      value: autoplayCount,
      color: "#ff8453",
      legendIcon: legendAP,
      accordionVal: "3"
    },
    // { label: "Emotional Steering", value: 0, color: "#ef5675" },
    {
      label: `Promoted Ads`,
      value: promotedAdsCount,
      color: "#c38ee8",
      legendIcon: legendPA,
      accordionVal: "2"
    },
    {
      label: `Infinite Scrolling`,
      value: infiniteScrollCount,
      color: "#0095e1",
      legendIcon: legendIS,
      accordionVal: "4"
   ,
    },
    // { label: "Obstruction", value: 0, color: "#a1a1a8" },
    // { label: "Privacy Zuckering", value: 0, color: "#374c80" },
  ];

  // bugs here:
  const valueFormatter = (value) => `${value} times`;
  const hasActivity = darkPattern.some((item) => item.value > 0);

  return hasActivity ? (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      // margin: 10,
      // border: "1px solid lightgrey",
      // borderRadius: 10,
      // padding: 5,
    }}>
      <PieChart
        style={{
          // display: "flex",
          // justifyContent: "center",
          // alignItems: "center",
          // margin: 10,
          // border: "1px solid lightgrey",
          // borderRadius: 10,
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
        slotProps={{legend:{hidden: true}}}

        height={260}

        margin={{ top: 20, bottom: 20, left: 0, right: 0 }}
      />
      <div style={{display: "flex", flexDirection: "column", justifyContent: "center"}}>
        {darkPattern.map(individualDP => (
          <PieChartLegendItem
            key={individualDP.label}
            switchTab={switchTab}
            dpName={individualDP.label}
            legendIcon={individualDP.legendIcon}
            dpCount={individualDP.value}
            accordionVal={individualDP.accordionVal}
          />
        ))}
      </div>
    </div>
  ) : (
    <div className="w-full h-[280px] flex flex-col justify-start items-center bg-gray-100 border border-gray-300 rounded-lg">
      <img
        src={noActivity}
        alt="No activities"
        className="h-[180px] pl-10"
      ></img>
      <div className="text-gray-500 font-bold text-lg">
        No activities detected <br />
        Go to Settings tab to enable detection
      </div>
    </div>
  );
}
