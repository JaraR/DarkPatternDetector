import React, { useState, useEffect } from "react";
import autoplay from "/icons/autoplay.png";
import infiniteScrolling from "/icons/infinite.png";
import notification from "/icons/notification.png";
import privacyZuckering from "/icons/privacy.png";
import obstruction from "/icons/obstruction.png";
import emotion from "/icons/emotion.png";
import ads from "/icons/ads.png";
import filter from "/icons/filter.png";

export default function DarkPatternCheckboxes({ onCheckboxChange }) {
  const [checkboxStates, setCheckboxStates] = useState({
    autoplay: false,
    infiniteScrolling: false,
    engagementNotification: false,
    privacyZuckering: false,
    obstruction: false,
    emotionalSteering: false,
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

  const icons = {
    autoplay,
    infiniteScrolling,
    engagementNotification: notification,
    privacyZuckering,
    obstruction,
    emotionalSteering: emotion,
    ads,
  };

  return (
    <div>
      <div className="ml-5 mt-5 flex items-center space-x-3">
        <img src={filter} alt="Filter icon" className="h-6 w-6" />
        <div>
          <h2 className="text-base font-bold">Filter by Types</h2>
          <p className="text-sm text-gray-600">
            Select dark patterns you want to detect
          </p>
        </div>
      </div>

      <div className="flex flex-col space-y-4 border border-gray-200 rounded-lg p-4 m-5">
        {Object.entries(checkboxStates).map(([key, value]) => (
          <div key={key} className="flex items-center space-x-4">
            <img src={icons[key]} alt={`${key} icon`} className="h-6 w-6" />
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
    </div>
  );
}
