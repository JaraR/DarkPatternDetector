import React from "react";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import adblocking from "/public/icons/adblocking.png";
import pause from "/public/icons/pause.png";
import customization from "/public/icons/customization.png";
import highlight from "/public/icons/highlight.png";

const CustomizationCard = () => {
  return (
    <Card className="border border-gray-300 m-3">
      <CardHeader className="pb-1 pt-1">
        <CardTitle className="flex items-center">
          <img src={customization} alt="Filter Icon" className="h-4 w-4 mr-3" />
          <span className="text-xl">Customization</span>
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-3 pt-2 pb-3">
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
                id="video-pausing-enable"
                value="enable"
                className="form-radio h-4 w-4 text-blue-600"
              />
              <span className="text-xs">Enable</span>
            </label>
            <label className="flex items-center space-x-1">
              <input
                type="radio"
                name="video-pausing"
                id="video-pausing-disable"
                value="disable"
                className="form-radio h-4 w-4 text-blue-600"
              />
              <span className="text-xs">Disable</span>
            </label>
          </div>
        </div>

        {/* Ad-Blocking */}
        <div className="flex items-center justify-between space-x-3">
          <Label htmlFor="ad-blocking" className="flex items-center space-x-2">
            <img
              src={adblocking}
              alt="Ad-Blocking Icon"
              className="h-4 w-4 mr-2"
            />
            <span className="text-sm font-light">Ad-Blocking</span>
          </Label>
          <div className="flex items-center space-x-2">
            <label className="flex items-center space-x-1">
              <input
                type="radio"
                name="ad-blocking"
                id="ad-blocking-enable"
                value="enable"
                className="form-radio h-4 w-4 text-blue-600"
              />
              <span className="text-xs">Enable</span>
            </label>
            <label className="flex items-center space-x-1">
              <input
                type="radio"
                name="ad-blocking"
                id="ad-blocking-disable"
                value="disable"
                className="form-radio h-4 w-4 text-blue-600"
              />
              <span className="text-xs">Disable</span>
            </label>
          </div>
        </div>

        {/* Text/Video Highlight */}
        <div className="flex items-center justify-between space-x-3">
          <Label
            htmlFor="text-video-highlight"
            className="flex items-center space-x-2"
          >
            <img
              src={highlight}
              alt="Text/Video Highlight Icon"
              className="h-4 w-4 mr-2"
            />
            <span className="text-sm font-light">Text/Video Highlight</span>
          </Label>
          <div className="flex items-center space-x-2">
            <label className="flex items-center space-x-1">
              <input
                type="radio"
                name="text-video-highlight"
                id="text-video-highlight-enable"
                value="enable"
                className="form-radio h-4 w-4 text-blue-600"
              />
              <span className="text-xs">Enable</span>
            </label>
            <label className="flex items-center space-x-1">
              <input
                type="radio"
                name="text-video-highlight"
                id="text-video-highlight-disable"
                value="disable"
                className="form-radio h-4 w-4 text-blue-600"
              />
              <span className="text-xs">Disable</span>
            </label>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CustomizationCard;
