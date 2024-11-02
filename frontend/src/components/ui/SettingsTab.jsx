import React, { useState } from "react";

export default function DarkPatternCheckboxes({ onCheckboxChange }) {
  const [checkboxStates, setCheckboxStates] = useState({
    autoplay: false,
    infiniteScrolling: false,
    engagementNotification: false,
    privacyZuckering: false,
    obstruction: false,
    emotionalSteering: false,
  });

  // Handle checkbox change
  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setCheckboxStates((prevStates) => ({
      ...prevStates,
      [name]: checked,
    }));

    // Call the passed function for any checkbox change
    onCheckboxChange(name, checked);

    console.log(
      `${name} is at setting page`,
      checked ? "checked" : "unchecked"
    );
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
