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
import adblocking from "/public/icons/adblocking.png";
import pause from "/public/icons/pause.png";
import customization from "/public/icons/customization.png";
import highlight from "/public/icons/highlight.png";

// eslint-disable-next-line react/prop-types
export default function SettingTest() {
  const [isAutoplay, setIsAutoplay] = useState({});

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

  return (
    <>
      <Card className="border border-gray-300 m-3">
        <CardHeader>
          <CardTitle className="flex items-center">
            <img src={FilterIcon} alt="Filter Icon" className="h-6 w-6 mr-3" />
            <span className="text-xl">Filter By Types</span>
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
            <Checkbox id="promoted-ads" />
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
      <Card className="border border-gray-300 m-3">
        <CardHeader>
          <CardTitle className="flex items-center">
            <img
              src={customization}
              alt="Filter Icon"
              className="h-4 w-4 mr-3"
            />
            <span className="text-xl">Customization</span>
          </CardTitle>
        </CardHeader>

        <CardContent className="space-y-3 pt-2">
          {/* Video-Pausing */}
          <div className="flex items-center justify-between space-x-3">
            <Label
              htmlFor="video-pausing"
              className="flex items-center space-x-2"
            >
              <img
                src={pause}
                alt="Video-Pausing Icon"
                className="h-4 w-4 mr-2"
              />
              <span className="text-sm font-light">Video-Pausing</span>
            </Label>
            <div className="flex items-center space-x-2">
              <label className="flex items-center space-x-1">
                <input
                  type="radio"
                  name="video-pausing"
                  value="enable"
                  className="form-radio h-4 w-4 text-blue-600"
                />
                <span className="text-xs">Enable</span>
              </label>
              <label className="flex items-center space-x-1">
                <input
                  type="radio"
                  name="video-pausing"
                  value="disable"
                  className="form-radio h-4 w-4 text-blue-600"
                />
                <span className="text-xs">Disable</span>
              </label>
            </div>
          </div>
          {/* Ads-Pausing */}
          <div className="flex items-center justify-between space-x-3">
            <Label
              htmlFor="video-pausing"
              className="flex items-center space-x-2"
            >
              <img
                src={adblocking}
                alt="Video-Pausing Icon"
                className="h-4 w-4 mr-2"
              />
              <span className="text-sm font-light">Ad-Blocking</span>
            </Label>
            <div className="flex items-center space-x-2">
              <label className="flex items-center space-x-1">
                <input
                  type="radio"
                  name="video-pausing"
                  value="enable"
                  className="form-radio h-4 w-4 text-blue-600"
                />
                <span className="text-xs">Enable</span>
              </label>
              <label className="flex items-center space-x-1">
                <input
                  type="radio"
                  name="video-pausing"
                  value="disable"
                  className="form-radio h-4 w-4 text-blue-600"
                />
                <span className="text-xs">Disable</span>
              </label>
            </div>
          </div>
          {/* Ads-Pausing */}
          <div className="flex items-center justify-between space-x-3">
            <Label
              htmlFor="video-pausing"
              className="flex items-center space-x-2"
            >
              <img
                src={highlight}
                alt="Video-Pausing Icon"
                className="h-4 w-4 mr-2"
              />
              <span className="text-sm font-light">Tex/Video Highlight</span>
            </Label>
            <div className="flex items-center space-x-2">
              <label className="flex items-center space-x-1">
                <input
                  type="radio"
                  name="video-pausing"
                  value="enable"
                  className="form-radio h-4 w-4 text-blue-600"
                />
                <span className="text-xs">Enable</span>
              </label>
              <label className="flex items-center space-x-1">
                <input
                  type="radio"
                  name="video-pausing"
                  value="disable"
                  className="form-radio h-4 w-4 text-blue-600"
                />
                <span className="text-xs">Disable</span>
              </label>
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  );
}
