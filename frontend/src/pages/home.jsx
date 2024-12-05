import {useEffect, useState} from "react";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import PieActiveArc from "@/components/custom/piechart";
import AboutDPTab from "@/components/custom/AboutDPTab";
import BottomNavigation from "@/components/custom/BottomNavigation";
import Typography from "@mui/material/Typography";

import SettingTab from "@/components/custom/SettingTab";
import Guide from "@/components/custom/Guide";
import {useLocation} from "react-router-dom";

function Navbar() {
  return null;
}

export function Home() {
  const [autoplayCount, setAutoplayCount] = useState(0);
  const [promotedAdsCount, setPromotedAdsCount] = useState(0);
  const [infiniteScrollCount, setIsInfiniteScrollCount] = useState(0);
  const [engagementNotifCount, setEngagementNotifCount] = useState(0);

  const returnTab = useLocation();

  if (returnTab.state === null) {
    returnTab.state = "results";
  }
  console.log(returnTab.state);

  //update autoplay count to pie chart
  useEffect(() => {
    chrome.runtime.sendMessage({type: "updateAutoplay"}, (response) => {
      console.log(
          "autoplay count response received from background:",
          response
      );
      if (response && response.count !== undefined) {
        setAutoplayCount(response.count);
      } else {
        console.error("Error: Autoplay count not received or is undefined.");
      }
    });
  }, []);
  //update promoted ads to pie chart
  useEffect(() => {
    chrome.runtime.sendMessage({type: "updatePromotedAds"}, (response) => {
      console.log("promoted ads response received from background:", response);
      if (response && response.count !== undefined) {
        setPromotedAdsCount(response.count);
      } else {
        console.error(
            "Error: Promoted Ads count not received or is undefined."
        );
      }
    });
  }, []);

  //update infinite scroll to pie chart
  useEffect(() => {
    chrome.runtime.sendMessage({type: "updateInfiniteScroll"}, (response) => {
      console.log(
          "infinite scroll response received from background:",
          response
      );
      if (response && response.count !== undefined) {
        setIsInfiniteScrollCount(response.count);
      } else {
        console.error(
            "Error: Infinite Scroll count not received or is undefined."
        );
      }
    });
  }, [infiniteScrollCount]);

  // Updates engagement notification count on pie chart
  useEffect(() => {
    chrome.runtime.sendMessage(
        {type: "updateEngagementNotif"},
        (response) => {
          console.log(
              "Engagement notification response received from background: ",
              response
          );
          if (response && response.count !== undefined) {
            setEngagementNotifCount(response.count);
          } else {
            console.error(
                "Error: Engagement notification count not received or is undefined."
            );
          }
        }
    );
  }, []);

  return (
      <>
        <Navbar />
        <Tabs defaultValue={returnTab.state} className="w-[400px]">
          <TabsList className="flex justify-around">
            <TabsTrigger value="results">Results</TabsTrigger>
            <TabsTrigger value="about-dp">About Dark Patterns</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
            <TabsTrigger value="use-guide">Use Guide</TabsTrigger>
          </TabsList>

          <TabsContent value="results">
            <div className="mt-5 mx-3 flex flex-col items-center text-center">
              <Typography variant="h6" component="div" gutterBottom>

              <span className="font-bold ">

                {promotedAdsCount + autoplayCount + engagementNotifCount + infiniteScrollCount}
                Times

              </span>

                <br/>
                Dark Pattern Activities Detected in Total
              </Typography>

              <PieActiveArc
                  autoplayCount={autoplayCount}
                  promotedAdsCount={promotedAdsCount}
                  infiniteScrollCount={infiniteScrollCount}
                  engagementNotifCount={engagementNotifCount}
              />

              <BottomNavigation/>
            </div>
          </TabsContent>

          <TabsContent value="about-dp">
            <AboutDPTab/>
          </TabsContent>

          <TabsContent value="settings">
            <SettingTab/>
          </TabsContent>
          <TabsContent value="use-guide">
            <Guide/>
          </TabsContent>
        </Tabs>
      </>
  );
}
