import React, { useState, useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navbar from "@/components/ui/navbar";
import PieActiveArc from "@/components/ui/piechart";
import AboutUsTab from "@/components/ui/AboutUsTab";
import SettingsTab from "@/components/ui/SettingsTab";
import BottomNavigation from "@/components/ui/BottomNavigation";
import Typography from "@mui/material/Typography";

export function Home() {
  const [autoplayCount, setAutoplayCount] = useState(0);
  const [isSwitchOn, setIsSwitchOn] = useState(false);
  const [isAutoplayChecked, setIsAutoplayChecked] = useState(false);

  const handleSwitchChange = (event) => {
    const checked = event.target.checked;
    setIsSwitchOn(checked);
    chrome.storage.local.set({ isSwitchOn: checked });

    console.log(checked ? "Switch is on" : "Switch is off");

    // Send message based on the current state of the switch
    const messageType = checked ? "startAutoplay" : "stopAutoplay";
    chrome.runtime.sendMessage({ type: messageType }, (response) => {
      if (chrome.runtime.lastError) {
        console.error("Error sending message:", chrome.runtime.lastError);
      } else {
        console.log("Message sent successfully:", response);
      }
    });
  };

  const handleCheckboxChange = (name, checked) => {
    setIsAutoplayChecked(checked);
    chrome.storage.local.set({ isAutoplayChecked: checked });
    console.log(`${name} is ${checked ? "checked" : "unchecked"}`);
  };

  useEffect(() => {
    chrome.runtime.sendMessage({ type: "updateAutoplay" }, (response) => {
      if (response && response.count !== undefined) {
        setAutoplayCount(response.count);
      }
    });
  }, []);

  return (
    <>
      <Navbar isSwitchOn={isSwitchOn} onSwitchChange={handleSwitchChange} />

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
          <SettingsTab />
        </TabsContent>
      </Tabs>
    </>
  );
}
