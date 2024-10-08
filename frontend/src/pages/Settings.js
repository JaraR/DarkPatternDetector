import React from "react";
import privacyIcon from "../icons/privacy.png";
import emotions from "../icons/emotions.png";
import engagement from "../icons/engagement.png";
import scroll from "../icons/scroll.png";
import autoplay from "../icons/autoplay.png";
import ads from "../icons/ads.png";
import contentBuried from "../icons/content-buried.png";
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
              src={privacyIcon}
              alt="Privacy Zuckering"
              className="dark-pattern-icon"
            />
            Privacy Zuckering
            <input type="checkbox" className="filter-checkbox" />
          </li>
          <li>
            <img
              src={engagement}
              alt="Engagement Notifications"
              className="dark-pattern-icon"
            />
            Engagement Notifications
            <input type="checkbox" className="filter-checkbox" />
          </li>
          <li>
            <img
              src={emotions}
              alt="Emotional Steering"
              className="dark-pattern-icon"
            />
            Emotional Steering
            <input type="checkbox" className="filter-checkbox" />
          </li>
          <li>
            <img
              src={contentBuried}
              alt="Content Buried"
              className="dark-pattern-icon"
            />
            Content Buried
            <input type="checkbox" className="filter-checkbox" />
          </li>
          <li>
            <img src={autoplay} alt="Autoplay" className="dark-pattern-icon" />
            Autoplay
            <input type="checkbox" className="filter-checkbox" />
          </li>
          <li>
            <img
              src={scroll}
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
