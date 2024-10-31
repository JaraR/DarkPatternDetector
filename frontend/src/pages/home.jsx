import React, { useState, useEffect } from "react";

import { Button } from "@/components/ui/button";
import { ButtonLink } from "@/components/ui/buttonlink";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "react-router-dom";
import PieActiveArc from "@/components/ui/piechart";

import AboutUsTab from "@/components/ui/AboutUsTab";
import SettingsTab from "@/components/ui/SettingsTab";
import Navbar from "@/components/ui/navbar";

export function Home() {
  const [autoplayCount, setAutoplayCount] = useState(0);

  useEffect(() => {
    chrome.runtime.sendMessage({ type: "getResults" }, (response) => {
      if (response && response.count !== undefined) {
        setAutoplayCount(response.count);
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
          <div className="m-3">
            <div>
              <p>Placeholder for Total # DP detected</p>
              <p>Detected Dark Patterns</p>
              <PieActiveArc autoplayCount={autoplayCount} />
            </div>
            <div>
              <p>Emotional Steering</p>
              <p>
                Infinite Scrolling
                <Button aschild>
                  <Link to="/infinitescrollingsettings">IFSettings</Link>
                </Button>
              </p>
              <p>
                <p>Autoplay Videos:{autoplayCount}</p>
                <ButtonLink to="/autoplaysettings">APSettings</ButtonLink>
              </p>
              <p>Privacy Zuckering</p>
              <p>Engagement Notification</p>
              <p>Obstruction</p>
              <p>Promoted Tweets and Ads that Blend In</p>
            </div>
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
