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

  useEffect(() => {
    chrome.runtime.sendMessage({ type: "updateAutoplay" }, (response) => {
      console.log("Response received from background:", response);
      if (response && response.count !== undefined) {
        setAutoplayCount(response.count);
      } else {
        console.error("Error: Autoplay count not received or is undefined.");
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
              Total Dark Patterns Detected: {autoplayCount}
            </Typography>
            <Typography variant="subtitle1" component="div" gutterBottom>
              Detected Dark Patterns
            </Typography>
            <PieActiveArc autoplayCount={autoplayCount} />
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
