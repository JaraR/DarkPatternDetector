import React from "react";
import pri from "../icons/pri.png";

import emo from "../icons/emo.png";
import not from "../icons/not.png";
import auto from "../icons/auto.png";
import inf from "../icons/inf.png";

import ads from "../icons/ads.png";
import obs from "../icons/obs.png";
import filter from "../icons/filter.png";
import preference from "../icons/preference.png";

const Settings = () => {
  return (
    <div>
      <div className="filter-container">
        <h2 className="setting-page-title">
          <img src={filter} alt="filter-icon" className="dark-pattern-icon" />
          Filter by Dark Pattern Types
        </h2>
        <ul className="filter-list">
          <li>
            <img
              src={pri}
              alt="Privacy Zuckering"
              className="dark-pattern-icon"
            />
            Privacy Zuckering
            <input type="checkbox" className="filter-checkbox" />
          </li>
          <li>
            <img
              src={not}
              alt="Engagement Notifications"
              className="dark-pattern-icon"
            />
            Engagement Notifications
            <input type="checkbox" className="filter-checkbox" />
          </li>
          <li>
            <img
              src={emo}
              alt="Emotional Steering"
              className="dark-pattern-icon"
            />
            Emotional Steering
            <input type="checkbox" className="filter-checkbox" />
          </li>
          <li>
            <img src={obs} alt="Content Buried" className="dark-pattern-icon" />
            Content Buried
            <input type="checkbox" className="filter-checkbox" />
          </li>
          <li>
            <img src={auto} alt="Autoplay" className="dark-pattern-icon" />
            Autoplay
            <input type="checkbox" className="filter-checkbox" />
          </li>
          <li>
            <img
              src={inf}
              alt="Infinite Scrolling"
              className="dark-pattern-icon"
            />
            Infinite Scrolling
            <input type="checkbox" className="filter-checkbox" />
          </li>
          <li>
            <img src={ads} alt="Promoted Ads" className="dark-pattern-icon" />
            Promoted Ads
            <input type="checkbox" className="filter-checkbox" />
          </li>
        </ul>
      </div>
      <div className="preference-container">
        <h2 className="setting-page-title">
          <img
            src={preference}
            alt="preference-icon"
            className="dark-pattern-icon"
          />
          Preference
        </h2>
        <ul className="preference-list">
          <li>
            Auto Detection
            <input type="checkbox" className="pref-checkbox" />
          </li>
          <li>
            Allow Notification
            <input type="checkbox" className="pref-checkbox" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Settings;
