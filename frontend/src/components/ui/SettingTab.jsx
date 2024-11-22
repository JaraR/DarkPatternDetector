import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import FilterIcon from "/public/icons/filter.png";
import infinite from "/public/icons/infinite.png";
import autoplay from "/public/icons/autoplay.png";
import emotional from "/public/icons/emotion.png";
import notification from "/public/icons/notification.png";
import obstruction from "/public/icons/obstruction.png";
import ads from "/public/icons/ads.png";
import privacy from "/public/icons/privacy.png";

import CustomizationCard from "@/components/ui/CustomizationCard";

// eslint-disable-next-line react/prop-types
export default function SettingTest() {
  const [isAutoplay, setIsAutoplay] = useState({});
  const [isPromotedAds, setIsProtomotedAds] = useState({});

  // autoplay detection
  const startAutoplayDetection = (e) => {
    if (chrome.storage) {
      chrome.storage.sync.set({ autoplay: e });
    }
    setIsAutoplay(e);
  };

  useEffect(() => {
    if (chrome.storage) {
      chrome.storage.sync.get(["autoplay"], (result) => {
        setIsAutoplay(result.autoplay);
      });
    }
  });

  //prmoted ads detection
  const startPromotedAdsDetection = (e) => {
    if (chrome.storage) {
      chrome.storage.sync.set({ promotedAds: e });
    }
    setIsProtomotedAds(e);
  };

  useEffect(() => {
    if (chrome.storage) {
      chrome.storage.sync.get(["promotedAds"], (result) => {
        setIsProtomotedAds(result.promotedAds);
      });
    }
  });

  return (
    <>
      <Card className="border border-gray-300 m-3">
        <CardHeader className="pt-2 pb-1">
          <CardTitle className="flex items-center">
            <img src={FilterIcon} alt="Filter Icon" className="h-6 w-6 mr-3" />
            <span className="text-xl">Enable/Disable Dark Pattern</span>
          </CardTitle>

          <CardDescription>
            Select Dark Pattern you want to detect
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-3">
          <div className="flex items-center justify-between space-x-3">
            <Label htmlFor="autoplay" className="flex items-center space-x-3">
              <img
                src={autoplay}
                alt="Autoplay Filter Icon"
                className="h-6 w-6 mr-2"
              />
              <span className="text-lg font-light">Autoplay</span>
            </Label>
            <Checkbox
              id="autoplay"
              checked={isAutoplay}
              onCheckedChange={startAutoplayDetection}
            />
          </div>

          <div className="flex items-center justify-between space-x-3">
            <Label
              htmlFor="infinite-scrolling"
              className="flex items-center space-x-3"
            >
              <img
                src={infinite}
                alt="Infinite Scrolling Filter Icon"
                className="h-6 w-6 mr-2"
              />
              <span className="text-lg font-light">Infinite Scrolling</span>
            </Label>
            <Checkbox id="infinite-scrolling" />
          </div>

          <div className="flex items-center justify-between space-x-3">
            <Label
              htmlFor="engagement-notification"
              className="flex items-center space-x-3"
            >
              <img
                src={notification}
                alt="Engagement Notification Filter Icon"
                className="h-6 w-6 mr-2"
              />
              <span className="text-lg font-light">
                Engagement Notification
              </span>
            </Label>
            <Checkbox id="engagement-notification" />
          </div>

          <div className="flex items-center justify-between space-x-3">
            <Label
              htmlFor="emotional-steering"
              className="flex items-center space-x-3"
            >
              <img
                src={emotional}
                alt="Emotional Steering Filter Icon"
                className="h-6 w-6 mr-2"
              />
              <span className="text-lg font-light">Emotional Steering</span>
            </Label>
            <Checkbox id="emotional-steering" />
          </div>

          <div className="flex items-center justify-between space-x-3">
            <Label
              htmlFor="promoted-ads"
              className="flex items-center space-x-3"
            >
              <img
                src={ads}
                alt="Promoted Ads Filter Icon"
                className="h-6 w-6 mr-2"
              />
              <span className="text-lg font-light">Promoted Ads</span>
            </Label>
            <Checkbox
              id="promoted-ads"
              checked={isPromotedAds}
              onCheckedChange={startPromotedAdsDetection}
            />
          </div>

          <div className="flex items-center justify-between space-x-3">
            <Label
              htmlFor="privacy-zuckering"
              className="flex items-center space-x-3"
            >
              <img
                src={privacy}
                alt="Privacy Zuckering Filter Icon"
                className="h-6 w-6 mr-2"
              />
              <span className="text-lg font-light">Privacy Zuckering</span>
            </Label>
            <Checkbox id="privacy-zuckering" />
          </div>

          <div className="flex items-center justify-between space-x-3">
            <Label
              htmlFor="obstruction"
              className="flex items-center space-x-3"
            >
              <img
                src={obstruction}
                alt="Obstruction Filter Icon"
                className="h-6 w-6 mr-2"
              />
              <span className="text-lg font-light">Obstruction</span>
            </Label>
            <Checkbox id="obstruction" />
          </div>
        </CardContent>
      </Card>
      <CustomizationCard />
    </>
  );
}
