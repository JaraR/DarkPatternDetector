import React, { useState, useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navbar from "@/components/ui/navbar";
import PieActiveArc from "@/components/ui/piechart";
import AboutUsTab from "@/components/ui/AboutUsTab";

import BottomNavigation from "@/components/ui/BottomNavigation";
import Typography from "@mui/material/Typography";
import SettingTab from "@/components/ui/SettingTab";

export function Home() {
  const [autoplayCount, setAutoplayCount] = useState(0);
  const [promotedAdsCount, setPromotedAdsCount] = useState(0);
  //update autoplay count to pie chart
  useEffect(() => {
    chrome.runtime.sendMessage({ type: "updateAutoplay" }, (response) => {
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
    chrome.runtime.sendMessage({ type: "updatePromotedAds" }, (response) => {
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

  return (
    <>
      <Navbar />

      <Tabs defaultValue="results" className="w-[400px]">
        <TabsList className="flex justify-around">
          <TabsTrigger value="results">Results</TabsTrigger>
          <TabsTrigger value="about-us">About Us</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>

        <TabsContent value="results">
          <div className="mt-8 mx-3 flex flex-col items-center text-center">
            <Typography variant="h6" component="div" gutterBottom>
              {/* {autoplayCount} (Autoplay) */}
              {promotedAdsCount}
            </Typography>
            <Typography variant="subtitle1" component="div" gutterBottom>
              Detected Dark Patterns
            </Typography>
            <PieActiveArc
              autoplayCount={autoplayCount}
              promotedAdsCount={promotedAdsCount}
            />
            <BottomNavigation />
          </div>
        </TabsContent>

        <TabsContent value="about-us">
          <AboutUsTab />
        </TabsContent>

        <TabsContent value="settings">
          <SettingTab />
        </TabsContent>
      </Tabs>
    </>
  );
}
