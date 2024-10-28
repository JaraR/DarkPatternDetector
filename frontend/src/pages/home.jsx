import React, { useState, useEffect } from "react";

import { Button } from "@/components/ui/button";
import { ButtonLink } from "@/components/ui/buttonlink";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "react-router-dom";
import PieActiveArc from "@/components/ui/piechart";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Switch } from "@/components/ui/switch";
import AboutUsTab from "@/components/ui/AboutUsTab";

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
      <Switch />

      <Tabs defaultValue="results" className="w-[400px]">
        <TabsList>
          <TabsTrigger value="results">Results</TabsTrigger>
          <TabsTrigger value="about-us">About Us</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>
        <TabsContent value="results">
          <div>
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
          <Card>
            <CardHeader>
              <CardTitle>Filter By Dark Pattern Types</CardTitle>
              <CardDescription>description</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-2">
                <Checkbox id="terms" defaultChecked={true} />
                <Label htmlFor="terms">Autoplay</Label>
              </div>
            </CardContent>
            <CardContent>
              <div className="flex items-center space-x-2">
                <Checkbox id="terms" defaultChecked={true} />
                <Label htmlFor="terms">Infinite Scrolling</Label>
              </div>
            </CardContent>

            <CardFooter>
              <p>Card Footer</p>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </>
  );
}
