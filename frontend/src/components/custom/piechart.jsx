/* eslint-disable react/prop-types */
import * as React from "react";
import { PieChart } from "@mui/x-charts/PieChart";
import noActivity from "../../../public/icons/no-activity.png";
import { ButtonLink } from "../ui/buttonlink";
import { Link } from "react-router-dom";
import { CircleHelp } from "lucide-react";
import legendEN from "../../../public/icons/legend-square-EN.png";
import legendAP from "../../../public/icons/legend-square-AP.png";
import legendPA from "../../../public/icons/legend-square-PA.png";
import legendIS from "../../../public/icons/legend-square-IS.png"

export default function PieActiveArc({
  autoplayCount,
  promotedAdsCount,
  engagementNotifCount,
  switchTab
}) {
  console.log("Autoplay Count:", autoplayCount);
  console.log("Promoted Ads Count:", promotedAdsCount);
  console.log("Engagement Notification Count:", engagementNotifCount);
  const darkPattern = [
    {
      label: `Engagement Notification`,
      value: engagementNotifCount,
      color: "#ffa600",
    },
    {
      label: `Video Autoplay`,
      value: autoplayCount,
      color: "#ff8453",
    },
    { label: "Emotional Steering", value: 0, color: "#ef5675" },
    {
      label: `Promoted Ads`,
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
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      // margin: 10,
      border: "1px solid lightgrey",
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
      <div style={{display: "flex", justifyContent: "flex-start"}}>
        {/* <svg xmlns="http://www.w3.org/2000/svg"><rect width="20" height="20" fill="#ff8453"></rect></svg> */}
        <ButtonLink variant="link">{darkPattern[3].label}</ButtonLink>
        <ButtonLink to="/EMLPage" variant="link">{darkPattern[3].value}</ButtonLink>
        <ButtonLink switchTab={switchTab} targetTab="about-dp" defaultAccordion="2" variant="link" size="icon"><CircleHelp /></ButtonLink>
      </div>
      <div style={{display: "flex", justifyContent: "flex-start"}}>
        {/* <svg xmlns="http://www.w3.org/2000/svg"><rect width="20" height="20" fill="#ff8453"></rect></svg> */}
        <ButtonLink switchTab={switchTab} targetTab="settings" variant="link">{darkPattern[0].label}</ButtonLink>
        <ButtonLink switchTab={switchTab} targetTab="about-dp" variant="link">{darkPattern[0].value}</ButtonLink>
        <ButtonLink switchTab={switchTab} targetTab="about-dp" defaultAccordion="5" variant="link" size="icon"><CircleHelp /></ButtonLink>
      </div>
      <div style={{display: "flex", justifyContent: "space-between"}}>
        {/* <svg xmlns="http://www.w3.org/2000/svg"><rect width="20" height="20" fill="#ff8453"></rect></svg> */}
        <Link to="/">{darkPattern[1].label}</Link>
        <Link to="EMLPage">{darkPattern[1].value}</Link>
        <ButtonLink switchTab={switchTab} targetTab="about-dp" defaultAccordion="3" variant="link" size="icon"><CircleHelp /></ButtonLink>
      </div>
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
