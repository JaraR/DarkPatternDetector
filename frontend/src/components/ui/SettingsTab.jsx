import React, { useState, useEffect } from "react";
import autoplay from "/icons/autoplay.png";
import infiniteScrolling from "/icons/infinite.png";
import engagementNotification from "/icons/notification.png";
import privacyZuckering from "/icons/privacy.png";
import obstruction from "/icons/obstruction.png";
import emotionalSteering from "/icons/emotion.png";
import promotedAds from "/icons/ads.png";
import filter from "/icons/filter.png";
import highlight from "/icons/highlight.png";
import customization from "/icons/customization.png";

export default function DarkPatternCheckboxes({ onCheckboxChange }) {
  const [checkboxStates, setCheckboxStates] = useState({
    autoplay: false,
    infiniteScrolling: false,
    engagementNotification: false,
    privacyZuckering: false,
    obstruction: false,
    emotionalSteering: false,
    promotedAds: false,
  });

  const [toggleStates, setToggleStates] = useState({
    "Video-pausing": "disabled",
    "Ad-blocking": "disabled",
    "Text/video-highlight": "disabled",
  });

  useEffect(() => {
    chrome.storage.local.get("checkboxStates", (result) => {
      if (result.checkboxStates) {
        setCheckboxStates(result.checkboxStates);
      }
    });
  }, []);

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    const updatedStates = { ...checkboxStates, [name]: checked };
    setCheckboxStates(updatedStates);
    chrome.storage.local.set({ checkboxStates: updatedStates });
    if (onCheckboxChange) onCheckboxChange(name, checked);
  };

  const handleRadioChange = (event) => {
    const { name, value } = event.target;
    setToggleStates((prevStates) => ({ ...prevStates, [name]: value }));
  };

  const iconMapping = {
    autoplay,
    infiniteScrolling,
    engagementNotification,
    privacyZuckering,
    obstruction,
    emotionalSteering,
    promotedAds,
  };

  const settingIcons = {
    "Video-pausing": autoplay,
    "Ad-blocking": promotedAds,
    "Text/video-highlight": highlight,
  };

  return (
    <div>
      {/* Filter Section */}
      <div className="ml-5 mt-5 flex items-center space-x-3">
        <img src={filter} alt="Filter icon" className="h-6 w-6" />
        <div>
          <h2 className="text-base font-bold">Filter by Types</h2>
          <p className="text-sm text-gray-600">
            Select dark patterns you want to detect
          </p>
        </div>
      </div>

      {/* Checkbox List */}
      <div className="flex flex-col space-y-4 border border-gray-200 rounded-lg p-4 m-5">
        {Object.entries(checkboxStates).map(([key, value]) => (
          <div key={key} className="flex items-center space-x-4">
            <img
              src={iconMapping[key]}
              alt={`${key} icon`}
              className="h-6 w-6"
            />
            <label htmlFor={key} className="text-sm flex-grow">
              {key
                .replace(/([A-Z])/g, " $1")
                .replace(/^./, (str) => str.toUpperCase())}
            </label>
            <input
              type="checkbox"
              id={key}
              name={key}
              checked={value}
              onChange={handleCheckboxChange}
              className="form-checkbox h-5 w-5 text-blue-600 border-gray-300 rounded"
            />
          </div>
        ))}
      </div>

      {/* Toggle Section with Radio Buttons */}
      <div className="flex flex-col space-y-4 border border-gray-200 rounded-lg p-4 m-5">
        <div className="flex items-center">
          <img
            src={customization}
            alt="customization icon"
            className="h-6 w-6"
          />
          <h2 className="text-base font-bold ml-2">Customization</h2>
          {/* <p className="text-sm text-gray-600">
          Enable/Disable additional features
        </p> */}
        </div>

        {["Video-pausing", "Ad-blocking", "Text/video-highlight"].map(
          (option) => (
            <div key={option} className="flex items-center space-x-4">
              <img
                src={settingIcons[option]}
                alt={`${option} icon`}
                className="h-6 w-6"
              />
              <label htmlFor={option} className="text-sm flex-grow">
                {option
                  .replace(/([A-Z])/g, " $1")
                  .replace(/^./, (str) => str.toUpperCase())}
              </label>

              {/* Radio buttons for Enable/Disable */}
              <div className="flex space-x-4">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name={option}
                    value="enabled"
                    checked={toggleStates[option] === "enabled"}
                    onChange={handleRadioChange}
                    className="form-radio h-3 w-3 text-blue-600"
                  />
                  <span className="ml-2">Enable</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name={option}
                    value="disabled"
                    checked={toggleStates[option] === "disabled"}
                    onChange={handleRadioChange}
                    className="form-radio h-3 w-3 text-red-600"
                  />
                  <span className="ml-2">Disable</span>
                </label>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
}
