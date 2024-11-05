import React, { useState, useEffect } from "react";

export default function DarkPatternCheckboxes({ onCheckboxChange }) {
  const [checkboxStates, setCheckboxStates] = useState({
    autoplay: false,
    infiniteScrolling: false,
    engagementNotification: false,
    privacyZuckering: false,
    obstruction: false,
    emotionalSteering: false,
  });

  // Load checkbox states from Chrome storage
  useEffect(() => {
    chrome.storage.local.get("checkboxStates", (result) => {
      if (result.checkboxStates) {
        setCheckboxStates(result.checkboxStates);
      }
    });
  }, []);

  // Handle checkbox change
  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    const newStates = {
      ...checkboxStates,
      [name]: checked,
    };

    setCheckboxStates(newStates);

    if (onCheckboxChange) {
      onCheckboxChange(name, checked); // Pass the name and checked state to the parent
    }

    // if (name === "autoplay") {
    //   console.log(`Autoplay is ${checked ? "checked" : "unchecked"}`);
    // }
    chrome.storage.local.set({ checkboxStates: newStates });
  };

  return (
    <div>
      <h2>Filter By Dark Pattern Types</h2>
      <div className="flex flex-col space-y-2">
        {Object.keys(checkboxStates).map((key) => (
          <div key={key} className="flex items-center space-x-2">
            <input
              type="checkbox"
              id={key}
              name={key}
              checked={checkboxStates[key]}
              onChange={handleCheckboxChange}
              className="form-checkbox h-4 w-4 text-blue-600 border-gray-300 rounded"
            />
            <label htmlFor={key} className="text-sm font-medium capitalize">
              {key.replace(/([A-Z])/g, " $1")}{" "}
              {/* Convert camelCase to readable format */}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}
